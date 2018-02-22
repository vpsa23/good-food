// Inicializo Firebase
var usuarioLogueado="";
var rutaFoto=""
var config = {
    apiKey: "AIzaSyBwJ7zG8LUwDwLCRsikvMye3pNfGABr9Zo",
    authDomain: "good-food-2777b.firebaseapp.com",
    databaseURL: "https://good-food-2777b.firebaseio.com",
    projectId: "good-food-2777b",
    storageBucket: "good-food-2777b.appspot.com",
    messagingSenderId: "993255230093"
  };
  firebase.initializeApp(config);
var db = firebase.database();


//Autenticación para hacer uso del storage
var authService = firebase.auth();
//Base de datos de imagenes
var dbFotos = firebase.storage();
