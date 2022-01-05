<template>
  <div>

  </div>
</template>

<script>
import param from "../../param/param";
import appService from "../../services/appService";

export default {
  name: "Appartient",
  data () {
    return {
      liste:[],           // Liste des relations user / equipe
      listeEquipe:[],     // Liste totale des équipes
      keyword:'',         // Critère de recherche
      utilisateur:null,   // Utilisateur concerné
    }
  },
  computed:{
    // Recherche d'equipe par nom
    filterList: function(){
      return this.liste.filter(function(equipe){
        return (
          // On ne renvoie que les videos contenant keyword
          equipe.nom.toLowerCase().indexOf(this.keyword.toLowerCase()) >= 0
            ? equipe
            : ''
        )
      }.bind(this))
    },
  },
  created() {
    // Récupération user local
    this.utilisateur = appService.getLocal();
    let headers = {'Authorization': 'Bearer ' + this.utilisateur.token}

    axios({
      method: 'get',
      url: param.hostUtilisateur+"listeEquipe/0",
      headers: headers
    }).then(response=>{
      // Récupération de la liste de toutes les equipes
      this.listeEquipe = response.data;
      // Recherche des infos utilisateur
      axios({
        method: 'get',
        url: param.hostUtilisateur+'me',
        headers: headers
      }).then(function (response) {
        // Mise à jour id de l'utilisateur
        // besoin pour création d'appartenance
        this.utilisateur.id = response.data.data.ID;

        // Locations de l'utilisateur
        let listeEquipe = response.data.data.equipe;
        // Mise à jour du tableau des locations sur la page
        this.listeEquipe.forEach(function(equipe){
          let trouve = false;
          let idEquipe = 0;
          // Cette vidéo est-elle dans les locations utilisateur ?
          listeEquipe.forEach(function(equipe){
            if(equipe.id == appartient.equipe.id){
              trouve = true;
              idEquipe = appartient.id;
            }
          })
          if (trouve){
            // Si elle est trouvée, l'utilisateur est déjà dans l'équipe
            equipe.idEquipe = idEquipe;
            this.appartient.push(equipe);
          }else{
            // Sinon elle est à rejoindre
            this.liste.push(equipe);
          }
        }.bind(this))
      }.bind(this))
        .catch(error => {
          console.log("ERREUR validation token utilisateur", error);
        })
    })
      .catch(error => console.log(error))
  },
  methods : {
    equipe:function(equipe){
      // Creation location
      axios({
        method: 'post',
        data :  {
          title : this.utilisateur.id + "_"+ this.utilisateur.nom,
          status : "publish",
          fields : {
            utilisateur :     this.utilisateur.id,
            equipe :      equipe.id
          }
        },
        url: param.host+'appartient',
        headers: { 'Authorization' : 'Bearer '+ this.utilisateur.token }
      })
        .then(function (response) {
          console.log("Retour création appartenance", response);
          // On ajout l'id de la location créée à la video
          equipe.idEquipe = response.data.id;
          // Mise de la vidéo dans les locations
          this.appartient.push(equipe);
          // Mise à jour des tableaux de vidéos non louées
          this.initData();
        }.bind(this))
        .catch(error => {
          console.log("ERREUR création d'appartenance");
          console.log(error)
        })
    },

    quitter:function(equipe){
      // Suppression location
      axios({
        method: 'delete',
        url : param.host+'appartient/'+equipe.idEquipe,
        headers: { 'Authorization' : 'Bearer '+ this.utilisateur.token }
      })
        .then(function (response) {
          console.log("Retour suppression d'appartenance", response);
          // Supprimer la video des locations
          this.appartient = this.appartient.filter(function(equipeRejoint){
            return equipeRejoint.id != equipe.id;
          })
          // Mise à jour des tableaux des vidéos non louées
          this.initData();
        }.bind(this))
        .catch(error => {
          console.log("ERREUR suppression location");
          console.log(error)
        })

    },

    initData:function(){
      // Mise à jour du tableaux des vidéos non louées
      let tab = [];
      this.listeEquipe.forEach(function(equipe){
        let trouve = false;
        this.appartient.forEach(function(equipeRejoint){
          if(equipe.id == equipeRejoint.id){
            trouve = true;
          }
        })
        if(!trouve){
          tab.push(equipe);
        }
      }.bind(this))
      this.liste = tab;
    },
  }
}
</script>

<style scoped>

</style>
