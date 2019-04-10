'use strict';
const model_actividades = require('./actividades.model');

module.exports.registrar = (req, res) =>{
    let actividades_nuevo = new model_actividades(
        {
            
            pregunta : req.body.pregunta,
           


            
        }
    );
    
    actividades_nuevo.save(
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



module.exports.listar_actividades = (req ,res) =>{

model_actividades.find().then(
        function(actividades){
            if(actividades.length > 0){
                res.json(
                    {
                        success: true,
                        actividades: actividades
                    }
                )
            }else{
                res.json(
                    {
                        success: false,
                        actividades: 'No se encontraron actividades registradass'
                    }
                )
            }
        }

    )
};