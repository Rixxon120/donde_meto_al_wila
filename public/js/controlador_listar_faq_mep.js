'use strict';

const tabla = document.querySelector('#tbl_mep tbody');

let mostrar_datos = () =>{
    let faq=listar_faq_mep();    
for(let i=0;i<faq.length;i++){
let fila =tabla.insertRow();//crea el tr de la tabla

fila.insertCell().innerHTML=faq[i]['pregunta'];
fila.insertCell().innerHTML=faq[i]['respuesta'];


}



};

mostrar_datos();
