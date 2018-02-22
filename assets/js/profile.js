
$(document).ready(function(){
   cargaDatos();

   
// realizamos la autenticación anónima (debe estar activada en la consola de Firebase)
  authService.signInAnonymously()
    .catch(function(error) {
      console.error('Detectado error de autenticación', error);
    });



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