'use strict';

const input_nivel = document.querySelector('#txt_nivel');
const input_tipo = document.querySelector('#txt_tipo');
const input_ced = document.querySelector('#txt_ced');
const input_nombre_completo = document.querySelector('#txt_nombre');
const input_provincias = document.querySelector('#slt_provincias');
const input_cantones = document.querySelector('#slt_cantones');
const input_distritos = document.querySelector('#slt_distritos');
const input_num_año_fun = document.querySelector('#num_año_fun');
const input_ref_historica = document.querySelector('#txt_ref');
const input_salud = document.querySelector('#img_salud');
const input_muni = document.querySelector('#img_muni');
const input_otro = document.querySelector('#img_otro');
const boton_enviar = document.querySelector('#btn_registrar');

let validar = () => {
    let error = false;
    

    if (input_nivel.value == '') {
        error = true;
        input_nivel.classList.add('error_input');
    } else {
        input_nivel.classList.remove('error_input');
    }

    if (input_tipo.value == '') {
        error = true;
        input_tipo.classList.add('error_input');
    } else {
        input_tipo.classList.remove('error_input');
    }

    if (input_ced.value == '') {
        error = true;
        input_ced.classList.add('error_input');
    } else {
        input_ced.classList.remove('error_input');
    }

    if (input_nombre_completo.value == '') {
        error = true;
        input_nombre_completo.classList.add('error_input');
    } else {
        input_nombre_completo.classList.remove('error_input');
    }

    if (input_provincias.value == '') {
        error = true;
        input_provincias.classList.add('error_input');
    } else {
        input_provincias.classList.remove('error_input');
    }

    if (input_cantones.value == '') {
        error = true;
        input_cantones.classList.add('error_input');
    } else {
        input_cantones.classList.remove('error_input');
    }

    if (input_distritos.value == '') {
        error = true;
        input_distritos.classList.add('error_input');
    } else {
        input_distritos.classList.remove('error_input');
    }


    if (input_num_año_fun.value == '') {
        error = true;
        input_num_año_fun.classList.add('error_input');
    } else {
        input_num_año_fun.classList.remove('error_input');
    }

    if (input_ref_historica.value == '') {
        error = true;
        input_ref_historica.classList.add('error_input');
    } else {
        input_ref_historica.classList.remove('error_input');
    }

    return error;
};

let obtener_datos = () => {

    if (validar() == false) {
        
        let tipo = input_tipo.value;
        let nivel= input_nivel.value;
        let ced = input_ced.value;
        let nombre_completo = input_nombre_completo.value;
        let provincias = input_provincias.value;
        let cantones = input_cantones.value;
        let distritos = input_distritos.value;
        let num_año_fun = input_num_año_fun.value;
        let ref_historica = input_ref_historica.value;
        let salud = input_salud.value;
        let muni = input_muni.value;
        let otro = input_otro.value;

        registrar_ce(tipo, nivel, ced, nombre_completo, provincias, cantones, distritos, num_año_fun, ref_historica, salud, muni, otro );
        
       
        

    } else {
        swal.fire({
            type: 'warning',
            title: 'La información no fue registrada',
            text: 'Por favor revise los campos resaltados'
        });
    }

};




boton_enviar.addEventListener('click', obtener_datos);