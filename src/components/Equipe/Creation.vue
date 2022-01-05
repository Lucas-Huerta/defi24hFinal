<template>
  <form @submit.prevent="creer" enctype="multipart/form-data">
    <div>
      <h1>Constitue ton<span> équipe</span> de choc !</h1>
      <p>Constitue ton équipe avec tous tes copains de la promo et du département.
      Alors, choisis bien tes coéquipiers ! </p>
    </div>

    <div>
      <img src="../../assets/user.png" alt="image par défaut"/>
      <label for="file"> Choisir une photo de profil d'équipe</label>
      <input type="file" class="custom-file-input" ref="file" id="file"
             @change="previewImage" name="imageProfil" required>
      <input type="text" placeholder="Nom de l'équipe"
             v-model="equipe.acf.nom" required>
      <input type="text" placeholder="Description de l'équipe"
             v-model="equipe.acf.description" required>

      <select name="listeUtilisateurs" id="listeUtilisateurs"
      v-model="appartient.acf.utilisateur">
        <option value="">Tous les participants</option>
        <option  v-for="userSelect in getUtilisateurs">
          {{userSelect}}
        </option>
      </select>
      <button type="submit" class="boutonViolet" name="submit" value="S'inscrire">
        Créer mon équipe
      </button>
    </div>
  </form>
</template>

<script>
import param from "../../param/param";
import appService from "../../services/appService";

export default {
  name: "Creation",
  data() {
    return {
      appartient: {
        acf: {
          utilisateur: { // Structure d'un utilisateur
            ID: null,
            user_firstname: null,
            user_lastname: null,
            nickname: null,
            user_nicename: null,
            display_name: null,
            user_email: null,
            user_url: null,
            user_registered: null,
            user_description: null,
            user_avatar: null
          },
          equipe: { // Structure d'une equipe
            acf: {
              photo: null,
              nom: null,
              description: null
            }
          },
        }
      },
      equipe: { // Structure d'une equipe
        acf: {
          photo: null,
          nom: null,
          description: null,
          utilisateur: {
            display_name: null
          }
        }
      },
      file: null, // Fichier image (photo de l'équipe)

      listeEquipe: [],
      listeApp: [],

      // LISTE UTILISATEURS
      liste: [],
      listeUtilisateurs: [],
      utilisateur: null,
    }
  },

  computed: {
    listeAppOrder: function () {
      function compare(a, b) {
        if (a.acf.utilisateur.id < b.acf.utilisateur.id) return -1;
        if (a.acf.utilisateur.id > b.acf.utilisateur.id) return 1;
        return 0;
      }

      return this.listeApp.sort(compare);
    },

    // Boucle qui parcours le tableau équipe.
    // Dans le tableau équipe, il y a un autre tableau qui contient les utilisateurs qui
    // composent l'équipe. La fonction GetUtilisateur
    getUtilisateurs: function() {
      let equipe = this.listeEquipe;
      let nom = [];
      for (let i = 0; i < equipe.length; i++) {
        var utilisateur = equipe[i].acf.utilisateur;
        for (let j = 0; j < utilisateur.length; j++) {
          nom[j] = utilisateur[j].display_name;
        }
      }
      return nom;
    },
  },

  created() {
    // Récupération de l'utilisateur local
    this.utilisateur = appService.getLocal();
    // Liste des users
    axios.get(param.host + "utilisateur")
      .then(response => {
        // Récupération de la liste des relation user equipe
        this.listeUtilisateurs = response.data;
        console.log("Utilisateurs  :", this.listeUtilisateurs);
      }).catch(error => console.log(error))

    // Liste des equipes
    axios.get(param.host + "equipe")
      .then(response => {
        // Récupération de la liste des relation user equipe
        this.listeEquipe = response.data;
        console.log("Equipes  :", this.listeEquipe);
      }).catch(error => console.log(error))

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
    previewImage: function (event) {
      // Mise à jour de la photo du participant
      this.file = this.$refs.file.files[0];
      // Reference to the DOM input element
      // Reference du fichier à prévisualiser
      var input = event.target;
      // On s'assure que l'on a au moins un fichier à lire
      if (input.files && input.files[0]) {
        // Creation d'un filereader
        // Pour lire l'image et la convertir en base 64
        var reader = new FileReader();
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
        console.log("Reponse token", response);
        let token = response.data.token;
        console.log("Token", token);

        // Création de l'image
        const formData = new FormData();
        let imagefile = document.querySelector('#file');
        formData.append('file', this.file);
        formData.append("title", this.equipe.acf.nom);
        formData.append("status", 'publish');
        // header pour autorisation de mise à jour
        let headers = {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'multipart/form-data'
        }

        // Requête Ajax pour Upload image
        axios({
          method: 'post',
          url: param.host + 'media',
          data: formData,
          headers: headers
        }).then(function (response) {
          console.log("Retour upload image", response);
          // Récupération id de l'image
          let idImage = response.data.id;
          console.log("idImage", idImage);
          let UrlImage = response.data.source_url;
          console.log("Url Image", UrlImage);

          // Création de l'équipe
          axios({
            method: 'post',
            data: {
              title: this.equipe.acf.nom,
              status: "publish",
              fields: {
                nom: this.equipe.acf.nom,
                description: this.equipe.acf.description,
                photo: idImage
              }
            },
            url: param.host + 'equipe',
            headers: {'Authorization': 'Bearer ' + token}
          }).then(function (response) {
            console.log("Retour création equipe", response);
            this.$router.push('/Compte');
          }.bind(this))
            .catch(error => console.log(error))
        }.bind(this))
          .catch(error => console.log(error))
      }.bind(this))
        .catch(error => console.log(error))
    },

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
  }
}
</script>

<style scoped>

.custom-file-input{
  display: none;
}

h1{
  text-transform: uppercase;
  font-size: 50px;
  font-weight: normal;
}

a{
  color: #8D668F;
}

form{
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

select option{
  z-index: 1;
  color: #1F1F1F;
}

form>div:first-child{
  margin: auto;
  width: 30vw;
}

form>div:last-child{
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
  margin-top: 10vh;
  width: 30vw;
}

form img{
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: auto auto 5vh auto;
  width: 10vw;
  height: 20vh;
}

form input{
  display: flex;
  width: 20vw;
  margin: 2vh auto auto auto;
  color: #8D668F;
  border-style: none;
  border-bottom-style: groove;
}

form select{
  margin: 5vh auto 5vh auto;
  width: 20vw;
}

form button{
  width: 15vw;
  height: 5vh;
  box-shadow: 5px 10px 10px #D9D3D9, -5px -5px 10px #D9D3D9;
}

@media screen and (max-width: 500px) {

  h1{
    font-size: 1.8em;
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

  form div:first-child{
    margin: 5vh auto 0 auto;
    width: 80vw;
  }

  form h1{
    text-align: center;
    width: 80vw;
    margin: 0;
  }

  form p{
    text-align: center;
  }

  form div:last-child{
    width: 80vw;
    margin: 5vh auto 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  form img{
    width: 20vw;
    height: 10vh;
    margin: 0 auto 0 auto;
  }

  form input{
    width: 40vw;
    text-align: center;
  }

  form select{
    margin: 5vh auto 2vh auto;
    text-align: center;
    width: 40vw;
  }

  form button{
    margin: 5vh auto 0 auto;
    width: 40vw;
  }
}

</style>
