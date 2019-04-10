'use strict';
const input_nombre = document.querySelector('#txt_nombre_centro');


let listar_centros = listar_ce();

let mostrar_lista_centros = () => {

    let nombre = input_nombre.value;
    
    const tabla_centro = document.querySelector('#tbl_centro tbody');
    tabla_centro.innerHTML = '';


    for (let i = 0; i < listar_centros.length; i++) {
    
        if (listar_centros[i]['nombre_completo'].toLowerCase().includes(nombre.toLowerCase())||listar_centros[i]['tipo'].toLowerCase().includes(nombre.toLowerCase())||listar_centros[i]['provincias'].toLowerCase().includes(nombre.toLowerCase())||listar_centros[i]['cantones'].toLowerCase().includes(nombre.toLowerCase())||listar_centros[i]['distritos'].toLowerCase().includes(nombre.toLowerCase())) {
           
            let boton_link = document.createElement('a');
           boton_link.textContent = 'Ir a Perfil';
            
            boton_link.classList.add('boton_tabla');
            boton_link.href=  `perfil_ce.html?id_ce=${listar_centros[i]['_id']}`;

            let fila = tabla_centro.insertRow();

            fila.appendChild(boton_link);
            fila.insertCell().innerHTML = listar_centros[i]['nombre_completo'];
            fila.insertCell().innerHTML = listar_centros[i]['tipo'];
            fila.insertCell().innerHTML = listar_centros[i]['provincias'];
            fila.insertCell().innerHTML = listar_centros[i]['cantones'];
            fila.insertCell().innerHTML = listar_centros[i]['distritos'];
        }
    }
};

let mostrar_centros =()=> {
    let select_centros = document.querySelector('#nombre_centro');
    for (let i = 0; i < listar_centros.length; i++) {
        let nueva_opcion = new Option(listar_centros[i]['nombre_completo']);
        nueva_opcion.value = listar_centros[i]['nombre_completo'];
        select_centros.appendChild(nueva_opcion);
    }
};

mostrar_centros();
mostrar_lista_centros();
input_nombre.addEventListener('keyup', mostrar_lista_centros)
