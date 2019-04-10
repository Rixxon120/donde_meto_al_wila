'use strict';

const tabla = document.querySelector('#tbl_faq tbody');

let mostrar_datos = () =>{
    let noticias=listar_noticias();    
for(let i=0;i<noticias.length;i++){
let fila =tabla.insertRow();//crea el tr de la tabla

fila.insertCell().innerHTML=noticias[i]['pregunta'];



}



};

mostrar_datos();
