'use strict';


let registrar_faq_mep= (ppregunta, prespuesta)=>{
    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_faq_mep",
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
      });
       
      request.fail(function( jqXHR, textStatus ) {
        swal.fire({
            type: 'error',
            title: 'Pregunta frecuente MEP no registrada',
            text: 'Ocurrio un error inesperado, por favor intente de nuevo.'
        });
      });
};
let listar_faq_mep= () => {
  let lista_faq_mep=[];
 
   let request = $.ajax({
     url: 'http://localhost:4000/api/consultar_faq_mep',
     type: "GET",
     data: {
     },
     dataType: "json",
     contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
     async : false
   });
 
   request.done(function (res) {
    listar_faq_mep=res.registros_mep;
     
   });
 
   request.fail(function (jqXHR, textStatus) {
     
   });
 return lista_faq_mep;
  
 };