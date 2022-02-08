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
            <!-- Liens internes à renseigner -->
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

    <h1>Quels sont les <span> résultats</span> des courses ? </h1>

    <div class="listeEquipe">
      <div class="etiquetteEquipe" v-for="equipe in liste" :key="equipe.id">
        <div class="equipe">
          <img class="imageEquipe" :src="equipe.acf.photo" alt="image Equipe">
          <h4>
            {{ equipe.acf.nom }}
          </h4>
          <p class="points">
            <span>{{ equipe.acf.points_totaux }}</span> points
          </p>
          <p class="penalitees">
            <span>{{ equipe.acf.total_penalitee }}</span> pénalités
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
import param from "../param/param";
import appService from "../services/appService";

export default {
  name: "Classement",
  data() {
    return {
      liste: [],
      utilisateur: { // Structure d'un utilisateur
        pseudo: null,
        mot_de_passe: null,
        token: null,
        role: null
      },
      titre: null,

      // Menu de l'utilisateur
      // Au moins Accueil si pas connecté
      menu: ['Accueil']
    }
  },
  created() {
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

    // Liste des equipes
    axios.get(param.host + "equipe")
      .then(response => {
        // Récupération de la liste des Mini jeux
        this.liste = response.data;
        console.log("Equipes :", this.liste);
      }).catch(error => console.log(error));
  },

  // Récuperer utilisateur en back, par rapport à son ID ou le retrouver
  // Verifier que le mot de passe entré est le bon
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
        url: param.hostUtilisateur + '/me',
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
    },
  }
}
</script>

<style scoped>

.main{
  overflow-x: hidden;
}

h1{
  text-transform: uppercase;
  font-size:  3.125em;
  font-weight: normal;
  letter-spacing: 5px;
  text-align: center;
  width: 60vw;
  margin: 5vh 20vw 10vh 20vw;
}

h2{
  text-transform: uppercase;
  font-size: 2em;
  font-weight: normal;
  letter-spacing: 2px;
}

h3{
  font-family: "Black Marker";
  text-transform: uppercase;
  font-size: 3.125em;
  font-weight: normal;
  text-align: center;
  letter-spacing: 5px;
}

h4{
  font-size: 1,5em;
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

/*MAIN*/

.listeEquipe{
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  justify-content: center;
}

.equipe{
  border: solid 1px #FDFDFD;
  border-radius: 50px;
  width: 80vw;
  height: auto;
  box-shadow: 5px 10px 10px #D9D3D9, -5px -5px 10px #D9D3D9;
  padding: 0 2vw 0 2vw;
  margin-bottom: 5vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}

.equipe img{
  margin: 2vh 0 2vh 0;
  border-radius: 50%;
  /*clip-path:ellipse(25% 25%);*/
  width: 10vw;
  height: 20vh;
}

.equipe h4{
  font-weight: bold;
  font-size: 2em;
  color: #8D668F;
}

.points{
  color: #8D668F;
}

.points span{
  font-size: 1.5em;
  font-weight: bold;
}

.penalitees{
  color: #8D668F;
}

.penalitees span{
  font-size: 1.5em;
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

@media screen and (max-width: 1100px){

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
}

@media screen and (max-width: 500px){

  h1 {
    font-size: 2em;
    text-align: center;
    width: 90vw;
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

  /*MAIN*/

  .equipe{
    padding-top: 2vh;
  }

  .equipe img{
    width: 20vw;
    height: 10vh;
  }

  .equipe h4{
    font-size: 1em;
  }

  .points{
    text-align: center;
    font-size: 0.8em;
  }

  .points span{
    font-size: 1em;
  }

  .penalitees{
    text-align: center;
    font-size: 0.8em;
  }

  .penalitees span{
    font-size: 1em;
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
