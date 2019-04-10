'use strict';


let registrar_actividades= (ppregunta)=>{
    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_actividades",
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
            title: 'Actividad no registrada',
            text: 'Ocurrio un error inesperado, por favor intente de nuevo.'
        });
      });
};
let listar_actividades = () => {
  let listar_actividad=[];
 
   let request = $.ajax({
     url: 'http://localhost:4000/api/consultar_actividades',
     type: "GET",
     data: {
     },
     dataType: "json",
     contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
     async : false
   });
 
   request.done(function (res) {
    listar_actividad=res.actividades;
     
   });
 
   request.fail(function (jqXHR, textStatus) {
     
   });
 return listar_actividad;
  
 };