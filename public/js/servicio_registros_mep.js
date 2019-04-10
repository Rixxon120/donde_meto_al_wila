'use strict';


let registrar_mep= (ppregunta, prespuesta)=>{
    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_mep",
        method: "POST",
        data: {
            
            pregunta : ppregunta,
            respuesta : prespuesta
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
      });
       
      request.done(function( msg ) {
        swal.fire({
            type: 'success',
            title: 'Registro Exitoso',
            text: 'Muchas gracias'
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
let listar_mep = () => {
  let lista_mep=[];
 
   let request = $.ajax({
     url: 'http://localhost:4000/api/consultar_mep',
     type: "GET",
     data: {
     },
     dataType: "json",
     contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
     async : false
   });
 
   request.done(function (res) {
    lista_mep=res.registros;
     
   });
 
   request.fail(function (jqXHR, textStatus) {
     
   });
 return lista_mep;
  
 };