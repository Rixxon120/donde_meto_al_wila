'use strict';


const tabla = document.querySelector('#tbl_faq tbody');

let mostrar_datos = () =>{
    let actividades=listar_actividades();    
for(let i=0;i<actividades.length;i++){
let fila =tabla.insertRow();//crea el tr de la tabla

fila.insertCell().innerHTML=actividades[i]['pregunta'];



}



};

mostrar_datos();
