'use strict';


let registrar_ce= (pced, ppassword1, pnivel, ptipo, pnombre_completo, pprovincias, pcantones, pdistritos, pnum_año_fun, pref_historica)=>{
    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_ce",
        method: "POST",
        data: {
            
          identificacion: pced,
          password: ppassword1,
          nivel: pnivel,
          tipo : ptipo,
          nombre_completo: pnombre_completo,
          provincias : pprovincias,
          cantones : pcantones,
          distritos: pdistritos,
          num_año_fun: pnum_año_fun,
          ref_historica: pref_historica,
        
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
      });
       
      request.done(function( msg ) {
        swal.fire({
            type: 'success',
            title: 'El Centro Educativo ha sido registrado',
            text: 'Muchas gracias'
        });
        window.location.reload();
      });
       
      request.fail(function( jqXHR, textStatus ) {
        swal.fire({
            type: 'error',
            title: 'El Centro Educativo no pudo ser registrado',
            text: 'Ocurrio un error inesperado, por favor intente de nuevo.'
        });
      });
};
let listar_ce = () => {
    let lista_ce=[];
   
    let request = $.ajax({
       url: "http://localhost:4000/api/listar_ce",
       method: "GET",
       data: {
       },
       dataType: "json",
       contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
       async : false
     });
   
     request.done(function (res) {
      
      lista_ce=res.registros;
      
     });
     
     request.fail(function (jqXHR, textStatus) {
      
     });
     
   return lista_ce;
    
   };

   let buscar_ce = (id_ce) => {
    let lista_ce=[];
   
    let request = $.ajax({
       url: "http://localhost:4000/api/buscar_ce/"+ id_ce,
       method: "GET",
       data: {
       },
       dataType: "json",
       contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
       async : false
     });
   
     request.done(function (res) {
      
      lista_ce=res.registro;
      
     });
     
     request.fail(function (jqXHR, textStatus) {
      
     });
     
   return lista_ce;
    
   };