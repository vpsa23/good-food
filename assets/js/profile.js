
$(document).ready(function(){
   cargaDatos();

   
// realizamos la autenticación anónima (debe estar activada en la consola de Firebase)
  authService.signInAnonymously()
    .catch(function(error) {
      console.error('Detectado error de autenticación', error);
    });

  // asociamos el manejador de eventos sobre el INPUT FILE
    $('#foto').change, function(evento){
    evento.preventDefault();
    //Obteniendo el nick del input del formulario
    var nickName = $("#nick").val();
    //Creando una variable archivo para guardar la foto temporalmente
    var archivo  = evento.target.files[0];
    //Subir archivo con la foto y el nombre del usuario
    subirArchivo(archivo,nickName);
  };


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
      subirArchivo($('#foto').val(), $('#nick').val());
      var foto = rutaFoto;
  //var password2 = $('#password2').val();
  // Creo un objeto para almacenar los datos de un usuario
      var usuario = new Object();
      usuario.nombre=nombre;
      usuario.correo = email;
      usuario.clave= clave;
      usuario.foto= foto;
//llamo al campo referencia de usuarios de la base de datos que es nick 
// guardo con set el objeto usuario con todos los datos de los usuarios
      usuarios.child(nick).set(usuario);

});


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
              //  $('#nombreUsuario').text(usuario[usr[indice]].nombre);
               // $('#nickName').text(usr[indice]);
            //    $('#foto').attr('src',usuario[usr[indice]].foto)
                //console.log(usuario[usr[indice]].correo)
                $('#nombreUsuario').text(usuario[usr[indice]].nombre);
               // $('#nickName').text(usr[indice]);
                $('#fotoPerfil').attr('src',usuario[usr[indice]].foto)
          })
    }

});