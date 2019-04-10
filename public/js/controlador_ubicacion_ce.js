'use strict';

const select_provincias_ce = document.querySelector('#slt_provincias');
const select_cantones_ce = document.querySelector('#slt_cantones');
const select_distritos_ce = document.querySelector('#slt_distritos');
let llenar_provincias_ce = () =>{
    
    for(let i = 0; i < provincias.length; i++){
        let nuevaOpcion = new Option(provincias[i]['nombre']);
        nuevaOpcion.value = provincias[i]['idProvincia'];
        select_provincias_ce.appendChild(nuevaOpcion);
    }
};

let llenar_cantones_ce = () =>{
    let provincia = select_provincias_ce.value;
    select_cantones_ce.innerHTML = '';
    
    for(let i = 0; i < cantones.length; i++){
        if(provincia == cantones[i]['Provincia_idProvincia']){
            let nuevaOpcion = new Option(cantones[i]['nombre']);
            nuevaOpcion.value = cantones[i]['idCanton'];
            select_cantones_ce.appendChild(nuevaOpcion);
        }
        
    }
};

let llenar_distritos_ce = () =>{
    
    let canton = select_cantones_ce.value;
    select_distritos_ce.innerHTML = '';
    
    for(let i = 0; i < distritos.length; i++){
        if(canton == distritos[i]['Canton_idCanton'] ){
            let nuevaOpcion = new Option(distritos[i]['nombre']);
            nuevaOpcion.value = distritos[i]['idDistrito'];
            select_distritos_ce.appendChild(nuevaOpcion);
        }
        
    }
    
};



select_provincias_ce.addEventListener('change', llenar_cantones_ce);

llenar_provincias_ce();
select_cantones_ce.addEventListener('change', llenar_distritos_ce);
llenar_cantones_ce();
