<template>

  <form @submit.prevent="creer" enctype="multipart/form-data">
    <div class="colonneGauche">
      <h1><span>Inscris-toi</span> au défi 24 heures !</h1>
      <p>Créer un compte en remplissant ce formulaire pour participer, seul ou en équipe, au défi 24 heures qui aura
        lieu le 21 janvier 2022 !</p>
      <router-link to="/Connexion">J'ai déjà un compte</router-link>
    </div>

    <div>
      <img class="preview" @change="previewImage" src="../../assets/user.png" alt="image par défaut"/>
<!--      <label for="file"> Choisir une <span> photo de profil</span></label>-->
<!--      <input type="file" class="custom-file-input" ref="file" id="file"-->
<!--              name="file" >-->
      <div>
        <input type="text" placeholder="Prénom" name="Prénom"
               v-model="utilisateur.acf.prenom" required>
        <input type="text" placeholder="Nom" name="Nom"
               v-model="utilisateur.acf.nom" required>
      </div>
      <input type="text" placeholder="Votre email" name="Mail"
             v-model="utilisateur.acf.email" required>
      <input type="text" placeholder="Nom d'utilisateur" name="Pseudo"
             v-model="utilisateur.acf.pseudo" required>
      <input type="text" placeholder="Mot de passe" name="Mdp"
             v-model="utilisateur.acf.mot_de_passe" required>
      <button class="boutonViolet" type="submit" name="submit" value="S'inscrire">
        S'inscrire
      </button>
    </div>
  </form>
</template>

<script>
import param from "../../param/param";

export default {
  name: "Inscription",
  data() {
    return {
      utilisateur: { // Structure d'un utilisateur
        acf: {
          photo: null,
          prenom: null,
          nom: null,
          email: null,
          pseudo: null,
          mot_de_passe: null
        }
      },
      liste: [],
      file: null // Fichier image (photo de l'utilisateur)
    }
  },

  created(){
    // Liste des utilisateurs
    // Initialisation du token
    // Se signer par JWT API
    axios({
      method: 'post',
      url: param.auth,
      data: {
        'username': param.user,
        'password': param.psw
      }
    }).then(function (response) {
        console.log("Reponse token", response);
        let token = response.data.token;
        console.log("Token", token);

      let headers = {'Authorization' : 'Bearer '+ token}
      // Liste des utilisateurs
      axios({
        method:'get',
        url : param.host+"utilisateur",
        // Header pour authorisation
        headers: headers
      }).then(response=>{
        // Récupération de la liste des utilisateurs
        this.liste = response.data;
        console.log("Liste", this.liste);
      })
        .catch(error => console.log('Erreur liste des utilisateurs',error))
    })
  },

  methods: {
    previewImage: function (event) {
      // Mise à jour de la photo du participant
      this.file = this.$refs.file.files[0];
      // Reference to the DOM input element
      // Reference du fichier à prévisualiser
      let input = event.target;
      // On s'assure que l'on a au moins un fichier à lire
      if (input.files && input.files[0]) {
        // Creation d'un filereader
        // Pour lire l'image et la convertir en base 64
        let reader = new FileReader();
        // fonction callback appellée lors que le fichier a été chargé
        reader.onload = (e) => {
          // Read image as base64 and set to imageData
          // lecture du fichier pour mettre à jour
          // la prévisualisation
          this.imageData = e.target.result;
        }
        // Demarrage du reader pour la transformer en data URL (format base 64)
        reader.readAsDataURL(input.files[0]);
      }
    },

    creer: function () {
      // Se signer par JWT API
      axios({
        method: 'post',
        url: param.auth,
        data: {
          'username': param.user,
          'password': param.psw
        }
      }).then(function (response) {
        // console.log("Reponse token", response);

        let token = response.data.token;
        console.log("Token", token);

        // Création de l'image
        const formData = new FormData();
        let imagefile = document.querySelector('#file');
        formData.append('file', this.file);
        formData.append("title",
          this.utilisateur.acf.prenom + " " + this.utilisateur.acf.nom);
        formData.append("status", 'publish');
        // header pour autorisation de mise à jour
        let headers = {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'multipart/form-data'
        }

        console.log("head", headers);

        // Requête Ajax pour Upload image
        axios({
          method: 'POST',
          url: "https://wdpdefi24h.lucashuerta.fr/wp-json/wp/v2/media",
          data: formData,
          headers: headers
        }).then(function (response) {
          console.log("Retour upload image", response);
          // Récupération id de l'image
          let idImage = response.data.id;
          console.log("idImage", idImage);
          let UrlImage = response.data.source_url;
          console.log("Url Image", UrlImage);

          // Création de l'utilisateur
          axios({
            method: 'post',
            data: {
              title: this.utilisateur.acf.prenom + " " + this.utilisateur.acf.nom,
              status: "publish",
              fields: {
                nom: this.utilisateur.acf.nom,
                prenom: this.utilisateur.acf.prenom,
                email: this.utilisateur.acf.email,
                pseudo: this.utilisateur.acf.pseudo,
                mot_de_passe: this.utilisateur.acf.mot_de_passe,
                photo: idImage,
              }
            },
            url: param.host + 'utilisateur',
            headers: {'Authorization': 'Bearer ' + token}
          }).then(function (response) {
            console.log("Retour création utilisateur", response);
            this.$router.push('/Accueil');
          }.bind(this))
            .catch(error => console.log(error))

        }.bind(this))
          .catch(error => console.log("Erreur upload img"+error))
      }.bind(this))
        .catch(error => console.log("Connexion axios"+error))
    }
  }
}
</script>

<style scoped>

.custom-file-input{
  display: none;
}

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

.colonneGauche>a:after{
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
}

form>div:last-child{
  justify-content: flex-end;
  text-align: center;
  margin-top: 15vh;
  width: 30vw;
}

form>div>img{
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: auto auto 2vh auto;
  width: 10vw;
  height: auto;
}

form input{
  display: flex;
  width: 20vw;
  margin: auto auto 3vh auto;
  color: #8D668F;
  border-style: none;
  border-bottom-style: groove;
}

form div label span{
  font-weight: bold;
}

form>div:last-child>div{
  display: flex;
  flex-direction: row;
  margin-top: 2vh;
}

form>div:last-child>div>input{
  width: 10vw;
}

form button{
  width: 15vw;
  height: 5vh;
}

@media screen and (min-width: 1300px) {
  form>div:first-child{
    width: 30vw;
  }
  form>div:last-child{
    margin-top: 15vh;
  }
}

@media screen and (max-width: 1000px) {
  form>div>img{
    width: 10vw;
    height: auto;
    margin-bottom: 0;
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
    flex-wrap: nowrap;
    flex-direction: column;
  }

  .colonneGauche>a{
    width: 80vw;
    margin-left: 20vw;
  }

  form>div:first-child{
    width: 80vw;
    margin: 3vh auto 0 auto;
  }

  form>div:first-child>p{
    text-align: center;
  }

  form>div:last-child{
    width: 80vw;
    margin-top: 0;
  }

  form>div:last-child>div>input{
    width: 20vw;
  }

  form>div>img{
    width: 20vw;
    height: 20vw;
    margin: 0 auto 0 auto;
  }

  form input{
    display: flex;
    width: 50vw;
  }

  form button{
    width: 50vw;
  }
}

</style>
