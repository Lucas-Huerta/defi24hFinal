<template>

  <div class="main">
    <header>
      <div class="nav-toggle" onclick="document.documentElement.classList.toggle('menu-open')">
        <div class="nav-toggle-bar">
        </div>
      </div>
      <router-link to="/Accueil">
        <span class="logo">Le défi 24 heures</span>
      </router-link>
      <nav class="nav-principale">
        <ul>
          <li><router-link to="/MiniJeux"><a href="#">Mini-jeux</a></router-link></li>
          <li><router-link to="/Classement"><a href="#">Classement</a></router-link></li>
          <li><router-link to="/Galerie"><a href="#">Galerie</a></router-link></li>
        </ul>
        <div v-if="utilisateur.token != null">
          <div class="connectUtilisateur">
            <ul>
              <li>
                {{ titre }}
              </li>
              <li>
                <router-link to="/Compte">
                  Mon compte
                </router-link>
              </li>
              <li>
                <button
                  type="submit"
                  @click="deconnect">
                  Déconnexion
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div v-if="utilisateur.token == null">
          <div class="buttons">
            <router-link to="/Connexion">
              <button class="boutonViolet">Se connecter</button>
            </router-link>
            <router-link to="/Inscription">
              <button class="boutonBlanc">
                S'inscrire
              </button>
            </router-link>
          </div>
        </div>
      </nav>
    </header>

    <h1>Des <span> mini-jeux</span> pour tout le week-end ! </h1>

    <div class="listeMiniJeux">
      <div class="etiquettesMiniJeux" v-for="mini_jeux in liste" :key="mini_jeux.id">
        <div class="etiquette">
          <h4 class="titreEtiquetteMiniJeux">
            {{ mini_jeux.acf.nom }}
          </h4>
          <p class="texteEtiquetteMiniJeux">
            {{ mini_jeux.acf.description }}
          </p>
          <hr>
          <p class="pointsMiniJeux">
            <span> {{ mini_jeux.acf.points_apporter }} </span> points
          </p>
        </div>
      </div>
    </div>
    <footer>
      <div>
        <span class="logofooter">Le défi 24 heures</span>
        <a href="mailto:ledefi24heures@gmail.com">ledefi24heures@gmail.com</a>
      </div>

      <ul class="nav-secondaire">
        <router-link to="/MentionsLegales">
          <li>Mentions légales</li>
        </router-link>
        <router-link to="/MentionsLegales">
          <li>Conditions générales d'utilisation</li>
        </router-link>
        <router-link to="/QuiSommesNous">
          <li>Qui sommes-nous ?</li>
        </router-link>
      </ul>

      <div class="reseaux-sociaux-footer">
        <a href="https://www.instagram.com/ledefi24heures/">
          <img src="../assets/footer/instagram.png" alt="" class="logo-instagram">
        </a>
        <a href="https://www.facebook.com/ledefi24heures">
          <img src="../assets/footer/facebook.png" alt="" class="logo-facebook">
        </a>
      </div>

      <p class="mentions-légales">Exercice réalisé dans le cadre d'un exercice pédagogique au <span> département MMI de Montbéliard</span>
      </p>
    </footer>
  </div>

</template>

<script>
import param from '../param/param'
import appService from "../services/appService";

