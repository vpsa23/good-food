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


$(document).ready(function(){
   cargaDatos();

   
// realizamos la autenticación anónima (debe estar activada en la consola de Firebase)
  authService.signInAnonymously()
    .catch(function(error) {
      console.error('Detectado error de autenticación', error);
    });

  // asociamos el manejador de eventos sobre el INPUT FILE
    document.getElementById('foto').addEventListener('change', function(evento){
    evento.preventDefault();
    //Obteniendo el nick del input del formulario
    var nickName = $("#nick").val();
    //Creando una variable archivo para guardar la foto temporalmente
    var archivo  = evento.target.files[0];
    //Subir archivo con la foto y el nombre del usuario
    subirArchivo(archivo,nickName);
  });


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

  // Rescatar información del formulario crear perfil
  $('#btn-sign-up').click(function(){
// haciendo referencia a el campo usuarios de la base de datos
    var usuarios = db.ref('usuarios');
     
      var nick = $('#nick').val();
      var nombre = $('#nombre').val();
      var correo = $('#correo').val();
      var clave = $('#clave').val();
  
// Creo un objeto para almacenar los datos de un usuario
      var usuario = new Object();
      usuario.nick=nick;
      usuario.nombre=nombre;
      usuario.correo = correo;
      usuario.clave= clave;
      usuario.foto=rutaFoto;
      console.log(rutaFoto);
//Llamo al campo referencia de usuarios de la base de datos que es nick 
// Guardo con set el objeto usuario con todos los datos de los usuarios

      usuarios.child(nick).set(usuario);
      sessionStorage['usuarioLogueado'] = nick;
      alert('usuarios registrado con exito')
      document.location.replace('restaurant.html')
      //cargaDatos();
    })
  
});

// función que se encargará de subir el archivo
    function subirArchivo(archivo, nick) {
      // creo una referencia/ruta/carpeta/repositorio al lugar donde guardaremos el archivo
      var rutaServer = dbFotos.ref('perfiles').child(nick);
      // Comienzo la tarea de upload/Subiendo la foto
      var uploadTask = rutaServer.put(archivo);
      // defino un evento para saber qué pasa con ese upload iniciado
      uploadTask.on('state_changed', null,
        function(error){
          console.log('Error al subir el archivo', error);
        },
        function(){
          //mensajeFinalizado(uploadTask.snapshot.downloadURL, uploadTask.snapshot.totalBytes);
          //Guardo la ruta donde quedo registrada la foto en el servidor
          //snapshot.downloadURL es el equivalente a ss recasta la foto
          rutaFoto = uploadTask.snapshot.downloadURL
          console.log('Subida completada: '+rutaFoto);
          
        }
      );
    }


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
                console.log("ssss;"+usuario[usr[indice]].foto)
                $('#nombreUsuario').text(usuario[usr[indice]].nombre);
               // $('#nickName').text(usr[indice]);
                $('#foto').attr('src',usuario[usr[indice]].foto)
          })
    }



