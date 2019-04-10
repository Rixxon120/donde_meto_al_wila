'use strict';


let registrar_servicios= (ppregunta)=>{
    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_servicios",
        method: "POST",
        data: {
            
            pregunta : ppregunta,
            
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
      });
       
      request.done(function( msg ) {
        swal.fire({
            type: 'success',
            title: 'Registro Exitoso',
            text: 'Muchas gracias',
            
        });
        window.location.reload();
      });
       
      request.fail(function( jqXHR, textStatus ) {
        swal.fire({
            type: 'error',
            title: 'Pregunta frecuente CE no registrada',
            text: 'Ocurrio un error inesperado, por favor intente de nuevo.'
        });
      });
};
let listar_servicios= () => {
  let lista_servicios=[];
 
   let request = $.ajax({
     url: 'http://localhost:4000/api/consultar_servicios',
     type: "GET",
     data: {
     },
     dataType: "json",
     contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
     async : false
   });
 
   request.done(function (res) {
    lista_servicios=res.servicios;
     
   });
 
   request.fail(function (jqXHR, textStatus) {
     
   });
 return lista_servicios;
  
 };