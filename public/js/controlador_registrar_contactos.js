'use strict';

const input_primer_nombre = document.querySelector('#txt_primer_nombre');
const input_segundo_nombre = document.querySelector('#txt_segundo_nombre');
const input_primer_apellido = document.querySelector('#txt_primer_apellido');
const input_segundo_apellido = document.querySelector('#txt_segundo_apellido');
const input_cedula_pasaporte = document.querySelector('#txt_cedula_pasaporte');
const input_departamento = document.querySelector('#txt_departamento');
const input_telefono = document.querySelector('#txt_telefono');
const input_fax = document.querySelector('#txt_fax');
const input_extension = document.querySelector('#txt_extension');
const input_email = document.querySelector('#txt_email');
const boton_registrar = document.querySelector('#btn_registrar');


let validar = () => {
    let error = false;

    let exp_numeros = /^[0-9]+$/;
    let exp_nombres = /^[a-zA-ZáéíóúñÑüÜ ]+$/;
    let exp_correo = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/;

    if (input_primer_nombre.value == '' || exp_nombres.test(input_primer_nombre.value)==false) {
        error = true;
        input_primer_nombre.classList.add('error_input');
    } else {
        input_primer_nombre.classList.remove('error_input');
    }
    if (input_primer_apellido.value == '' || exp_nombres.test(input_primer_apellido.value)==false) {
        error = true;
        input_primer_apellido.classList.add('error_input');
    } else {
        input_primer_apellido.classList.remove('error_input');
    }
    if (input_cedula_pasaporte.value == '' || exp_numeros.test(input_cedula_pasaporte.value)==false|| input_cedula_pasaporte.value <0) {
        error = true;
        input_cedula_pasaporte.classList.add('error_input');
    } else {
        input_cedula_pasaporte.classList.remove('error_input');
    }
    if (input_departamento.value == '' || exp_nombres.test(input_departamento.value)==false) {
        error = true;
        input_departamento.classList.add('error_input');
    } else {
        input_departamento.classList.remove('error_input');
    }
    if (input_telefono.value == '' || exp_numeros.test(input_telefono.value)==false|| input_telefono.value <0) {
        error = true;
        input_telefono.classList.add('error_input');
    } else {
        input_telefono.remove('error_input');
    }
    if (input_fax.value == '' || exp_numeros.test(input_fax.value)==false|| input_fax.value <0) {
        error = true;
        input_fax.classList.add('error_input');
    } else {
        input_fax.classList.remove('error_input');
    }
    if (input_email.value == '' || exp_correo.test(input_email.value)==false) {
        error = true;
        input_email.classList.add('error_input');
    } else {
        input_email.classList.remove('error_input');
    }



    return error;
};

let obtener_datos = () => {

    if (validar() == false) {
        // Se ejecuta solo si la validación no da error
        let primer_nombre = input_primer_nombre.value;
        let segundo_nombre = input_segundo_nombre.value;
        let primer_apellido = input_primer_apellido.value;
        let segundo_apellido = input_segundo_apellido.value;
        let cedula_pasaporte = input_cedula_pasaporte.value;
        let departamento = input_departamento.value;
        let telefono=input_telefono.value;
        let fax=input_fax.value;
        let extension = input_extension.value;
        let email = input_email.value;


        registrar_contactos(primer_nombre,segundo_nombre,primer_apellido,segundo_apellido,cedula_pasaporte,departamento,telefono,fax,extension,email);

    } else {
        swal.fire({
            type: 'warning',
            title: 'Este contacto no fue registrado',
            text: 'Por favor revise los campos resaltados'
        });
    }

};



boton_registrar.addEventListener('click', obtener_datos);