'use strict';

const tabla_oficial = document.querySelector('#tbl_utiles_oficial tbody');

let mostrar_utiles_oficial = () => {
    let util_oficial = listar_utiles_oficial();


    for (let i = 0; i < util_oficial.length; i++) {
        let fila = tabla_oficial.insertRow();

        let boton_mod = document.createElement("button");
        let txt_boton_mod = document.createTextNode("Modificar");
        boton_mod.appendChild(txt_boton_mod);
        boton_mod.classList.add('boton_tabla');

        let boton_el = document.createElement("button");
        let txt_boton_el = document.createTextNode("Eliminar");
        boton_el.appendChild(txt_boton_el);
        boton_el.classList.add('boton_tabla');

        fila.insertCell().innerHTML = util_oficial[i]['util'];
        fila.insertCell().innerHTML = util_oficial[i]['numero'];
        fila.insertCell().innerHTML = util_oficial[i]['descripcion'];
        fila.appendChild(boton_mod);
        fila.appendChild(boton_el);

    }
};

mostrar_utiles_oficial();

