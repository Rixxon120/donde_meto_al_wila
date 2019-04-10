'use strict';


function obtener_localstorage(){

const usuarioca = localStorage.getItem('usuarioce');

if(usuarioca){

    document.getElementById("usu").value= usuarioca ;

}


}

