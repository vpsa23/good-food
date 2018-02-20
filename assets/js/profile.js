// Inicializo Firebase
var usuarioLogueado="";
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


$(document).ready(function(){
    $("#btn-login").click(function(){
        
        //Función ingresar usuario y contraseña
        var usuarios = db.ref('usuarios');
        usuarios.on('value',function(ss){
            var usuario = ss.val();
        // Suiche que me indica si encontre el correo y la clave en caso de encontrarlo cambia valor de 0 a 1
            var logeado = 0;
            usr = Object.keys(usuario); //ASOCIAR LOS DATOS DEL OBJETO A UNA VARIABLE
            for(i=0; i<usr.length; i++){
                if(usuario[usr[i]].correo == $("#correo").val() && usuario[usr[i]].clave == $("#clave").val())
                {
                  //VARIABLE DE SESION PARA GUADRA EL NICK
                  sessionStorage['usuarioLogueado'] = usr[i];
                  logeado=1
                }   
            }
            if(logeado == 1){
              document.location.replace('restaurant.html')
            }else 
              {
                alert("Ese usuario no existe o la contraseña esta incorrecta")
            }
        })
    })

    // Rescatar inormación del formulario crear perfil
    $('#btn-sign-up').click(function(){
 // haciendo referencia a el campo usuarios de la base de datos
      var usuarios = db.ref('usuarios');
     
      var nick = $('#nick').val();
      var nombre = $('#nombre').val();
      var email = $('#correo').val();
      var clave = $('#clave').val();
  //var password2 = $('#password2').val();
  // Creo un objeto para almacenar los datos de un usuario
      var usuario = new Object();
      usuario.nombre=nombre;
      usuario.correo = email;
      usuario.clave= clave;
      console.log(usuario);
//llamo al campo referencia de usuarios de la base de datos que es nick 
// guardo con set el objeto usuario con todos los datos de los usuarios
      usuarios.child(nick).set(usuario);

      document.location.replace('restaurant.html')

    })

  
})    

function cargaDatos(){
       //console.log("Usuario: "+sessionStorage['usuarioLogueado']) 

        var usuarios = db.ref('usuarios');
        usuarios.on('value',function(ss){
          var usuario = ss.val();
          var indice=0;
          usr = Object.keys(usuario);
                for(i=0; i<usr.length; i++){
                  if(usr[i] == sessionStorage['usuarioLogueado'])
                  {
                      indice = i;
                  } 
                }

                //console.log(usuario[usr[indice]].correo)
                $('#nombre').text(usuario[usr[indice]].nombre);
    
          });
    };



