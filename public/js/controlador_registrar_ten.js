'use strict';


const input_posicion = document.querySelector('#txt_posicion');
const input_colegio = document.querySelector('#txt_colegio');
const boton_registrar = document.querySelector('#btn_registrar');

let validar = () => {
    let error = false;
    
    

    

    if (input_posicion.value == '') {
        error = true;
        input_posicion.classList.add('error_input');
    } else {
        input_posicion.classList.remove('error_input');
    }
   
    if (input_colegio.value == '') {
        error = true;
        input_colegio.classList.add('error_input');
    } else {
        input_colegio.classList.remove('error_input');
    }




    return error;
};

let obtener_datos = () => {

    if (validar() == false) {
        // Se ejecuta solo si la validación no da error
        
        let posicion = input_posicion.value;
        let colegio = input_colegio.value;
        

        registrar_ten(posicion, colegio);
       
    
    } else {
        swal.fire({
            type: 'warning',
            title: 'Pregunta frecuente no registrada ',
            text: 'Por favor revise los campos resaltados'
        });
    }

};




boton_registrar.addEventListener('click', obtener_datos);