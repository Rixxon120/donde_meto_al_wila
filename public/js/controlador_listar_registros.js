'use strict';

const tabla = document.querySelector('#tbl_usuarios tbody');

let mostrar_datos = () =>{
    let ce=listar_ce();    
    for(let i=0;i<ce.length; i++){
let fila =tabla.insertRow();//crea el tr de la tabla

fila.insertCell().innerHTML=ce[i]['nivel'];
fila.insertCell().innerHTML=ce[i]['tipo'];
fila.insertCell().innerHTML=ce[i]['ced'];
fila.insertCell().innerHTML=ce[i]['nombre_completo'];
fila.insertCell().innerHTML=ce[i]['provincias'];
fila.insertCell().innerHTML=ce[i]['cantones'];
fila.insertCell().innerHTML=ce[i]['distirtos'];
fila.insertCell().innerHTML=ce[i]['num_año_fun'];
fila.insertCell().innerHTML=ce[i]['ref_historica'];
fila.insertCell().innerHTML=ce[i]['salud'];
fila.insertCell().innerHTML=ce[i]['muni'];
fila.insertCell().innerHTML=ce[i]['otro'];

};
};


mostrar_datos();