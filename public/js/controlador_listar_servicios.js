'use strict';

const tabla = document.querySelector('#tbl_faq tbody');

let mostrar_datos = () =>{
    let servicios=listar_servicios();    
for(let i=0;i<servicios.length;i++){
let fila =tabla.insertRow();//crea el tr de la tabla

fila.insertCell().innerHTML=servicios[i]['pregunta'];



}



};

mostrar_datos();
