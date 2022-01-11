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

    <h1>
      Mon <span> profil</span> personnel
    </h1>
    <section>
      <div v-if="utilisateur.token == null" class="errUtilisateur">
        <h2>
          Pour voir son compte, il faut
          tout d'abord se <span>connecter</span> !
        </h2>

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

      <div class="profil" v-if="utilisateur.token != null">
        <img src="../../assets/user.png" alt="image Utilisateur">
        <div>
          <h2>
            <span> {{ titre }}</span>
          </h2>
          <p>
            Promotion DUT MMI 2022
          </p>
        </div>
      </div>

      <div class="equipe" v-if="utilisateur.token != null">
        <img src="../../assets/romain-villar.png" alt="traphouse">
        <div>
          <router-link to="/Equipe">
            <h2>
              {{getUtilisateurs}}
            </h2>
          </router-link>
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
        <img src="../../assets/footer/instagram.png" alt="" class="logo-instagram">
        <img src="../../assets/footer/facebook.png" alt="" class="logo-facebook">
      </div>

      <p class="mentions-légales">Exercice réalisé dans le cadre d'un exercice pédagogique au <span> département MMI de Montbéliard</span>
      </p>
    </footer>
  </main>

</template>

<script>
import param from "../../param/param";
import appService from "../../services/appService";

export default {
  name: "Compte",
  data() {
    return {
      liste: [],

      utilisateur: { // Structure d'un utilisateur
        pseudo: null,
        mot_de_passe: null,
        token: null,
        role: null,
        imageUser: null
      },
      Appartient: {
        utilisateur: {
          display_name: null,
        },
        equipe: {
          post_name: null,
        }
      }
    }
  },

  computed: {
    // Boucle qui parcours le tableau équipe.
    // Dans le tableau équipe, il y a un autre tableau qui contient les utilisateurs qui
    // composent l'équipe. La fonction GetUtilisateur
    getUtilisateurs() {

      let Appartenances = this.liste;
      let nomUtilisateur = []; // Tableau de nom d'utilisateurs
      let nomEquipe; // variable de nom d'equipes
      let Equipe = []; // Tableau qui regroupe les equipes

      // let tabForEach = this.liste;
      //
      // tabForEach.forEach(elements => console.log("Elements" + elements));
      //
      // for (let i = 0; i < tabForEach.length; i++) {
      //   let utilisateur = tabForEach[i].acf.utilisateur; // Definition de l'utilisateur à la case i
      //   Equipe = tabForEach[i].acf.equipe; // Definition de l'équipe à la case i
      //
      //   Equipe.forEach(elements => console.log("Equipe" + elements));
      //
      //   for (let j = 0; j < utilisateur.length; j++) {
      //     nomUtilisateur[j] = utilisateur[j].display_name;
      //     console.log("nomUser" + nomUtilisateur);
      //
      //     for (let k = 0; k < Equipe.length; k++){
      //       nomEquipe = Equipe[j].post_name;
      //     }
      //     if (nomUtilisateur[j] === this.titre) { // Si le champ nom utilisateur à la case i est égal a nom de l'utilisateur actuellement connecté
      //       return nomEquipe; // Alors on retourne son équipe
      //       }else {
      //       i++; // Sinon on parcours encore les utilisateurs dans l'équipe pour trouver celui présent
      //     }
      //   }
      // }


      for (let i = 0; i < Appartenances.length; i++) { // parcours des appartenances
        let utilisateur = Appartenances[i].acf.utilisateur; // Definition de l'utilisateur à la case i
        Equipe = Appartenances[i].acf.equipe; // Definition de l'équipe à la case i

        for (let j = 0; j < utilisateur.length; j++) { // Parcours du tableau Utilisateur
          nomUtilisateur[j] = utilisateur[j].display_name; // Récupération du champ display_name

          for (let k = 0; k < Equipe.length; k++) { // Parcours du tableau d'équipe
            nomEquipe = Equipe[j].post_name; // Récupération du champ post_name de l'équipe

            if (nomUtilisateur[j] === this.titre) { // Si le champ nom utilisateur à la case i est égal a nom de l'utilisateur actuellement connecté
              return nomEquipe; // Alors on retourne son équipe
            } else {
              j++; // Sinon on parcours encore les utilisateurs dans l'équipe pour trouver celui présent
            }
          }
        }
      }
    }
  },
    created() {
    // Liste des appartenances
    axios.get(param.host + "appartient")
      .then(response => {
        // Récupération de la liste des Mini jeux
        this.liste = response.data;
        console.log("Appartenances", this.liste);
      })
      .catch(error => console.log("Erreur dans Appartenances"+ error))

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
      let headers = {
        'Authorization': 'Bearer ' + this.utilisateur.token
      }
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

main{
  font-family: Raleway;
  overflow-x: hidden;
  margin: 0;
  width: 100%;
}

h1{
  text-align: center;
}

h2{
  font-size: 30px;
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

/*ERREUR UTILISATEUR*/

.errUtilisateur h2{
  width: 60vw;
  text-align: center;
}

.errUtilisateur .buttons{
  display: flex;
  width: 30vw;
  justify-content: space-around;
  margin: auto;
}

  /*PROFIL*/

section{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.profil{
  display: flex;
  padding-top: 2vh;
  padding-bottom: 2vh;
  width: 40vw;
  border: #FDFDFD solid 1px;
  border-radius: 40px;
  background-color: #FDFDFD;
  box-shadow: 5px 10px 10px #D9D3D9, -5px -5px 10px #D9D3D9;
}

.profil img{
  width: 5vw;
  height: 10vh;
  margin: auto 5vw auto 5vw;
}

.profil>div{
  display: flex;
  flex-wrap: wrap;
  margin: 2vh 0 2vh 0;
}

.profil>div>h2{
  margin-bottom: 0;
}

.profil>div>p{
  font-style: italic;
}

/*EQUIPE*/

.equipe{
  display: flex;
  padding-top: 2vh;
  padding-bottom: 2vh;
  width: 40vw;
  border: #FDFDFD solid 1px;
  border-radius: 40px;
  background-color: #FDFDFD;
  box-shadow: 5px 10px 10px #D9D3D9, -5px -5px 10px #D9D3D9;
}

.equipe img{
  clip-path:ellipse(22% 50%);
  width: 20vw;
  height: 20vh;
  margin: auto;
}

.equipe div{
  margin: auto;
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

@media screen and (min-width: 1300px){

  .buttons button{
    margin: 3vh 1vw 0 1vw;
  }

  .profil{
    display: flex;
    flex-direction: column;
  }

  .equipe{
    justify-content: center;
    align-items: center;
  }

  .equipe img{
    margin: auto 0 auto 0;
  }
}

/*MEDIA QUERIES*/

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
    margin: 5vh auto 0 auto;
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

  /*ERREUR UTILISATEUR*/

  .errUtilisateur h2{
    width: 80vw;
    text-align: center;
    margin: auto;
  }

  .errUtilisateur .buttons{
    display: flex;
    flex-direction: column;
    width: 100vw;
    justify-content: center;
    align-items: center;
  }

  /*SECTION*/

  section{
    flex-direction: column;
  }

  .profil{
    width: 90vw;
    margin: 0 auto 5vh auto;
  }

  .profil img{
    width: 40vw;
    height: 10vh;
  }

  .profil>a>img:last-child{
    width: 30vw;
    height: 5vh;
  }

  .equipe{
    width: 90vw;
    margin: auto;
  }

  .equipe img{
    width: 50vw;
    height: 10vh;
  }

  .equipe>a{
    width: 30vw;
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
