'use strict';


let registrar_noticias= (ppregunta)=>{
    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_noticias",
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
            title: 'Noticia no registrada',
            text: 'Ocurrio un error inesperado, por favor intente de nuevo.'
        });
      });
};
let listar_noticias = () => {
  let listar_noticia=[];
 
   let request = $.ajax({
     url: 'http://localhost:4000/api/consultar_noticias',
     type: "GET",
     data: {
     },
     dataType: "json",
     contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
     async : false
   });
 
   request.done(function (res) {
    listar_noticia=res.noticias;
     
   });
 
   request.fail(function (jqXHR, textStatus) {
     
   });
 return listar_noticia;
  
 };