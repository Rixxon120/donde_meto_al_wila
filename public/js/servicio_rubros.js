'use strict';


let registrar_rubro= (prubro)=>{
    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_rubro",
        method: "POST",
        data: {
            rubro : prubro,
           
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
      });
       
      request.done(function( msg ) {
        swal.fire({
            type: 'succes',
            title: 'El rubro fue enviado',
            text: 'Nos comunicaremos con usted tan pronto como sea posible'
        });
      });
       
      request.fail(function( jqXHR, textStatus ) {
        swal.fire({
            type: 'error',
            title: 'El rubro no pudo ser enviado',
            text: 'Ocurrio un error inesperado, por favor intente de nuevo.'
        });
      });
};
let listar_rubros = () => {
    let lista_rubros=[];
   
     let request = $.ajax({
       url: "http://localhost:4000/api/listar_rubros",
       method: "GET",
       data: {
       },
       dataType: "json",
       contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
       async : false
     });
   
     request.done(function (res) {
      lista_rubros=res.rubros;
       
     });
   
     request.fail(function (jqXHR, textStatus) {
       
     });
   return lista_rubros;
    
   };