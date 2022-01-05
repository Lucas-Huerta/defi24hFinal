<template>
  <main>
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

    <section class="accueil">
      <!-- Intégrer les données (prénom du participant : Romain) -->
      <h1>
        Bienvenue à toi !
        <div v-if="utilisateur.token !== null">
          {{ titre }}
        </div>
      </h1>
      <p>Le défi 24h débutera le <span> vendredi 21 janvier à 18h</span>. En attendant, assure-toi d’avoir rejoint
        ton équipe et mis ton profil à jour !</p>

      <div>
        <router-link to="/Compte">
          <button class="boutonViolet">Mon compte</button>
        </router-link>
        <router-link to="/Equipe">
          <button class="boutonBlanc">Mon équipe</button>
        </router-link>
      </div>

      <!-- Emplacement pour le timer, Composant du Timer -->

      <Timer id="timer" deadline="2022-01-21">
      </Timer>
    </section>

    <section class="galerie">
      <div class="galerieLeft">
        <h2>La <span>galerie</span> du week-end</h2>
        <p>Pour te donner une idée de la créativité des étudiants durant les éditions précédentes du défi, nous
          avons créé une page “Galerie” regroupant d’anciens travaux. Une production réalisée durant le défi 24h
          peut être excellente et se retrouver sur ton portfolio : penses-y !</p>
        <router-link to="/Galerie">Accéder à la galerie</router-link>
      </div>

      <div class="galerieRight">
        <img src="../assets/projet2rogner.png" alt="ascension">
        <img src="../assets/retourenenfance.jpg" alt="retour en enfance">
      </div>
    </section>

    <section class="rendu">
      <h2>Rendre mon <span>projet</span></h2>
      <p>Et voilà ! 24 heures se sont écoulées et tu n'as même pas l'air crevé, alors dépêche-toi de rendre ton
        projet pour que nous t'attribuons un maximum de points !</p>
      <button onclick="window.location.href='https://drive.google.com/drive/folders/1je_FSL1BBb07i9ozDV8B4WKF_mXpLaIO?usp=sharing';" class="boutonViolet">
        Accéder au rendu
      </button>
    </section>

    <section class="reseaux-sociaux">
      <img src="../assets/photoReseaux.png" alt="photo de réseaux">
      <div class="colonnedroite">
        <h2>Suis-nous sur les <span>réseaux sociaux</span> !</h2>
        <p>Avant, pendant et après le défi, tu pourras retrouver toutes les informations importantes sur nos réseaux
          sociaux. N'hésites pas à nous suivre !</p>

        <div>
          <img src="../assets/Accueil/instagram.png" alt="logo instagram" class="logo-instagram">
          <a href="https://www.instagram.com/ledefi24heures/">@defi24heures</a>

          <img src="../assets/Accueil/facebook.png" alt="logo facebook" class="logo-facebook">
          <a href="https://www.facebook.com/ledefi24heures">@defi24heures</a>
        </div>
      </div>
    </section>

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
      <img src="../assets/footer/instagram.png" alt="" class="logo-instagram">
      <img src="../assets/footer/facebook.png" alt="" class="logo-facebook">
    </div>

    <p class="mentions-légales">Exercice réalisé dans le cadre d'un exercice pédagogique au <span> département MMI de Montbéliard</span>
    </p>
  </footer>
  </main>
</template>

<script>

import Timer from "./Timer";
import param from "../param/param";
import appService from "../services/appService";

