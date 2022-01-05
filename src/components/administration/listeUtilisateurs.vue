<template>

</template>

<script>
import param from '@/param/param'
import appService from "../../services/appService";

export default {
  name: 'listeUtilisateurs',

  data () {
    return {
      liste:[],
      // 2° phase : ajout utilisateur pour cnx
      utilisateur:null
    }
  },

  created(){
    // Récupération de l'utilisateur local
    this.utilisateur = appService.getLocal();
    // Initialisation du token
    let headers = {'Authorization' : 'Bearer '+ this.utilisateur.token}
    // Liste des participants
    axios({
      method:'get',
      url : param.hostUtilisateur+"listeUtilisateur",
      // Header pour authorisation
      headers: headers
    }).then(response=>{
      // Récupération de la liste
      this.liste = response.data;
      console.log("Liste", this.liste);
    })
      .catch(error => console.log('Erreur liste des participants',error))
  },

  methods: {

  }

  // data () {
  //   return {
  //     liste:[]
  //   }
  // },
  // computed:{
  //   listeOrderByName: function(){
  //     function compare(a, b) {
  //       if (a.acf.nom.utilisateur < b.acf.nom.utilisateur) return -1;
  //       if (a.acf.nom.utilisateur > b.acf.nom.utilisateur) return 1;
  //       return 0;
  //     }
  //     return this.liste.sort(compare);
  //   }
  // },
  //
  // created(){
  //   // Liste des utilisateurs
  //   // Par défaut on ramène seulement les 10 premiers
  //   // au maximum, on peut en ramener 100
  //   // au délà de 100, il faut mettre un système de pagination
  //   // Autant de requêtes que de tranches par centaine
  //   axios.get(param.host+"utilisateur?per_page=100")
  //     .then(response=>{
  //       console.log("Reponse", response);
  //       // Récupération de la liste des pays
  //       this.liste = response.data;
  //     })
  //     .catch(error => console.log(error))
  // }
}
</script>

<style scoped>

</style>
