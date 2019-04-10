'use strict';

const input_nivel = document.querySelector('#txt_nivel');
const input_tipo = document.querySelector('#txt_tipo');
const input_nombre_completo = document.querySelector('#txt_nombre');
const input_provincias = document.querySelector('#slt_provincias');
const input_cantones = document.querySelector('#slt_cantones');
const input_distritos = document.querySelector('#slt_distritos');
const input_num_año_fun = document.querySelector('#num_año_fun');
const input_ref_historica = document.querySelector('#txt_ref');

let get_param = (param) => {
    var url_string =  window.location.href;
    var url = new URL(url_string);
    var id = url.searchParams.get(param);//Toma el parámetro id_inmueble del url y retorna el valor
    return id;
};


let _id = get_param('id_ce');


let lista_ce = buscar_ce(_id);

let mostrar_datos = () =>{
    input_nombre.value = listar_ce[0]['nivel'];
    input_precio.value = listar_ce[0]['tipo'];
    input_precio.value = listar_ce[0]['nombre'];
    input_precio.value = listar_ce[0]['slt_provincias'];
    input_precio.value = listar_ce[0]['slt_cantones'];
    input_precio.value = listar_ce[0]['slt_disritos'];
    input_precio.value = listar_ce[0]['num_año_fun'];
    input_precio.value = listar_ce[0]['ref'];
};

let obtener_datos = () =>{
    let nivel = input_nivel.value;
    let tipo = input_tipo.value;
    let nombre_completo= input_nombre_completo.value;
    let provincia = slt_provincia.selectedOptions[0].textContent;
    let canton = slt_cantones.selectedOptions[0].textContent;

    listar_ce(nivel, tipo,nombre_completo, provincia, canton, _id); 
    window.location.href = 'perfil_ce.html';
    
};

