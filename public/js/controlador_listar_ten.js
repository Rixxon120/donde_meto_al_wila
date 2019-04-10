'use strict';

const tabla = document.querySelector('#tbl_ten tbody');

let mostrar_datos = () =>{
    let ten=listar_ten();    
for(let i=0;i<ten.length;i++){
let fila =tabla.insertRow();//crea el tr de la tabla

fila.insertCell().innerHTML=ten[i]['posicion'];
fila.insertCell().innerHTML=ten[i]['colegio'];


}



};

mostrar_datos();
