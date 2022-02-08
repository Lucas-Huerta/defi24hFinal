<template>
  <main>
    <header>
      <div class="nav-toggle" onclick="document.documentElement.classList.toggle('menu-open')">
        <div class="nav-toggle-bar">
        </div>
      </div>
      <span class="logo">Le défi 24 heures</span>
      <nav class="nav-principale">
        <ul>
          <li><a href="#">Accueil</a></li>
          <li><a href="#Evenements">Évènements</a></li>
          <li><a href="#Activites">Activités</a></li>
          <li><a href="#Temoignages">Témoignages</a></li>
        </ul>
        <div class="buttons">
          <router-link to="/Inscription">
            <button>Inscris-toi !</button>
          </router-link>
        </div>
      </nav>
    </header>

    <div class="section-1">
      <div>
        <h1>
          Bienvenue au défi <span>24 heures !</span>
        </h1>
        <p>
          21 Janvier 2021
        </p>
        <p>
          Tu veux passer un bon moment à l’université et produire une création dans un temps imparti ? Le défi 24 heures
          est fait pour toi ! Seul ou en équipe, réalise une production autour
          d’un thème lors d’un évènement animé par des mini-jeux !
        </p>
        <router-link to="Accueil">
          <button type="submit" class="boutonBlanc">Consulte le site</button>
        </router-link>
        <router-link to="Inscription">
          <button type="submit" class="boutonViolet">Inscris toi !</button>
        </router-link>
      </div>

      <img src="../assets/LandingPage/imgSection1.png" alt="Image Fille Defi24 heures">
    </div>

    <div class="section-2" id="Evenements">
      <h2>
        évènements
      </h2>
      <h3>
        un moment <span> inoubliable</span> au département
      </h3>
      <p>
        Pour que chacun passe un excellent moment, nous avons construit
        ce défi 24h autour de trois idées centrales :
      </p>
      <div class="section-etiquettes">
        <div class="etiquette">
          <img src="../assets/LandingPage/clock.png" alt="icone timer">
          <h4>
            Créer en 24 heures
          </h4>
          <p>
            Un thème imposé et un ordinateur : voici ce
            dont tu as besoin pour participer au défi.
            Tu as 24h pour créer une production, que ce
            soit un film, un site web, un morceau de musique...
          </p>
        </div>
        <div class="etiquette">
          <img src="../assets/LandingPage/handshake.png" alt="icone poignée de main">
          <h4>
            Tisser des liens
          </h4>
          <p>
            Seul, on va plus vite, mais ensemble, on va plus loin ! Cet évènement est l’occasion parfaite pour te
            rapprocher de tes camarades ou rencontrer de nouvelles personnes, surtout si tu joues en équipe !
          </p>
        </div>
        <div class="etiquette">
          <img src="../assets/LandingPage/dance.png" alt="icone fête">
          <h4>
            Passer un bon moment
          </h4>
          <p>
            Le défi 24h est un moment convivial au sein de l’université. L’objectif n’est pas seulement de créer, mais
            également de profiter. Au programme : pause pizzas, mini-jeux, et d’autres surprises, ...
          </p>
        </div>
      </div>
    </div>

    <div class="section-3" id="Activites">
     <img src="../assets/LandingPage/imgSection3.png" alt="">
      <div>
        <h2>
          Activités
        </h2>
        <h3>
          une journée pleine de <span> surprises</span>
        </h3>
        <p>
          Bien que la création soit l'élément phare du défi 24h, tu pourras profiter
          de bien d'autres choses en participant : un repas & un petit-dejeuner collectif, des mini-jeux
          tout au long de la journée, un stand photo, et bien d'autres choses.
          Pour en profiter, inscris-toi vite !
        </p>
      </div>
    </div>

    <div class="section-4" id="Temoignages">
      <h2>
        Témoignages
      </h2>
      <h3>
        C'est la <span>12ème édition</span> du défi
      </h3>
      <p>
        Considéré aujourd’hui comme un événement phare
        en MMI, le défi 24h a su réunir ses élèves
        depuis plus de 10 ans. Voici ce qu’en pensent
        les anciens participants :
      </p>

      <div class="section-temoignages">
        <div class="temoignages" id="Steven">
          <img src="../assets/LandingPage/Temoignages/steven-goffinet.png" alt="steven">
          <div>
            <p>Steven Goffinet </p>
            <p>Promo DUT MMI 2021 </p>
          </div>
          <p>
            Le défi 24h est une superbe expérience qui mélange
            l’ambiance d’une soirée entre amis et le travail.
            Il est intéressant de voir chaque
            groupe, certains s'envoient
            toute leur cafetière, d'autres dorment ou jouent aux jeux vidéos.
          </p>
        </div>
        <div class="temoignages">
          <img src="../assets/LandingPage/Temoignages/clara-bouvier.png" alt="charlotte">
          <div>
            <p>Clara Bouvier </p>
            <p>Promo DUT MMI 2021 </p>
          </div>
          <p>
            J’ai adoré l’ambiance, surtout quand Monsieur Malsot nous a
            tiré dessus avec un Nerf ! Tout le monde rigolait même
            si nous devions travailler, ce n’était pas un effort
          </p>
        </div>

        <div class="temoignages">
          <img src="../assets/LandingPage/Temoignages/clothilde-jayet.png" alt="clothilde">
          <div>
            <p>Clothilde Jayet </p>
            <p>Promo DUT MMI 2021 </p>
          </div>
          <p>
            Le défi 24 heures reste un de mes meilleurs souvenirs en MMI : une atmosphère super positive, de créativité et de fête.
            Un événement à ne pas manquer !
          </p>
        </div>
        <div class="temoignages" id="Laura">
          <img src="../assets/LandingPage/Temoignages/laura-demougeot.png" alt="laura">
          <div>
            <p>Laura Demougeot</p>
            <p>Promo DUT MMI 2021 </p>
          </div>
          <p>
            Même si notre projet n’était pas le meilleur, qu’est ce que je
            me suis amusé à la réaliser. On a quand même gagné le titre d’équipe la plus cool ! Une très bonne expérience en MMI qu'il ne faut surtout pas rater.
          </p>
        </div>
        <div class="temoignages">
          <img src="../assets/LandingPage/Temoignages/charlotte-jeannot.png" alt="charlotte">
          <div>
            <p>Charlotte Jeannot</p>
            <p>Promo DUT MMI 2021 </p>
          </div>
          <p>
            Dans la soirée, il fallait que je fasse une vidéo sur un canapé en chantant Hannah Montana devant tous les professeurs présents. J’ai passé une superbe soirée mais quelle déception de ne pas pouvoir revivre cette expérience en 2021.
          </p>
        </div>
        <div class="temoignages" id="Tanguy">
          <img src="../assets/LandingPage/Temoignages/tanguy-claude.png" alt="tanguy">
          <div>
            <p>Tanguy Claude</p>
            <p>Promo DUT MMI 2021 </p>
          </div>
          <p>
            L'ambiance était incroyable, on a pu faire plus ample connaissance avec ceux de notre promo et les défis étaient cool. J'ai adoré l'événement, vraiment super expérience ! Et on a remporté le prix de la meilleure équipe !          </p>
        </div>
      </div>
    </div>

    <div class="lienTemoignages">
        <a class="ancreTemoignage" href="#Steven"></a>
        <a class="ancreTemoignage" href="#Laura"></a>
        <a class="ancreTemoignage" href="#Tanguy"></a>
    </div>

    <div class="section-5">
      <router-link to="/Accueil">
        <button type="submit" class="boutonViolet">Consulte le site</button>
      </router-link>
      <router-link to="/Inscription">
        <button type="submit" class="boutonBlanc">Inscris-toi</button>
      </router-link>
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

      <p class="mentions-légales">Exercice réalisé dans le cadre d'un exercice pédagogique au<span> département MMI de Montbéliard</span>
      </p>
    </footer>
  </main>

