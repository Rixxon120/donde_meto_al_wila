'use strict';


let registrar_usuario= (pnombre, pidentificacion, pnacionalidad, pprovincias, pcantones, pdistritos, phijos, pcorreo,ppassword,ptipo1, pfoto)=>{
    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_usuario",
        method: "POST",
        data: {
            
            nombre : pnombre,
            identificacion : pidentificacion,
            nacionalidad : pnacionalidad,
            provincias: pprovincias,
            cantones: pcantones,
            distritos: pdistritos,
            hijos: phijos,
            correo: pcorreo,
            password:ppassword,
            tipo1: ptipo1,
            foto: pfoto
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
      });
       
      request.done(function( msg ) {
        swal.fire({
            type: 'success',
            title: 'El usuario ha sido registrado',
            text: 'Muchas gracias'
        });
      
        window.location.reload();
      });
       
      request.fail(function( jqXHR, textStatus ) {
        swal.fire({
            type: 'error',
            title: 'El usuario no pudo ser registrada ',
            text: 'Ocurrio un error inesperado, por favor intente de nuevo.'
        });
      });
};
let listar_usuarios = () => {
    let lista_usuarios=[];
   
    let request = $.ajax({
       url: "http://localhost:4000/api/listar_usuarios",
       method: "GET",
       data: {
       },
       dataType: "json",
       contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
       async : false
     });
   
     request.done(function (res) {
      
      lista_usuarios=res.registros;
      
     });
     
     request.fail(function (jqXHR, textStatus) {
      
     });
     
   return lista_usuarios;
    
   };