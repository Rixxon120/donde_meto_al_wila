'use strict';

const input_rubro = document.querySelector('#txt_rubro');
const boton_registrar = document.querySelector('#btn_registrar');


let validar = () => {
    let error = false;
    

    if (input_rubro.value == '') {
        error = true;
        input_rubro.classList.add('error_input');
    } else {
        input_rubro.classList.remove('error_input');
    }



    return error;
};

let obtener_datos = () => {

    if (validar() == false) {
        // Se ejecuta solo si la validación no da error
        let rubro = input_rubro.value;
        

        registrar_rubro(rubro);
       
    
    } else {
        swal.fire({
            type: 'warning',
            title: 'El rubro no fue enviado',
            text: 'Por favor revise los campos resaltados'
        });
    }

};




boton_registrar.addEventListener('click', obtener_datos);