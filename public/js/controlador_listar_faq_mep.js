'use strict';

const tabla = document.querySelector('#tbl_mep tbody');

let mostrar_datos = () =>{
    let mep=listar_mep();    
for(let i=0;i<mep.length;i++){
let fila =tabla.insertRow();//crea el tr de la tabla

fila.insertCell().innerHTML=mep[i]['pregunta'];
fila.insertCell().innerHTML=mep[i]['respuesta'];


}



};

mostrar_datos();
