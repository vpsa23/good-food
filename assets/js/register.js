


$(document).ready(function(){
   

   
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




  // Rescatar información del formulario crear perfil
  $('#btn-sign-up').click(function(){
// haciendo referencia a el campo usuarios de la base de datos
    var usuarios = db.ref('usuarios');
      var nick = $('#nick').val();
      var nombre = $('#nombre').val();
      var correo = $('#correo').val();
      var clave = $('#clave').val();
  
// Creo un objeto para almacenar los datos de un usuario

  //var password2 = $('#password2').val();
  // Creo un objeto para almacenar los datos de un usuario
      var usuario = new Object();
      usuario.nick=nick;
      usuario.nombre=nombre;
      usuario.correo = correo;
      usuario.clave= clave;
      usuario.foto=rutaFoto;
//Llamo al campo referencia de usuarios de la base de datos que es nick 
// Guardo con set el objeto usuario con todos los datos de los usuarios
//llamo al campo referencia de usuarios de la base de datos que es nick 
// guardo con set el objeto usuario con todos los datos de los usuarios
      usuarios.child(nick).set(usuario);


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




