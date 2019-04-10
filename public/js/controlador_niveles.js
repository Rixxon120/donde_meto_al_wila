'use strict';



const input_nombre_cedu = document.querySelector('#txt_nombre_edu');
const input_prees = document.querySelector('#opt_pre');
const input_edupri = document.querySelector('#opt_edu_pri');
const input_edu_secu = document.querySelector('#opt_edu_secu');
const input_edu_div = document.querySelector('#opt_edu_div');

//const fieldset_sexo = document.querySelector('#fieldset_sexo');

const boton_enviar = document.querySelector('#btn_enviar');

let validar = () => {
    let error = false;
    

    
    if (input_nombre_cedu.value == '') {
        error = true;
        input_nombre_cedu.classList.add('error_input');
    } else {
        input_nombre_cedu.classList.remove('error_input');
    }

    

    if (input_prees.value == '') {                
        error = true;
        input_prees.classList.add('error_input');     
        
    } else {
        input_prees.classList.remove('error_input');
    }

    if (input_edupri.value == '') {   
        error = true;
        input_edupri.classList.add('error_input');
    } else {
        input_edupri.classList.remove('error_input');
    }

    if (input_edu_secu.value == '') {  
        error = true;   
        input_edu_secu.classList.add('error_input');
    } else {
        input_edu_secu.classList.remove('error_input');
    }


    if (input_edu_secu.value == '') {   
        error = true;
        input_edu_secu.classList.add('error_input');
    } else {
        input_edu_secu.classList.remove('error_input');
    }

    
    if (input_edu_div.value == '') {     
        error = true;
        input_edu_div.classList.add('error_input');
    } else {
        input_edu_div.classList.remove('error_input');
    }








    return error;
};

let obtener_datos = () => {

    if (validar() == false) {
        // Se ejecuta solo si la validación no da error
        let Nombre = input_nombre_cedu.value;
        let Preescolar = input_prees.value;

        let Educacion_Primaria =input_edupri.value;
        let Educacion_Secundaria = input_edu_secu.value;
        let Educacion_Diversificada = input_edu_secu.value;

        registrar_nivel(Nombre, Preescolar,Educacion_Primaria, Educacion_Secundaria, Educacion_Diversificada);
        
       
        

    } else {
        swal.fire({
            type: 'warning',
            title: 'El comentario no fue enviado',
            text: 'Por favor revise los campos resaltados'
        });
    }

};




boton_enviar.addEventListener('click', obtener_datos);