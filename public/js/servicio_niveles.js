'use strict';


let registrar_nivel = (pnombre, pPreescolar, pEducacion_Primaria, pEducacion_Secundaria,pEducacion_Diversificada) => {
  let request = $.ajax({
    url: "http://localhost:4000/api/registrar_nivel",
    method: "POST",
    data: {
      Nombre: pnombre,
      Preescolar: pPreescolar,

      Educacion_Primaria: pEducacion_Primaria,
     Educacion_Secundaria:  pEducacion_Secundaria,
     Educacion_Diversificada: pEducacion_Diversificada
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
  });

  request.done(function (msg) {
    swal.fire({
      type: 'success',
      title: 'Registro Exitoso',
      text: 'Esquema de niveles academicos registrado de forma exitosa'
    });
  });

  request.fail(function (jqXHR, textStatus) {
    swal.fire({
      type: 'error',
      title: 'El comentario no pude ser enviado',
      text: 'Ocurrió un error inesperado, por favor intente de nuevo'
    });
  });
};

let listar_nivel = () => {
  let lista_niveles = [];

  let request = $.ajax({
    url: "http://localhost:4000/api/listar_nivel",
    method: "GET",
    data: {
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    async : false
  });

  request.done(function (res) {
    lista_niveles = res.niveles;
    
  });

  request.fail(function (jqXHR, textStatus) {
    
  });
  return lista_niveles;
 
};