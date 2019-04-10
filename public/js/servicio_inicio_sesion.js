
'use strict';


function  validar_credenciales (pidentificacion, ppassword) {
    let respuesta='';
  let peticion = $.ajax({
    url: 'http://localhost:4000/api/validar_credenciales',
    type: 'post',
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    dataType: "json",
    async:false,
    data: {
        identificacion:pidentificacion,
        password: ppassword

   
    }
    
    
  });

  peticion.done(function (response) {
   respuesta=response;
   sessionStorage.setItem('conectado',response.success);
   sessionStorage.setItem('tipo_usuario',response.usuario.tipo);

  });

  peticion.fail(function(response){
respuesta=response;
  });
return respuesta;
  };

  function  validar_credencialesdos(pidentificacion, ppassword) {
    let respuesta='';
  let peticion = $.ajax({
    url: 'http://localhost:4000/api/validar_credenciales_dos',
    type: 'post',
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    dataType: "json",
    async:false,
    data: {
        identificacion:pidentificacion,
        password: ppassword

   
    }
    
    
  });

  peticion.done(function (response) {
   respuesta=response;
   sessionStorage.setItem('conectado',response.success);
   sessionStorage.setItem('tipo_usuario',response.usuario2.tipo);

  });

  peticion.fail(function(response){
respuesta=response;
  });
return respuesta;
  };
