'use strict';

const tabla = document.querySelector('#tbl_rubros tbody');

let mostrar_datos = () =>{
    let rubros=listar_rubros();    
for(let i=0;i<rubros.length;i++){
    let fila =tabla.insertRow();//crea el tr de la tabla
fila.insertCell().innerHTML=rubros[i]['rubro'];



};
};


mostrar_datos();