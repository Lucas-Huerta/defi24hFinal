import Vue from 'vue'
import Router from 'vue-router'

// ACCUEIL LANDING
import LandingPage from "../components/LandingPage";
import Accueil from "../components/Accueil";
import Patience from "../components/Patience";
import Rendu from "../components/Rendu";

// PAGES
import MiniJeux from "../components/MiniJeux";
import Galerie from "../components/Galerie";
import Classement from "../components/Classement";

// GESTION COMPTE
import Compte from "../components/Utilisateur/Compte";
import Connexion from "../components/Utilisateur/Connexion";
import Inscription from "../components/Utilisateur/Inscription";
import ErreurUtilisateur from "../components/Utilisateur/ErreurUtilisateur";
import Appartient from "../components/Utilisateur/Appartient";

// EQUIPE
import Creation from "../components/Equipe/Creation";
import Equipe from "../components/Equipe/Equipe"
import ErreurEquipe from "../components/Equipe/ErreurEquipe";

// LISTES
import listeUtilisateurs from "../components/administration/listeUtilisateurs";
import listeEquipe from "../components/administration/listeEquipe";

// AUTRES
import QuiSommesNous from "../components/Autres/QuiSommesNous";
import MentionsLegales from "../components/Autres/MentionsLegales";


Vue.use(Router)

export default new Router({
  routes: [

    // PAGES
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/Accueil',
      name:'Accueil',
      component: Accueil
    },
    {
      path: "/MiniJeux",
      name:'MiniJeux',
      component: MiniJeux
    },
    {
      path: '/Classement',
      name: Classement,
      component: Classement
    },
    {
      path: "/Galerie",
      name: 'Galerie',
      component: Galerie
    },
    {
      path: "/Patience",
      name: "Patience",
      component: Patience
    },
    {
      path: "/Rendu",
      name: "Rendu",
      component: Rendu
    },

    // UTILISATEUR

    {
      path: '/Compte',
      name: 'Compte',
      component: Compte
    },
    {
      path: '/Connexion',
      name: 'Connexion',
      component: Connexion
    },
    {
      path: '/Inscription',
      name: 'Inscription',
      component: Inscription
    },
    {
      path: '/listeUtilisateurs',
      name: listeUtilisateurs,
      component: listeUtilisateurs
    },
    {
      path: '/ErreurUtilisateur',
      name: ErreurUtilisateur,
      component: ErreurUtilisateur
    },
    {
      path: '/Appartient',
      name: Appartient,
      component: Appartient
    },

    // EQUIPE

    {
      path: '/listeEquipe',
      name: listeEquipe,
      component: listeEquipe
    },
    {
      path: '/Creation',
      name: Creation,
      component: Creation
    },
    {
      path: '/Equipe',
      name: Equipe,
      component: Equipe,
      props: (route) => ({
        getUtilisateurs: route.query.getUtilisateurs
      })
    },
    {
      path: '/ErreurEquipe',
      name: ErreurEquipe,
      component: ErreurEquipe
    },

    // AUTRES

    {
      path: '/QuiSommesNous',
      name: QuiSommesNous,
      component: QuiSommesNous
    },
    {
      path: '/MentionsLegales',
      name: MentionsLegales,
      component: MentionsLegales
    },
  ],

  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
