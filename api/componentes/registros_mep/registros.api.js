'use strict';
const model_registros = require('./registros.model');

module.exports.registrar = (req, res) =>{
    let registros_nuevo = new model_registros(
        {
            
            pregunta : req.body.pregunta,
            respuesta : req.body.respuesta,


            
        }
    );
    
    registros_nuevo.save(
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



module.exports.listar_mep = (req ,res) =>{

model_registros.find().then(
        function(registros){
            if(registros.length > 0){
                res.json(
                    {
                        success: true,
                        registros: registros
                    }
                )
            }else{
                res.json(
                    {
                        success: false,
                        registros: 'No se encontraron usuarios registrados'
                    }
                )
            }
        }

    )
};