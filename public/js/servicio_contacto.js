'use strict';


let registrar_contactos= (pprimer_nombre,psegundo_nombre,pprimer_apellido,psegundo_apellido, pcedula_pasaporte,pdepartamento,ptelefono,pfax,pextension,pemail) => {
  let request = $.ajax({
    url: "http://localhost:4000/api/registrar_contacto",
    method: "POST",
    data: {
      primer_nombre:pprimer_nombre,
     segundo_nombre:psegundo_nombre,
     primer_apellido:pprimer_apellido,
     segundo_apellido:psegundo_apellido,
     cedula_pasaporte:pcedula_pasaporte,
     departamento:pdepartamento,
     telefono:ptelefono,
     fax:pfax,
     extension:pextension,
     email:pemail
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
  });

  request.done(function (msg) {
    swal.fire({
      type: 'success',
      title: 'Listo',
      text: 'Un nuevo contacto ha sido registrado'
    });
    window.location.reload();
  });

  request.fail(function (jqXHR, textStatus) {
    swal.fire({
      type: 'error',
      title: 'El contacto no pudo ser registrado',
      text: 'Ocurrió un error inesperado, por favor intente de nuevo'
    });
  });
};