export default {
  name: "Accueil",
  components: {
    Timer
  },
  data() {
    return {
      utilisateur: { // Structure d'un utilisateur
        pseudo: null,
        mot_de_passe: null,
        token: null,
        role: null,
        imageUser: null
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

#timer{
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: #FDFDFD;
  font-size: 1em
}

#timer span{
  margin: 0 2vw 0 2vw;
}

main{
  overflow-x: hidden;
}

h1{
  text-transform: uppercase;
  font-size:  3.125em;
  font-weight: normal;
  letter-spacing: 5px;
  text-align: center;
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
  margin: 4vh 0 0 0;
  width: 12vw;
  height: 5vh;
}

/*SECTION 1*/

.accueil{
  height: 100vh;
  background: linear-gradient(100deg, #8D668F, #A888AA);
}

.accueil>h1{
  margin-top: 0;
  padding-top: 10vh;
  color: #FDFDFD;
}

.accueil>p{
  margin: auto;
  /*display: flex;*/
  justify-content: center;
  text-align: center;
  color: #FDFDFD;
  width: 80vw;
}

.accueil span{
  color: #FDFDFD;
  font-weight: bold;
}

.accueil div{
  display: flex;
  flex-direction: row;
  margin-top: 5vh;
  justify-content: center;
}

.accueil button:first-of-type{
  margin: 2vh 0 0 2vw;
  width: 12vw;
  height: 5vh;
}

.accueil button:last-of-type{
  margin: 2vh 0 0 2vw;
  width: 12vw;
  height: 5vh;
}

#timer {
  color: #FDFDFD;
  font-weight: bold;
}

/*SECTION 2*/

.galerie{
  width: 100vw;
  margin: 10vh 10vw 0 10vw  ;
  display: flex;
  flex-direction: row;
}

.galerieLeft{
  width: 40vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: left;
}

.galerieRight{
  width: 45vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: right;
  margin: 5vh 0 0 0;
}

.galerie>p{
  display: flex;
  width: 30vw;
  justify-content: center;
}

.galerie a{
  display: flex;
  margin: 2vh 0 0 0;
  width: 35vw;
}

.galerieLeft>a:after{
  content: " >";
}

.galerie img:nth-child(n){
  width: 15vw;
  height: 40vh;
  margin-right: 2vw;
}

.galerie img:nth-child(2){
  width: 20vw;
  height: 30vh;
}

/*SECTION 3*/

.rendu{
  display: flex;
  flex-direction: column;
  margin: 10vh 10vw 10vh 10vw;
  padding: 5vh 0 5vh 0;
  width: 80vw;
  height: auto;
  border: #FDFDFD solid 1px;
  border-radius: 50px;
  box-shadow: 5px 10px 10px #D9D3D9, -5px -5px 10px #D9D3D9;
}

.rendu h2{
  text-align: center;
}

.rendu p{
  text-align: center;
  width: 40vw;
  margin: auto;
}

.rendu button{
  margin: 5vh auto 0 auto;
  width: 15vw;
  height: 5vh;
}

/*SECTION 4*/

.reseaux-sociaux{
  margin: 5vh 10vw 0 10vw;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
}

.reseaux-sociaux>img{
  width: 30vw;
  height: 20vw;
  flex-direction: column;
}

.colonnedroite{
  width: 30vw;
  display: flex;
  flex-direction: column;
  justify-content: right;
  margin-left: 10vw;
}

.colonnedroite h2{
  margin: 0 0 0 5vw;
  height: 7vh;
  width: 30vw;
}

.colonnedroite p{
  margin: 10vh 0 0 5vw;
  text-align: left;
  width: 30vw;
}

.colonnedroite div{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 3vh 0 0 5vw;
}

.colonnedroite div a:after{
  content: ">";
}

.colonnedroite img{
  padding: 1vh 0 0 3vw;
  width: 3vw;
  height: 6vh;
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
  width: 5vw;
  height: 10vh;
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

@media screen and (min-width: 1400px) {

  /*NAV*/

  .buttons button{
    margin: 2vh 0 0 0;
  }

  /*SECTION GALERIE*/

  .galerie img:nth-child(2){
      width: 25vw;
      height: 25vh;
  }

  .galerie img:nth-child(n){
    height: 45vh;
  }

  /*RESEAU*/

  .colonnedroite p{
    margin: 5vh 0 0 5vw;
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
    margin: 5 auto 0 auto;
    max-height: 50vh;
    width: 50vw;
  }

  .buttons button{
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

  .accueil button:last-of-type{
    width: 20vw;
  }

  /*SECTION 2*/

  .galerieRight{
    display: flex;
    flex-direction: column;
    width: 50vw;
    align-items: center;
  }

  .galerie img:nth-child(2){
    width: 30vw;
    height: 25vh;
  }

  /*RENDU*/

  .rendu{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .rendu p{
    width: 60vw;
  }

  .rendu button{
    width: 30vw;
  }

  /*RESEAUX*/

  .colonnedroite{
    margin-left: 5vw;
  }

  .colonnedroite h2{
    margin-left: 0;
    width: 45vw;
  }

  .colonnedroite p{
    margin-left: 0;
    width: 40vw;
  }

  .colonnedroite div{
    margin: 5vh 0 0 0;
  }
}

@media screen and (max-width: 500px) {
  h1 {
    font-size: 2em;
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

  /*SECTION 1*/
  .accueil{
    width: 100vw;
  }

  .accueil p{
    width: 80vw;
    text-align: center;
    flex-direction: row;
  }

  .accueil div{
    display: flex;
    width: 100vw;
    flex-direction: row;
    justify-content: space-around;
  }
  .accueil button:first-of-type{
    width: 40vw;
  }
  .accueil button:last-of-type{
    width: 40vw;
  }

  /*SECTION 2*/
  .galerie{
    display: flex;
    flex-direction: column;
    width: 100vw;
  }
  .galerieLeft{
    width: 80vw;
    text-align: center;
  }
  .galerieLeft p{
    text-align: left;
  }
  .galerieLeft a{
    display: flex;
    flex-direction: row;
    margin-top: 0;
    width: 50vw;
  }
  .galerieRight{
    width: 80vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .galerie img:nth-child(n){
    width: 60vw;
    height: 40vh;
  }
  .galerie img:nth-child(2){
    margin-top: 2vh;
    width: 60vw;
    height: 15vh;
  }

  /*SECTION 3*/
  .rendu p{
    text-align: left;
    width: 60vw;
  }
  .rendu button{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50vw;
    margin: 5vh auto 5vh auto;
  }

  /*SECTION 4*/
  .reseaux-sociaux{
    display: flex;
    flex-direction: column;
    width: 100vw;
  }
  .reseaux-sociaux img{
    width: 80vw;
    height: 60vw;
  }
  .reseaux-sociaux h2{
    text-align: center;
    width: 80vw;
    margin: 10vh auto 0 auto;
  }
  .reseaux-sociaux p{
    text-align: left;
    width: 80vw;
    margin: 5vh auto 0 auto;
  }
  .colonnedroite{
    margin: 0;
  }
  .colonnedroite div{
    width: 80vw;
    display: flex;
    flex-direction: row;
    margin: auto;
  }
  .reseaux-sociaux .logo-facebook{
    width: 10vw;
    height: 5vh;
  }
  .reseaux-sociaux .logo-instagram{
    width: 10vw;
    height: 5vh;
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