</template>

<script>
import param from "../param/param";

export default {
  name: "LandingPage",
  data () {
    return { }
  },
}
</script>

<style scoped>

main{
  overflow-x: hidden;
}

h2{
  font-family: Raleway;
  text-transform: uppercase;
  font-size: 1.375em;
  font-weight: bold;
  color: #8D668F;
  text-align: center;
  letter-spacing: 2px;
}

h2:before{
  content: "━";
}

h2:after{
  content: "━";
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
  font-size: 1em;
  font-weight: bold;
  text-align: center;
}

span{
  color: #8D668F;
}


/*NAVIGUATION*/

header{
  width: 100vw;
  display: flex;
  flex-direction: row;
  background: linear-gradient(100deg, #8D668F, #A888AA);
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
  width: 50vw;
}

.nav-principale>ul{
  display: flex;
  flex-direction: row;
}

.nav-principale>ul>li{
  margin: 0 2vw 0 2vw;
}

.nav-principale>ul>li>a{
  color: #FDFDFD;
}

.buttons{
  display: flex;
  margin: 0 4vw 0 2vw;
}

.buttons button{
  margin: 4vh 0 0 0;
  border: #FDFDFD solid 1px;
  border-radius: 50px;
  background-color: #A888AA;
  color: #FDFDFD;
  width: 12vw;
  height: 5vh;
  text-transform: uppercase;
}

/*SECTION 1*/

.section-1{
  height: 100vh;
  background: linear-gradient(140deg, #8D668F, #A888AA);
  color: #FDFDFD;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}

.section-1 h1{
  width: 40vw;
  padding: 0 5vw 0 5vw ;
  display: flex;
  flex-wrap: wrap;
}

.section-1 span{
  font-size: 80px;
  color: #FDFDFD;
}

.section-1 p:first-of-type{
  width: 40vw;
  text-align: center;
  margin: 0 5vw 0 5vw;
  font-size: 20px;
  text-transform: uppercase;
}

.section-1 p:first-of-type:before{
  content: "━";
}

.section-1 p:first-of-type:after{
  content: "━";
}


.section-1 p:last-of-type{
  width: 40vw;
  margin: 5vh 0 10vh 5vw;
  text-align: left;
  font-size: 15px;
}

.section-1 button{
  margin: 0 0 0 5vw;
}


.section-1 .boutonBlanc{
  width: 15vw;
  height: 5vh;
}

.section-1 .boutonViolet{
  width: 15vw;
  height: 5vh;
}

.section-1 img{
  height: 100vh;
  width: auto;
}

/*SECTION 2 */

.section-2{
  margin-top: 10vh;
}

.section-2>p{
  display: flex;
  margin: auto;
  text-align: center;
  font-size: 1em;
  width: 40vw;
}

.section-etiquettes{
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.etiquette{
  border: solid 1px #FDFDFD;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  width: 20vw;
  height: auto;
  box-shadow: 5px 10px 10px #D9D3D9, -5px -5px 10px #D9D3D9;
  padding: 0 2vw 2vh 2vw;
  margin: 5vh 5vw 0 5vw;
}

.etiquette img{
  width: 3vw;
  height: 8vh;
  margin: 2vh 2vw 0 0;
}

.etiquette>h4{
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.etiquette>p{
  font-size: 0.875em;
}

/*SECTION 3*/

.section-3{
  display: flex;
  margin: 10vh 0 0 0;
  background-color: #F8F8F8;
  height: auto;
}

.section-3>img{
  margin-left: 0;
  width: 50vw;
  height: auto;
  justify-content: left;
}

.section-3>div{
  width: auto;
  margin: 10vh 10vw 0 0;
}

.section-3>div>h3{
  text-align: left;
  margin-bottom: 0;
}

.section-3 p{
  text-align: left;
  width: 40vw;
}

/*SECTION 4*/

div::-webkit-scrollbar{
  display: none;
}

.section-4>h3{
  margin-bottom: 3vh;
}

.section-4{
  margin-top: 10vh;
}

.section-4>p{
  width: 50vw;
  text-align: center;
  display: flex;
  flex-direction: row;
  margin: auto auto 10vh auto;
}

.section-temoignages{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  padding: 2vh 10vw 2vh 10vw;
  scroll-snap-type: x mandatory;
  overflow-x: scroll;
}

.temoignages{
  display: flex;
  flex-wrap: wrap;
  width: 40vw;
  height: auto;
  padding: 0 2vw 2vh 2vw;
  border: solid 1px #FDFDFD;
  border-radius: 10px;
  box-shadow: 5px 10px 10px #D9D3D9, -5px -5px 10px #D9D3D9;

  margin: 0 5vw 0 5vw;
  flex: 1 0 auto;
  /* Aligne le défilement au centre */
  scroll-snap-align: start;
}

.temoignages div{
  width: 20vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: left;
}

.temoignages img{
  display: flex;
  justify-content: left;
  flex-direction: column;
  /*clip-path:ellipse(25% 25%);*/
  width: 5vw;
  height: 10vh;
  /*width: 10vw;*/
  /*height: 25vh;*/
  margin: 7vh 2vw 0 0;
}

.temoignages>div p:first-of-type{
  margin: 10vh 0 0 0;
  font-weight: bold;
}

.temoignages>div p:last-of-type{
  width: 35vw;
  margin: 0 0 0 0;
}

.temoignages p{
  margin-top: 0;
}

.lienTemoignages{
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.ancreTemoignage{
  margin: 5vh 2vw 0 2vw;
  width: 1vw;
  height: 1vw;
  background-color: #FFFFFF;
  border: #8d668f solid 3px;
  border-radius: 50px;
}

/*SECTION 5*/

.section-5{
  display: flex;
  flex-direction: row;
  width: 40vw;
  justify-content: space-around;
  margin: 10vh auto 10vh auto;
}

.section-5 .boutonBlanc{
  width: 15vw;
  height: 5vh;
}

.section-5 .boutonViolet{
  width: 15vw;
  height: 5vh;
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

/*MEDIA QUERIES*/

/*GRAND ECRAN*/

@media screen and (min-width: 1300px) {

  .buttons button{
    margin: 3vh 0 0 0;
  }

  .section-1 div{
    padding-top: 10vh;
  }

  .section-1 img{
    height: 100vh;
  }

  .section-1 p{
    width: 30vw;
  }

  .section-3 img{
    width: 50vw;
  }

  .section-3 div{
    margin: 10vh 10vw 0 5vw ;
  }

  .section-3 p{
    width: 30vw;
  }
}

@media screen and (max-width: 1250px){
  .buttons button{
    margin: 2vh 0 0 0;
  }

  .section-1 img{
    width: auto;
    height: 90vh;
    position: sticky;
    top: 30vh;
    right: 1vw;
  }
}

/*TABLETTE*/

@media screen and (max-width: 1100px) {

  /*NAV*/

  header>a{
    width: 40vw;
    text-align: center;
  }

  /*PAGE*/

  .section-1 h1{
    width: 70vw;
  }

  .section-1>div>p:first-of-type{
    text-align: left;
  }

  .section-1 p:last-of-type{
    width: 30vw;
  }

  .section-1 img{
    width: auto;
    height: 80vh;
    position: sticky;
    top: 40vh;
    right: 1vw;
  }

  .section-1 button:first-of-type{
    width: 20vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 10vw 5vh 10vw;
    justify-content: center;
  }

  .section-1 button:last-of-type{
    width: 20vw;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .section-3>div>h3{
    width: 40vw;
  }

  .section-3 p{
    width: 30vw;
  }

  .section-5 button:last-of-type{
    width: 30vw;
  }
}

@media screen and (max-width: 850px) {

  /*NAV*/

  header{
    width: 100vw;
    display: flex;
    flex-direction: row;
    background: linear-gradient(100deg, #8D668F, #A888AA);
  }

  .logo{
    margin: 4vh 0 4vh 5vw;
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

  .connectUtilisateur button{
    width: 30vw;
    height: 5vh;
  }

  /*SECTION 1*/

  .section-1 img{
    width: 70vh;
    height: auto;
    bottom: 0;
    position: sticky;
    top: 60vh;
  }

  .section-1 p:last-of-type{
    margin-bottom: 2vh;
  }

  /*SECTION 2*/

  .section-etiquettes{
    flex-direction: column;
    align-items: center;
  }

  .etiquette{
    width: 50vw;
  }

  .etiquette img{
    width: 5vw;
  }

  /*SECTION 3*/

  .section-3{
    width: 100vw;
  }

  .section-3>img{
    width: 20vw;
    height: 30vh;
    position: sticky;
    bottom: 0;
  }

  .section-3>div{
    width: 60vw;
    justify-content: flex-end;
    margin-right: 0;
  }

  .section-3>div>h3{
    text-align: center;
    width: 60vw;
  }

  .section-3 p{
    width: 60vw;
  }
}

/*TELEPHONE*/

@media screen and (max-width: 500px) {
  h1{
    font-size: 1.375em;
  }
  h2{
    font-size: 1em;
  }
  h3{
    font-size: 1.200em;
  }

  /*NAV*/

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
  .section-1{
    padding-top: 3vh;
    width: 100vw;
    height: 90vh;
  }

  .section-1 h1{
    text-align: center;
    width: 100vw;
    padding: 0;
    justify-content: center;
  }

  .section-1 span{
    font-size: 1.500em;
  }

  .section-1 img{
    width: 80vw;
    height: auto;
    position: sticky;
    right: -15vw;
    top: 40vh;
    margin-bottom: 0;
  }


  .section-1 p:first-of-type{
    display: flex;
    flex-direction: row;
    width: 100vw;
    margin: 0;
    justify-content: center;
  }

  .section-1 p:last-of-type{
    width: 70vw;
    margin-bottom: 20vh;
  }

  .section-1 button:last-of-type{
    margin-top: 5vh;
    width: 40vw;
  }

  /*SECTION 2*/
  .section-etiquettes{
    display: flex;
    flex-direction: column;
  }

  .section-2 p{
    width: 80vw;
  }

  .etiquette{
    width: 80vw;
    height: auto;
    margin: 5vh auto 0 auto;
  }

  .etiquette img{
    width: 20vw;
    height: auto;
  }

  /*SECTION 3*/

  .section-3{
    display: flex;
    flex-direction: column-reverse;
    width: 100vw;
  }

  .section-3 h2{
    text-align: center;
    width: 80vw;
  }

  .section-3>div{
    margin: auto;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .section-3>div>h3{
    width: 80vw;
    text-align: center;
  }

  .section-3 p{
    width: 80vw;
  }

  .section-3 img{
    width: 100vw;
    height: auto;
  }

  /*SECTION 4 */
  .section-4{
    display: flex;
    flex-direction: column;
  }

  .section-4>h3{
    width: 80vw;
    margin: 0 20vw 2vh 10vw;
    text-align: center;
  }

  .section-4>p{
    width: 80vw;
    margin-left: 10vw;
    text-align: left;
  }

  .section-temoignages{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }

  .temoignages{
    width: 80vw;
    margin: 0 10vw 0 10vw;
    scroll-snap-align: center;
    align-items: center;
  }

  .temoignages img{
    margin-top: 5vh;
    width: 20vw;
    height: 20vw;
  }

  .temoignages div{
    margin-left: 5vw;
    width: 50vw;
  }

  .temoignages div p:first-of-type{
    margin-top: 5vh;
  }

  /*SECTION 5*/
  .section-5{
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .section-5 button{
    width: 30vw;
    height: 5vh;
  }

  .section-5 button:first-of-type{
    width: 40vw;
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
  footer>ul a{
    display: flex;
    width: 80vw;
    justify-content: flex-start;
  }
  .nav-secondaire li{
    margin-bottom: 2vh;
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
