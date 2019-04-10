'use strict';
const model_noticias = require('./noticias.model');

module.exports.registrar = (req, res) =>{
    let noticias_nuevo = new model_noticias(
        {
            
            pregunta : req.body.pregunta,
           


            
        }
    );
    
    noticias_nuevo.save(
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



module.exports.listar_noticias = (req ,res) =>{

model_noticias.find().then(
        function(noticias){
            if(noticias.length > 0){
                res.json(
                    {
                        success: true,
                        noticias: noticias
                    }
                )
            }else{
                res.json(
                    {
                        success: false,
                        niveles: 'No se encontraron noticias academicos registrados'
                    }
                )
            }
        }

    )
};