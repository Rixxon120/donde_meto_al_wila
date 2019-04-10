'use strict';


const input_pregunta = document.querySelector('#txt_pregunta');
const boton_registrar = document.querySelector('#btn_registrar');

let validar = () => {
    let error = false;
    
    

    

    if (input_pregunta.value == '') {
        error = true;
        input_pregunta.classList.add('error_input');
    } else {
        input_pregunta.classList.remove('error_input');
    }
   
   




    return error;
};

let obtener_datos = () => {

    if (validar() == false) {
        // Se ejecuta solo si la validación no da error
        
        let pregunta = input_pregunta.value;

        

        registrar_servicios(pregunta);
       
    
    } else {
        swal.fire({
            type: 'warning',
            title: 'Servicio academico no registrado ',
            text: 'Por favor revise los campos resaltados'
        });
    }

};




boton_registrar.addEventListener('click', obtener_datos);