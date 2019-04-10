'use strict';

let conectado=sessionStorage.getItem('conectado');
let tipoUsuario=sessionStorage.getItem('tipo_usuario');
let botonCerrar = document.querySelector('#btn_cerrar');




function cerrar_sesion(){

sessionStorage.clear();
window.location.href = 'inicio-sesion.html';

}

botonCerrar.addEventListener('click',cerrar_sesion);
