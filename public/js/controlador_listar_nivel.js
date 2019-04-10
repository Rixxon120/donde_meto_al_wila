'use strict';

const tabla = document.querySelector('#tabla_info tbody');

let mostrar_datos = () =>{
    let niveles = listar_nivel();
    for(let i = 0; i < niveles.length; i++){

        let fila = tabla.insertRow();// Crea el tr de la tabla

        fila.insertCell().innerHTML = niveles[i]['Nombre'];
        fila.insertCell().innerHTML = niveles[i]['Preescolar'];
        fila.insertCell().innerHTML = niveles[i]['Educacion_Primaria'];
        fila.insertCell().innerHTML = niveles[i]['Educacion_Secundaria'];
        fila.insertCell().innerHTML = niveles[i]['Educacion_Diversificada'];
    }; 

};


mostrar_datos();