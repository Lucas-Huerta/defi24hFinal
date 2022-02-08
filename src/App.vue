<template>
  <div id="app">
    <head>
      <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    </head>
    <router-view/>
  </div>

</template>

<script>
import Timer from "./components/Timer";
import param from "./param/param";
import appService from "./services/appService";

export default {
  name: 'App',

  data() {
    return{
      utilisateur:{
        pseudo: null,
        mot_de_passe: null,
        token:null,
        role:null,
        imageUser: null
      },
      Timer: {
        deadline: "2022-01-21",
      },
      titre: null,

      // Menu de l'utilisateur
      menu:['Accueil'],
    }
  },
  components: {
    Timer
  },

}
</script>

<style>

/* --------------- FONTS ---------------*/
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

@font-face {
  font-family: 'Black Marker';
  src: url("assets/fonts/Black-Marker.ttf");
}

body{
  margin: 0;
  padding: 0;
  width: 100%;
  position: relative;
  overflow-x: hidden;
  font-family: Raleway, sans-serif;
}

/* --------------- TITLES ---------------*/
h1{
  font-size:  3.125em;
}

h2{
  font-size: 1.375em;
}

h1, h2 {
  font-family: "Black Marker", sans-serif;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-weight: normal;
}

h1>span, h2>span {
  color: #8D668F;
}

/* --------------- OTHERS ---------------*/
ul {
  list-style-type: none;
}

a {
  color: #8D668F;
  font-weight: 600;
  line-height: 3rem;
  text-decoration: none;
}

.boutonBlanc{
  border: #FDFDFD solid 1px;
  border-radius: 50px;
  background-color: #FDFDFD ;
  color: #8D668F ;
  box-shadow: 2px 2px 10px #D9D3D9, -2px -2px 10px #D9D3D9;
  text-transform: uppercase;
}

.boutonViolet{
  border: #FDFDFD solid 1px;
  border-radius: 50px;
  background-color: #8D668F ;
  color: #FDFDFD;
  text-transform: uppercase;
}

body::-webkit-scrollbar {
  width: 12px; /* width of the entire scrollbar */
}

body::-webkit-scrollbar-thumb {
  background-color: #8d668f; /* color of the scroll thumb */
  border-radius: 20px; /* roundness of the scroll thumb */
}

/*CONNEXION UTILISATEUR*/

.connectUtilisateur{
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #FFFFFF;
  background: linear-gradient(120deg, #8D668F, #A888AA);
  overflow-y: hidden;
  width: 15vw;
  max-height: 7vh;
  border-radius: 40px;
  margin: 4vh 5vw 0 0;
  transition: all 0.5s ease-in-out;
}

.connectUtilisateur ul{
  margin: 2vh auto 2vh auto;
}

.connectUtilisateur button{
  border: #FDFDFD solid 1px;
  border-radius: 50px;
  background-color: #A888AA;
  color: #FDFDFD;
  text-transform: uppercase;
}

.connectUtilisateur:hover{
  max-height: 20vh;
}

/* --------------- MEDIA QUERIES ---------------*/

/*GRAND ECRAN*/

@media screen and (min-width: 1300px) {

  body{
    font-size: 20px;
  }

  .connectUtilisateur{
    max-height: 6vh;
    margin: 2vh 4vw 0 0;
  }

  .connectUtilisateur button{
    width: 8vw;
    height: 4vh;
  }

}

@media screen and (max-width: 500px) {
  body{
    width: 100vw;
    overflow-x: hidden;
  }

  h1{
    font-size: 1.375em;
  }
}

</style>
