'use strict';
const model_servicios = require('./servicios.model');

module.exports.registrar = (req, res) =>{
    let servicios_nuevo = new model_servicios(
        {
            
            pregunta : req.body.pregunta,
           


            
        }
    );
    
    servicios_nuevo.save(
        function(error){
            if(error){
                res.json(
                    {
                        success : false,
                        msg : `No se pudo guardar la información ocurrió el siguiente error ${error}`
                    }
                )
            }else{
                res.json(
                    {
                        success : true,
                        msg : `Registro exitoso`
                    }
                )
            }
        }

    );
};



module.exports.listar_servicios = (req ,res) =>{

model_servicios.find().then(
        function(servicios){
            if(servicios.length > 0){
                res.json(
                    {
                        success: true,
                        servicios: servicios
                    }
                )
            }else{
                res.json(
                    {
                        success: false,
                        servicios: 'No se encontraron usuarios registrados'
                    }
                )
            }
        }

    )
};