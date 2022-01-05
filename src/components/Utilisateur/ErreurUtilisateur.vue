<template>

  <div class="main">
    <h1>Tu n'est pas encore <span> inscrit</span> ?</h1>
    <p>
      Tu souhaites participer à l'événement du 21 janvier 2022 ?
      Tu peux d'ores et déjà t'inscrire gratuitement et en quelques clics seulement !
    </p>
    <div>
      <router-link to="/Inscription"><button type="submit">S'inscrire</button></router-link>
      <router-link to="/Accueil"><button type="submit">Retour à l'accueil</button></router-link>
    </div>
  </div>

</template>

<script>
export default {
  name: "ErreurUtilisateur"
}
</script>

<style scoped>


.main{
  margin: 10vh 10vw 10vh 10vw;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 80vw;
  height: 80vh;
  border: #FDFDFD solid 1px;
  box-shadow: 5px 10px 10px #D9D3D9, -5px -5px 10px #D9D3D9;
  overflow-x: hidden;
}

h1{
  text-transform: uppercase;
  font-size:  3.125em;
  letter-spacing: 5px;
  font-weight: normal;
  text-align: center;
  margin-top: 25vh;
}

p{
  width: 40vw;
  display: flex;
  text-align: center;
  margin: 0 auto 0 auto;
}

.main div{
  display: flex;
  flex-direction: row;
  margin: 5vh auto 0 auto;
}

div button:first-of-type{
  border: #FDFDFD solid 1px;
  border-radius: 50px;
  background-color: #8D668F;
  color: #FFFFFF ;
  width: 15vw;
  height: 5vh;
  box-shadow: 5px 10px 10px #D9D3D9, -5px -5px 10px #D9D3D9;
  text-transform: uppercase;
  margin-right: 1vw;
}

div button:last-of-type{
  border: #FDFDFD solid 1px;
  border-radius: 50px;
  background-color: #FDFDFD;
  color: #8D668F ;
  width: 15vw;
  height: 5vh;
  box-shadow: 5px 10px 10px #D9D3D9, -5px -5px 10px #D9D3D9;
  text-transform: uppercase;
  margin-left: 1vw;
}

</style>
