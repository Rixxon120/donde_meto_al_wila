'use strict';


let registrar_faq= (ppregunta, prespuesta)=>{
    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_faq",
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
            title: 'Pregunta frecuente CE no registrada',
            text: 'Ocurrio un error inesperado, por favor intente de nuevo.'
        });
      });
};
let listar_faq = () => {
  let lista_faq=[];
 
   let request = $.ajax({
     url: 'http://localhost:4000/api/consultar_faq',
     type: "GET",
     data: {
     },
     dataType: "json",
     contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
     async : false
   });
 
   request.done(function (res) {
    lista_faq=res.registros;
     
   });
 
   request.fail(function (jqXHR, textStatus) {
     
   });
 return lista_faq;
  
 };