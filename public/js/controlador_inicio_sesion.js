

'use strict';

const inputIdentificacion = document.querySelector('#txt_email');
const inputcontraseña = document.querySelector('#txt_pass');
const botonlogin = document.querySelector('#btn_enviar');
let conectado=sessionStorage.getItem('conectado');
let tipoUsuario=sessionStorage.getItem('tipo_usuario');



function obtenerDatos(){

let identificacion = inputIdentificacion.value;
let password = inputcontraseña.value;
let errorBlancos = validar(identificacion,password);

let usuarioAceptado=false;

if(!errorBlancos){
    usuarioAceptado = validar_credenciales(identificacion,password);
    
    if(usuarioAceptado){
        

 
            let conectados=conectado;
            if (conectados){
            
           
            
            window.location.href = 'index_pf.html';
        
        
                               
            }else{
                window.location.href = 'inicio-sesion.html';
             
            





            
            }
            
            


    }



    else{

alert("error");

    }

};






function validar(pidentificacion,pcontrasenna){
let error= false;

if(pidentificacion==''){
error=true;
inputIdentificacion.classList.add('error_input');

}else{

    inputIdentificacion.classList.remove('error_input');

}

if(pcontrasenna ==''){
    error=true;
    inputcontraseña.classList.add('error_input');
    
    }else{
    
        inputcontraseña.classList.remove('error_input');
    
    }


return error;

};








}

function obtenerDatos2(){

    let identificacion2 = inputIdentificacion.value;
    let password2 = inputcontraseña.value;
    let errorBlancos = validar(identificacion2,password2);
    
    let usuarioAceptado2=false;
    
    if(!errorBlancos){
        usuarioAceptado2 = validar_credencialesdos(identificacion2,password2);
        
        if(usuarioAceptado2){
            
            let conectadoss=conectado;
            if (conectadoss){
            
            
            
             window.location.href = 'index_ce.html';
                                          
             localStorage.setItem('usuarioce', identificacion2);
             
                               
            }else{
                window.location.href = 'inicio-sesion.html';
            
            
            }
    
    
        }
        else{

            alert("error");
            
                }
    
    };
    
    
    
    
    
    
    function validar(pidentificacion,pcontrasenna){
    let error= false;
    
    if(pidentificacion==''){
    error=true;
    inputIdentificacion.classList.add('error_input');
    
    }else{
    
        inputIdentificacion.classList.remove('error_input');
    
    }
    
    if(pcontrasenna ==''){
        error=true;
        inputcontraseña.classList.add('error_input');
        
        }else{
        
            inputcontraseña.classList.remove('error_input');
        
        }
    
    
    return error;
    
    };
    
    
    }

  






    botonlogin .addEventListener('click',obtenerDatos);
botonlogin .addEventListener('click',obtenerDatos2);


