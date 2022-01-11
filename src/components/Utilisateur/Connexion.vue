<template>
  <form action="">
    <div>
      <h1><span>Connecte-toi</span> à ton compte !</h1>
      <p>Tu auras accès à tes informations personnelles, celles de ton équipe mais aussi aux résultats de chaque
        mini-jeux !</p>
      <router-link to="/Inscription"><a href="#">Je n'ai pas encore de compte</a></router-link>
    </div>

    <div>
      <img src="../../assets/user.png" alt="user">

      <input type="text"
             placeholder="Nom d'utilisateur"
              v-model="utilisateur.pseudo" required
      >
      <input type="password"
             placeholder="Mot de passe"
             v-model="utilisateur.mot_de_passe" required
      >

      <router-link to="/Accueil">
        <button type="submit" class="boutonViolet"
                  @click="connect">
            Se connecter
        </button>
      </router-link>
    </div>
  </form>
</template>

<script>
import param from "../../param/param";
import appService from "../../services/appService";

export default {
  name: "Connexion",

  data() {
    return {
      utilisateur: { // Structure d'un utilisateur
        pseudo: null,
        mot_de_passe: null,
        token:null,
        role:null,
        imageUser: null
      },
      titre: null,

      // Menu de l'utilisateur
      // Au moins Accueil si pas connecté
      menu:['Accueil']
    }
  },
  created() {
    // Titre par défaut
    this.titre = param.titre;

    // Recherche si utilisateur localStorage
    let utilisateurLocal = appService.getLocal();
    if(utilisateurLocal != null){
      console.log("Utilisateur existant");
      // S'il y a un token accès pour droit sur la page
      // L'utilisateur pourrait connaitre le chemin
      this.utilisateur = utilisateurLocal;
      this.titre = this.utilisateur.nom;
      // Pour avoir toutes les informations utilisateur
      // + les routes
      this.getUser();
    }
  },

  // Récuperer utilisateur en back, par rapport à son ID ou le retrouver
  // Verifier que le mot de passe entré est le bon
  methods:{
    // FONCTION QUI GET UTILISATEUR LOCAL SI IL EN A UN
    getUser(){
      // S'il y a un utilisateur local
      console.log("utilisateur local", this.utilisateur);
      // Mise à jour headers d'authorisation
      let headers = {'Authorization' : 'Bearer '+ this.utilisateur.token}
      // Récupération des infos de l'utilisateur connecté
      axios({
        method: 'get',
        url: param.hostUtilisateur+'/me',
        headers: headers
      }).then(function (response) {
        console.log("Données utilisateur", response.data);
      }.bind(this))
        .catch(error => {
          console.log("ERREUR accès utilisateur me", error);
        })
    },

    // FONCTION CONNECTION
    connect: function (){
      console.log("Connect");
      // Connexion utilisateur avec user / mot de passe
      let params = new FormData();
      params.append('username',    this.utilisateur.pseudo);
      params.append('password',    this.utilisateur.mot_de_passe);

      axios({
        method: 'post',
        url: param.auth,
        data : params
      }).then(function (response) {
        console.log("Response token",response);
        // Récupération info utilisateur
        this.utilisateur = response.data;
        console.log("utilisateur", response.data);
        // Mise à jour du titre
        this.titre = this.utilisateur.user_display_name;
        // Sauvegarde dans le localStorage
        // Token , nom prénom
        let localValues = {
          nom: this.utilisateur.user_display_name,
          role: this.utilisateur.user_role[0],
          token: this.utilisateur.token,
          imageUser: this.utilisateur.user_avatar
        }
        // Svg localStorage
        appService.setLocal(localValues);
        // Obtenir toutes les informations + les routes autorisées
        this.getUser();

      }.bind(this))
        .catch(error => {
          console.log("ERREUR connexion", error);
          // Utilisateur non connecté
          this.message = param.message.errCnx;
        })
    },
  },
}
</script>

<style scoped>

h1{
  font-family: "Black Marker";
  text-transform: uppercase;
  font-size: 50px;
  font-weight: normal;
}

span{
  color: #8D668F;
}

a{
  text-decoration: none;
  color: #8D668F;
}

form>div:first-child>a:after{
  content: " >";
}

form{
  margin: 10vh 10vw 10vh 10vw;
  font-family: Raleway;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 80vw;
  height: 80vh;
  border: #FDFDFD solid 1px;
  box-shadow: 5px 10px 10px #D9D3D9, -5px -5px 10px #D9D3D9;
  overflow-x: hidden;
}

form>div:first-child{
  margin: auto;
  width: 40vw;
  display: flex;
  flex-direction: column;
}

form>div:last-child{
  text-align: center;
  margin-top: 20vh;
  width: 30vw;
  align-items: center;
  flex-direction: column;
}

form img{
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: auto auto 10vh auto;
  width: 10vw;
  height: 20vh;
}

form>div:last-child>input{
  display: flex;
  flex-wrap: wrap;
  width: 20vw;
  margin: auto auto 3vh auto;
  color: #8D668F;
  border-style: none;
  border-bottom-style: groove;
}

form>div:last-child a{
  width: 15vw;
  height: 5vh;
}

form>div:last-child button{
  width: 15vw;
  height: 5vh;
}

@media screen and (min-width: 1300px) {
  form>div:first-child{
    width: 30vw;
  }
}

@media screen and (max-width: 500px) {

  h1{
    font-size: 2em;
    text-align: center;
  }
  h2{
    font-size: 1.5em;
  }
  h3{
    font-size: 1.200em;
  }

  form{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80vw;
  }

  form>div:first-child{
    width: 80vw;
    margin: 3vh auto 0 auto;
    align-items: center;
  }

  form>div:first-child>p{
    text-align: center;
  }

  form>div:last-child{
    width: 80vw;
    margin-top: 0;
    align-items: center;
  }

  form img{
    width: 30vw;
    height: 30vw;
    margin: 0 auto 4vh auto;
  }

  form>div:last-child>input{
    margin: 0 auto 3vh auto;
    width: 30vw;
  }

  form>div:last-child button{
    width: 50vw;
  }
}

</style>
