'use strict';
const model_contacto = require('./contacto.model');

module.exports.registrar = (req, res) =>{
    let contacto_nuevo = new model_contacto(
        {
            nombre : req.body.nombre,
            id : req.body.id,
            depar : req.body.depar,
            telefono : req.body.telefono,
            correo : req.body.correo,
            
           
        }
    );
    
    contacto_nuevo.save(
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



module.exports.listar_contacto = (req ,res) =>{

model_contacto.find().then(
        function(contacto){
            if(contacto.length > 0){
                res.json(
                    {
                        success: true,
                        contacto: contacto
                    }
                )
            }else{
                res.json(
                    {
                        success: false,
                        contacto: 'No se encontro un contacto registrado'
                    }
                )
            }
        }

    )
};