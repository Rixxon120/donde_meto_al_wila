'use strict';
const model_registros_mep = require('./registros_mep.model');

module.exports.registrar_mep = (req, res) =>{
    let registros_nuevo_mep = new model_registros_mep(
        {
            
            pregunta : req.body.pregunta,
            respuesta : req.body.respuesta,


            
        }
    );
    
    registros_nuevo_mep.save(
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



module.exports.listar_faq_mep = (req ,res) =>{

model_registros_mep.find().then(
        function(registros_mep){
            if(registros_mep.length > 0){
                res.json(
                    {
                        success: true,
                        registros_mep: registros_mep
                    }
                )
            }else{
                res.json(
                    {
                        success: false,
                        registros_mep: 'No se encontraron usuarios registrados'
                    }
                )
            }
        }

    )
};