export default {
  name: "MiniJeux",
  data() {
    return {
      liste: [],
      utilisateur: { // Structure d'un utilisateur
        pseudo: null,
        mot_de_passe: null,
        token: null,
        role: null
      },
    }
  },
  created() {
    // Liste des mini jeux
    axios.get(param.host + "mini_jeux")
      .then(response => {
        // Récupération de la liste des Mini jeux
        this.liste = response.data;
        console.log("Mini jeux", this.liste);
      }).catch(error => console.log(error));

    // Titre par défaut
    this.titre = param.titre;

    // Recherche si utilisateur localStorage
    let utilisateurLocal = appService.getLocal();
    if (utilisateurLocal != null) {
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

  methods: {
    // FONCTION QUI GET UTILISATEUR LOCAL SI IL EN A UN
    getUser() {
      // S'il y a un utilisateur local
      console.log("utilisateur local", this.utilisateur);
      // Mise à jour headers d'authorisation
      let headers = {'Authorization': 'Bearer ' + this.utilisateur.token}
      // Récupération des infos de l'utilisateur connecté
      axios({
        method: 'get',
        url: param.hostUtilisateur + 'me',
        headers: headers
      }).then(function (response) {
        console.log("Données utilisateur", response.data);
        // On utilise this.menu à la place de routes (projet09)
        this.menu = response.data.data.acces;
        console.log("Menu", this.menu);
      }.bind(this))
        .catch(error => {
          console.log("ERREUR accès utilisateur me", error);
        })
    },

    deconnect:function(){
      // Reinitialisation des informations
      this.titre = param.titre;
      this.utilisateur = {
        pseudo :  null,
        user_role : null,
        token :     null,
      };
      // Supprimer le localStorage
      appService.removeLocal();
      // Redirection page accueil
      this.$router.push('/Accueil').catch(err =>{});
    }
  }
}
</script>

<style scoped>

.main{
  overflow-x: hidden;
}

h1{
  text-align: center;
  width: 60vw;
  margin: 5vh 20vw 10vh 20vw;
}

h2{
  font-size: 2em;
  letter-spacing: 2px;
}

h4{
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
}

span{
  color: #8D668F;
}

/*NAV*/

header{
  width: 100vw;
  display: flex;
  flex-direction: row;
  background: linear-gradient(100deg, #8D668F, #A888AA);
}

header>a{
  width: 20vw;
  margin-top: 3vh;
  justify-content: left;
}

.nav-principale{
  display: flex;
  justify-content: right;
  width: 80vw;
}

.logo{
  font-family: "Black Marker";
  text-transform: uppercase;
  font-size: 1.5em;
  font-weight: normal;
  color: #FDFDFD;
  margin: 4vh 0 0 5vw;
  width: 30vw;

}

.nav-principale>ul{
  display: flex;
  flex-direction: row;
}

.nav-principale li{
  margin: 0 2vw 0 1vw;
}

.nav-principale a{
  color: #FDFDFD;
}

.buttons{
  display: flex;
  margin: 0 4vw 2vh 2vw;
}

.buttons button{
  margin: 4vh 1vw 0 1vw;
  width: 12vw;
  height: 5vh;
}

/*SECTION*/

.listeMiniJeux{
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  justify-content: center;
}

.etiquettesMiniJeux{
  margin: 0 2vw 0 2vw;
}

.etiquette{
  border: solid 1px #FDFDFD;
  border-radius: 10px;
  width: 20vw;
  height: auto;
  box-shadow: 5px 10px 10px #D9D3D9, -5px -5px 10px #D9D3D9;
  padding: 0 2vw 2vh 2vw;
  margin-bottom: 5vh;
}

.etiquette>hr{
  width: 5vw;
}

.etiquette>*{
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.titreEtiquetteMiniJeux{
  font-size: 14px;
  font-weight: bold;
  text-align: center;
}

.texteEtiquetteMiniJeux{
  font-size: 12px;
}

.pointsMiniJeux{
  margin-top: 0;
  color: #8D668F;
  font-size: 25px;
}

.pointsMiniJeux span{
  font-weight: bold;
}


/*FOOTER*/

footer{
  margin-top: 10vh;
  padding-top: 5vh;
  padding-bottom: 5vh;
  background-color: #1F1F1F;
  width: 100vw;
}

.logofooter{
  color: #FDFDFD;
  font-family: "Black Marker";
  font-weight: normal;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 2em;
}

footer a{
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-decoration: none;
  color: #8D668F;
}

footer ul{
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: #FDFDFD;
}

footer>ul a{
  color: #FDFDFD;
}

footer li{
  margin: 0 2vw 0 2vw;
}

.reseaux-sociaux-footer{
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.reseaux-sociaux-footer img{
  width: 4vw;
  height: auto;
  margin: 5vh 2vw 5vh 2vw;
}

footer p{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #FDFDFD;
  margin-bottom: 0;
}

footer p>span{
  display: flex;
  font-weight: bold;
  flex-direction: row;
}


/*RESPONSIVE*/

@media screen and (min-width: 1300px) {

  /*NAV*/
  .buttons button{
    margin: 3vh 1vw 0 1vw;
  }
}

@media screen and (max-width: 1100px) {

  /*NAV*/

  header{
    width: 100vw;
    display: flex;
    flex-direction: row;
    background: linear-gradient(100deg, #8D668F, #A888AA);
  }

  header>a{
    width: 40vw;
    text-align: center;
    margin-top: 2vh;
    justify-content: left;
  }

  ul a{
    font-size: 1.2em;
  }

  /*MENU HAMBURGER*/
  .nav-toggle{
    width: 17px;
    height: 17px;
    position: absolute;
    right: 1.5rem;
    top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
  }

  .nav-toggle-bar .nav-toggle-bar::before, .nav-toggle-bar::after{
    content: " ";
    background-color: white;
    border-radius: 20px;
    width: 100%;
    height: 3px;
    position: absolute;
    left: 0;
    transition: all .4s ease-in-out;
  }

  .nav-toggle-bar::before {
    top: -6px;
  }

  .nav-toggle-bar::after {
    top: 6px;
  }

  .menu-open .nav-toggle-bar {
    transform: rotate(135deg);
    background-color: white;
    height: 2px;
    width: 10vw;
  }

  .menu-open .nav-toggle-bar::before, .menu-open .nav-toggle-bar::after {
    transform: rotate(90deg);
    background-color: white;
    height: 2px;
    top: 0
  }

  /*Menu*/
  .nav-principale {
    background-color: #8D668F;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    text-align: center;
    align-items: center;
    justify-content: center;
    transform: translateX(100vw);
    transition: all .4s;
    z-index: 1;
  }

  /*Bug IOS --> L'overflow doit Ãªtre appliquÃ© sur l'Ã©lÃ©ment
  body ET html pour faire disparaÃ®tre le scroll sur Safari IOS*/
  .menu-open, .menu-open body {
    overflow: hidden;
  }

  .nav-principale ul{
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    margin: 0 auto 0 auto;
    padding: 0;
  }

  .nav-principale li{
    margin: 0;
  }

  .nav-principale div{
    display: flex;
    flex-direction: column;
    margin: 0 auto 0 auto;
    max-height: 50vh;
    width: 50vw;
  }

  .buttons button{
    margin: 2vh 0 0 0 ;
    width: 30vw;
    height: 5vh;
  }

  .menu-open .nav-principale {
    transform: translateX(0);
  }

  .connectUtilisateur{
    margin: 5vh auto 0 auto;
    background: none;
  }

  .connectUtilisateur button{
    width: 30vw;
    height: 5vh;
  }

  /*PAGE*/

  .listeMiniJeux{
    margin: auto;
    flex-wrap: wrap;
  }

  .etiquette{
    width: 30vw;
    margin: 0 auto 5vh auto;
  }
}

@media screen and (max-width: 500px) {
  h1 {
    font-size: 2em;
    width: 80vw;
    margin: 5vh auto 5vh auto;
  }
  h2 {
    font-size: 1.5em;
  }
  h3 {
    font-size: 1.200em;
  }

  /*NAV*/

  header>a{
    width: 70vw;
  }

  ul a{
    font-size: 1em;
  }

  .buttons button{
    width: 50vw;
    height: 5vh;
  }

  /*PAGE*/

  .etiquettesMiniJeux{
    display: flex;
    flex-direction: column;
    width: 100vw;
  }

  .etiquette{
    width: 70vw;
    margin: 0 auto 5vh auto;
    border-radius: 50px;
  }

  /*FOOTER*/
  footer{
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
  }
  footer>div{
    width: 100vw;
    margin-top: 2vh;
    text-align: center;
  }
  .nav-secondaire{
    display: flex;
    flex-direction: column;
    width: 40vw;
  }
  .nav-secondaire li{
    margin-bottom: 2vh;
  }

  footer>ul a{
    display: flex;
    width: 80vw;
    justify-content: flex-start;
  }
  .reseaux-sociaux-footer{
    display: flex;
    flex-direction: row;
    justify-content: right;
    width: 40vw;
  }
  .reseaux-sociaux-footer img{
    width: 10vw;
    height: 10vw;
    margin: 2vh 1vw 0 1vw;
  }
  .mentions-légales{
    display: inline;
    flex-direction: row;
    text-align: left;
    width: 80vw;
    margin: 2vh auto 5vh auto;
  }

}

</style>
