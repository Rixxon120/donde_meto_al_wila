'use strict';

const tabla = document.querySelector('#tbl_usuarios tbody');

let mostrar_datos = () =>{
    let usuarios=listar_ce();    
    for(let i=0;i<usuarios.length; i++){
let fila =tabla.insertRow();//crea el tr de la tabla

fila.insertCell().innerHTML=usuarios[i]['identificacion'];
fila.insertCell().innerHTML=usuarios[i]['password'];
fila.insertCell().innerHTML=usuarios[i]['nivel'];
fila.insertCell().innerHTML=usuarios[i]['tipo'];
fila.insertCell().innerHTML=usuarios[i]['nombre_completo'];
fila.insertCell().innerHTML=usuarios[i]['provincias'];
fila.insertCell().innerHTML=usuarios[i]['cantones'];
fila.insertCell().innerHTML=usuarios[i]['distritos'];
fila.insertCell().innerHTML=usuarios[i]['num_año_fun'];
fila.insertCell().innerHTML=usuarios[i]['ref_historica'];
fila.insertCell().innerHTML=usuarios[i]['salud'];
fila.insertCell().innerHTML=usuarios[i]['muni'];
fila.insertCell().innerHTML=usuarios[i]['otro'];

};
};


mostrar_datos();