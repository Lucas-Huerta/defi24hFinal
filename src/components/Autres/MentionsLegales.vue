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
              <button>Se connecter</button>
            </router-link>
            <router-link to="/Inscription">
              <button>
                S'inscrire
              </button>
            </router-link>
          </div>
        </div>
      </nav>
    </header>

    <section>
      <h1>
        Mentions <span>Légales</span>
      </h1>

      <p>Cette page décrit les mentions légales qui s'appliquent à tout internaute visitant ce site. En le consultant vous vous engagez sans réserve à les respecter. Les mentions légales pouvant être modifiées à tout moment et sans préavis, nous vous engageons à les consulter régulièrement.</p>
      <p><span class="bold">Dernière mise à jour</span> le 27/11/2021</p>

      <h2>Responsable éditorial et responsable légal</h2>
      <ul>
        <li>Département MMI</li>
        <li>Représenté par Alain Lamboux-Durand</li>
        <li>4 place Tharradin</li>
        <li>25200 Montbéliard</li>
        <li>Tél. : +33 (0)3 81 99 47 34</li>
        <li>Mail DUT MMI : <a href="mailto:dut-mmi-montbeliard@univ-fcomte.fr">dut-mmi-montbeliard@univ-fcomte.fr</a></li>
        <li>Mail Licence Pro Webdesign : <a href="mailto:lp-wd-montbeliard@univ-fcomte.fr">lp-wd-montbeliard@univ-fcomte.fr</a></li>
      </ul>

      <h2>Éditeur du site</h2>
      <ul>
        <li>Département MMI, Université de Belfort-Montbéliard</li>
        <li>Sebastian Chevallier - Designer Web</li>
        <li>Lucas Huerta - Développeur</li>
        <li>Claire Oudot - Responsable Communication</li>
        <li>4 place Tharradin</li>
        <li>25200 Montbéliard</li>
        <li><a href="mailto:ledefi24heures@gmail.com">ledefi24heures@gmail.com</a></li>
        <li>Tuteur légal des étudiants : Alain Lamboux-Durand - <a
          href="mailto:alain.lamboux-durand@univ-fcomte.fr">alain.lamboux-durand@univ-fcomte.fr</a></li>
      </ul>

      <h2>Hébergeur</h2>
      <ul>
        <li>Nom de la structure</li>
        <li>Représenté(e) par Cédric Michelot - <a href="mailto:cedric.michelot@univ-fcomte.fr">cedric.michelot@univ-fcomte.fr</a></li>
        <li>Adresse</li>
        <li>E-mail</li>
        <li>Siret / N°TVA : </li>
      </ul>

      <h2>Conditions d'utilisation</h2>
      <p>Conformément à la loi Informatique et Libertés du 6 janvier 1978, vous disposez d'un droit d'accès et de rectification aux données vous concernant par simple demande mail, écrite ou téléphonique. Le centre de formation et les étudiants en charge du projet ne peuvent être tenus responsable du contenu du site. Ce site est exploité par le Département MMI de l’Université de Belfort Montbéliard.</p>
      <p>La présentation et chacun des éléments, y compris les marques, logos et noms de domaine, apparaissant sur le site <a href="https://www.ledefi24heures.fr">www.ledefi24heures.fr</a> sont protégés par les lois en vigueur sur la propriété intellectuelle, et appartiennent <span class="bold">au Département MMI de l’Université de Belfort Montbéliard</span>, ou font l'objet d'une autorisation d'utilisation.</p>
      <p>Aucun élément composant le site ne peut être copié, reproduit, modifié, réédité, chargé, dénaturé, transmis ou distribué de quelque manière que ce soit, sous quelque support que ce soit, de façon partielle ou intégrale, sans l'autorisation écrite et préalable du Département MMI de l’Université de Belfort Montbéliard à l'exception d'une stricte utilisation pour les besoins de la presse et sous réserve du respect des droits de propriété intellectuelle et de tout autre droit de propriété dont il est fait mention. Seule la copie à usage privé est autorisée pour votre usage personnel, privé et non-commercial, sur votre ordinateur personnel.</p>
      <p>Toute utilisation autorisée des éléments composant ou figurant dans le site doit se faire sans dénaturation, modification ou altération de quelque manière que ce soit. Le département MMI de l’Université de Belfort Montbéliard se réserve le droit de poursuivre tout acte de contrefaçon de ses droits de propriété intellectuelle. Le présent Contrat est soumis au droit Français. Le présent Contrat s'applique dans le monde entier, et seule sa version en langue française fait foi en vue de son interprétation.</p>

      <h2>Graphisme, photos et illustrations</h2>
      <p>Le graphisme (incluant le webdesign et le logo) a été réalisé par <a
        href="mailto:sebastian.chvlr@gmail.com">Sebastian Chevallier</a></p>
      <p>Les illustrations et visuels ont téléchargés sur les banques d’images libres de droits <a
        href="https://fr.freepik.com/">Freepik</a>, <a href="https://pixabay.com/fr/">Pixabay</a>, <a href="https://unsplash.com/">Unsplash</a>, <a href="https://www.flaticon.com/fr/">Flaticon</a> etc. </p>

      <h2>Déclaration à la CNIL</h2>
      Conformément à la loi 78-17 du 6 janvier 1978 (modifiée par la loi 2004-801 du 6 août 2004 relative à la protection des personnes physiques à l’égard des traitements de données à caractère personnel) relative à l’informatique, aux fichiers et aux libertés, ce site est en cours de déclaration auprès de la Commission nationale de l’informatique et des libertés (<a href="https://www.cnil.fr/">www.cnil.fr</a>). Pour plus d’informations sur le traitement de nos données sensibles, veuillez consulter notre Politique de Confidentialité.

      <h2>Politique de confidentialité</h2>

      <p>Dans le cadre de son activité de formation aux Métiers du Web, le <span class="bold">Département MMMi de l'Université de Belfort-Montbéliard</span> représentée par
        <a href="mailto:alain.lamboux-durand@univ-fcomte.fr">Alain Lamboux-Durand</a>, est amenée à collecter et traiter les données personnelles de ses visiteurs. Les activités pour lesquelles la société est amené à traiter des données sensibles sont les suivantes :</p>

      <ul>
        <li><span class="underline">Vente de pizzas</span> avec la création d'un compte client <a
          href="https://weezevent.com/fr/">Weezevent</a> (nom/prénom, coordonnées postales, e-mail, tél, coordonnées bancaires dans le cadre de paiements par CB). Ces données sont nécessaires au traitement de votre commande et à la gestion de nos relations commerciales.</li>
        <li><span class="underline">Analyse de données</span>, notamment l'année de promotion, pour étude de marché et reporting.</li>
        <li><span class="underline">Réponse aux prises de contact</span> avec un formulaire présent sur la page "Contact" du site web.</li>
      </ul>

      <p>La présente politique de confidentialité a pour vocation de fournir aux internautes une information synthétique et globale sur les traitements de données à caractère personnel opérés par la société de commerce. En accédant à notre site Web et en utilisant nos services, vous reconnaissez avoir lu et compris la présente Politique de confidentialité, ainsi que les pratiques de recueil et de traitement des informations décrites dans ce document.</p>

      <p><span class="bold">Le Département MMI de l'Université de Belfort-Montbéliard</span> se réserve le droit de faire évoluer la présente Politique de confidentialité afin de se conformer aux modifications des lois et règlementations en vigueur.  Veuillez donc le consulter régulièrement afin de rester informé(e).</p>

      <h3>Définitions</h3>

      <p><span class="bold">Le Département MMI de l'Université de Belfort-Montbéliard</span> accorde une importance particulière au respect de la vie privée des Utilisateurs et de la confidentialité de leurs données personnelles, et s’engage ainsi à traiter les données dans le respect des lois et règlementations applicables, et notamment la Loi n° 78-17 du 6 janvier 1978 relative à l’informatique, aux fichiers et aux libertés (la “Loi Informatique et Liberté”), et le Règlement (UE) 2016/679 du Parlement européen et du Conseil du 27 avril 2016 relatif à la protection des personnes physiques à l’égard du traitement des données à caractère personnel et à la libre circulation de ces données (le “RGPD”).</p>

      <ul>
        <li><span class="underline">Donnée à caractère personnel :</span> constitue une donnée à caractère personnel toute information relative à une personne physique identifiée ou identifiable, c’est-à-dire qui peut être identifiée, directement ou indirectement, par référence à un numéro d’identification ou à un ou plusieurs éléments qui lui sont propres.</li>
        <li><span class="underline">Traitement de données à caractère personnel :</span> constitue un traitement de données à caractère personnel toute opération portant sur de telles données, quel que soit le procédé utilisé, et notamment la collecte, l’enregistrement, l’organisation, la conservation, l’adaptation ou la modification, l’extraction, la consultation, l’utilisation, la communication par transmission, diffusion ou toute autre forme de mise à disposition, le rapprochement ou l’interconnexion, ainsi que le verrouillage, l’effacement ou la destruction.</li>
        <li><span class="underline">Cookie :</span> un cookie est une information déposée sur le disque dur d’un internaute par le serveur du site qu’il visite. Il contient plusieurs données : le nom du serveur qui l’a déposé, un identifiant sous forme de numéro unique, éventuellement une date d’expiration. Ces informations sont parfois stockées sur l’ordinateur dans un simple fichier texte auquel un serveur accède pour lire et enregistrer des informations.</li>
      </ul>

      <h3>Responsable du traitement des données</h3>

      <ul>
        <li>Alain Lamboux-Durand - <a href="mailto:alain.lamboux-durand@univ-fcomte.fr">alain.lamboux-durand@univ-fcomte.fr</a></li>
        <li>4 place Tharradin</li>
        <li>25200 Montbéliard</li>
      </ul>

      <h3>Recueil des informations collectées</h3>

      <h4>Vente de pizzas</h4>
      <p>La création d’un compte client via <a href="https://weezevent.com/fr/">Weezevent</a> (nom/prénom, coordonnées postales, email, tél, coordonnées bancaires dans les cas de paiement par CB) est exigée pour toute commande en ligne. Ces données sont nécessaires au traitement de votre commande et à la gestion de nos relations commerciales. C’est vous et vous seul qui décidez si vous souhaitez nous communiquer ou pas vos données personnelles, en d’autres termes ces indications nous sont communiquées par vos soins sur une base volontaire.</p>

      <h4>Comment la plateforme Weezevent sécurise vos données personnelles ?</h4>
      <p>Weezevent est une société française de forme juridique SAS (Société par Actions Simplifiée) au capital de 72 212 euros. Son siège social est à Dijon et ses bureaux sont situés à Saint-Denis. Concernant les fonds résultant de la vente de billets, ceux-ci sont sécurisés sur un compte bancaire dédié chez CIC. Ce compte dédié, ne sert qu’à encaisser l’argent des ventes de tickets, et à payer les organisateurs d’événements de façon bi-mensuelle sur la base des factures/redditions.</p>

      <p>En matière de sécurité informatique, des audits de sécurité interne et externe sont pratiqués régulièrement et Weezevent veille à utiliser tous les standards de sécurité en : https, 3DSecure, SSL… Le certificat utilisé (Certificats SSL avec Extended Validation pour serveur Web ) chiffre la connexion avec un cryptage de 256 bits, ce qui est la norme d’authentification d’identité la plus stricte à l’heure actuelle. Ce protocole de sécurité utilise également la norme HTTPS (au lieu du HTTP). Notre TPE sécurisé qui permet les paiements en ligne par carte bancaire, est hébergé par la plateforme technique de la banque CIC : Monetico Paiement. Monetico Paiement garantit un paiement sécurisé sur Internet grâce au protocole SSL pour la sécurisation des transactions des boutiques en ligne.</p>

      <p>Le traitement des données personnelles et confidentielles stockées par Weezevent ont, conformément à la loi « Informatique et Libertés », fait l’objet d’une <span class="bold">déclaration auprès de la Commission Nationale de l’Informatique et des Libertés</span> (CNIL) sous le numéro de récépissé 1291474.</p>

      <h4>Prise de contact volontaire via le formulaire</h4>
      <p><span class="bold">Le Défi 24 Heures</span> propose à ses internautes, via l’intermédiaire d’un formulaire de contact sécurisé, de prendre contact avec le chef de projets. Ladite prise de contact n’est pas obligatoire pour la bonne consultation du site web.</p>

      <h4>Protection des mineurs</h4>
      <p>Les mineurs ne doivent pas transmettre de données individuelles à des sites Internet à but commercial sans l’autorisation de leurs parents. Le Défi 24h ne collectera en aucun cas délibérément les données individuelles d’enfants, ni ne les utilisera, ni ne les mettra à disposition, ni ne les transmettra à quiconque sans y être autorisé.</p>

      <h4>Tiers avec lesquels nous partageons vos données personnelles</h4>
      <p>Les données à caractère personnel collectées sont destinées aux services commerciaux et webmarketing du Département MMI de Montbéliard et de Weezevent. Les données sont seulement communiquées, dans la mesure du nécessaire, afin d’exécuter votre commande, de la livrer ou de traiter une demande.</p>

      <h4>Durée de conservation de vos données</h4>
      <p>Nous conserverons vos données pendant 1 mois après la fin du Défi 24h. Ces dernières seront donc supprimées le 22 février 2022. Vous pouvez à tout moment faire appel à votre <span class="underline">droit à l'oubli</span> ou à votre <span class="underline">droit d'opposition</span> (voir le paragraphe suivant).</p>

      <h4>Vos droits en tant qu'adhérent à notre site web</h4>
      <p>En tant qu’internaute, vous avez des droits en termes de protection et d’accès à vos données personnelles. Vous pouvez à tout moment contacter
        <a href="mailto:ledefi24heures@gmail.com">ledefi24heures@gmail.com</a>, vos droits sont les suivants :</p>

      <ul>
        <li><span class="underline">Droit de rectification :</span> vous pouvez nous contacter à tout moment pour modifier les données vous concernant. Vos informations seront modifiées dans un délai de 48h maximum.</li>
        <li><span class="underline">Droit à l'oubli :</span> sur votre demande, nous nous engageons à effacer définitivement toutes données vous concernant dans un délai de 30 jours. Si vous souhaitez exercer ce droit pour votre compte-client, vous devez nous en informer par e-mail, en nous indiquant vos nom, prénom, et adresse mail.</li>
        <li><span class="underline">Droit à la portabilité :</span> si vous nous le demandez, nous nous engageons à exporter toutes vos données et à vous les transférer sous un format sécurisé (protégé par le mot de passe de votre choix).</li>
        <li><span class="underline">Droit d'accès :</span> nous sommes transparents sur les données que nous collectons et l’usage que nous en faisons.</li>
      </ul>

      <h4>Cookies</h4>

      <p>Le site du Défi 24 heures utilise des cookies qui ont pour finalité de faciliter la navigation sur le site, de mesurer l’audience du site ou encore de permettre le partage de pages du site. Les cookies que nous collectons sont les suivants: </p>

      <ul>
        <li><span class="underline">Les cookies analytiques :</span> Ces cookies permettent de connaître l’utilisation et les performances du site et d’en améliorer le fonctionnement en procédant à des analyses de fréquentation des pages d’information, en effectuant un suivi des taux d’ouverture, des taux de clics et des taux de rebond au niveau individuel.</li>
        <li><span class="underline">Les cookies de boutons de partage :</span> Ces cookies sociaux permettent aux utilisateurs de partager des pages et du contenu sur les réseaux sociaux tiers via les boutons sociaux de partage.</li>
      </ul>

      <h4>Gestion des cookies</h4>

      <p>Les internautes ont la possibilité d’accepter ou de refuser les cookies sur le site ou de les refuser une fois pour toutes en paramétrant leur navigateur. Si l’internaute choisit de refuser l’ensemble des cookies, la navigation accédant à certaines pages du site sera réduite.</p>
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
        <a href="https://www.instagram.com/ledefi24heures/">
          <img src="../../assets/footer/instagram.png" alt="" class="logo-instagram">
        </a>
        <a href="https://www.facebook.com/ledefi24heures">
          <img src="../../assets/footer/facebook.png" alt="" class="logo-facebook">
        </a>
      </div>

      <p class="mentions-légales">Exercice réalisé dans le cadre d'un exercice pédagogique au<span> département MMI de Montbéliard</span>
      </p>
    </footer>
  </main>
</template>

<script>
import param from "../../param/param";
import appService from "../../services/appService";

export default {
  name: "MentionsLegales",

  data() {
    return {
      utilisateur: { // Structure d'un utilisateur
        pseudo: null,
        mot_de_passe: null,
        token: null,
        role: null
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
        url: param.hostUtilisateur + 'me',
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

/*PAGE*/

section{
  margin: 0 5vw 0 5vw;
}

h1{
  text-align: center;
}

.bold {
  font-weight: bold;
}

.underline {
  text-decoration: underline;
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
  color: #8d668f;
}

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
}

@media screen and (max-width: 500px)  {

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
