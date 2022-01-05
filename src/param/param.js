export default {

  host : 'https://wdpdefi24h.lucashuerta.fr/wp-json/wp/v2/',

  // Routes spécifiques
  hostUtilisateur : 'https://wdpdefi24h.lucashuerta.fr/wp-json/utilisateur/v1',

  // Authentification JWT Wordpress
  auth : "https://wdpdefi24h.lucashuerta.fr/wp-json/jwt-auth/v1/token",
  user : 'wp-admin',
  psw : 'Defi24h',

  // titre application
  titre :  "defi24h",

  // Messages de l'application
  message : {
    errCnx :        "Les éléments d'identification ne permettent pas d'accéder à l'application",
    errAcces :      "Vous n'avez pas les droits nécessaires pour accéder à cette page"
  }
}
