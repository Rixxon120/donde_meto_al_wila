'use strict';


const input_pregunta = document.querySelector('#txt_pregunta');
const input_respuesta = document.querySelector('#txt_respuesta');
const boton_registrar = document.querySelector('#btn_registrar');

let validar = () => {
    let error = false;
    
    

    

    if (input_pregunta.value == '') {
        error = true;
        input_pregunta.classList.add('error_input');
    } else {
        input_pregunta.classList.remove('error_input');
    }
   
    if (input_respuesta.value == '') {
        error = true;
        input_respuesta.classList.add('error_input');
    } else {
        input_respuesta.classList.remove('error_input');
    }




    return error;
};

let obtener_datos = () => {

    if (validar() == false) {
        // Se ejecuta solo si la validación no da error
        
        let pregunta = input_pregunta.value;
        let respuesta = input_respuesta.value;
        

        registrar_mep(pregunta, respuesta);
       
    
    } else {
        swal.fire({
            type: 'warning',
            title: 'Pregunta frecuente no registrada ',
            text: 'Por favor revise los campos resaltados'
        });
    }

};




boton_registrar.addEventListener('click', obtener_datos);