'use strict';
const model_rubros = require('./rubros.model');

module.exports.registrar = (req, res) =>{
    let rubros_nuevo = new model_rubros(
        {
            rubro : req.body.rubro
            
           
        }
    );
    
    rubros_nuevo.save(
        function(error){
            if(error){
                res.json(
                    {
                        success : false,
                        msg : `No se pudo guardar el rubro ocurrió el siguiente error ${error}`
                    }
                )
            }else{
                res.json(
                    {
                        success : true,
                        msg : `Se registró el nuevo rubro de forma correcta`
                    }
                )
            }
        }

    );
};



module.exports.listar_todos = (req ,res) =>{

model_rubros.find().then(
        function(rubros){
            if(rubros.length > 0){
                res.json(
                    {
                        success: true,
                        rubros: rubros
                    }
                )
            }else{
                res.json(
                    {
                        success: false,
                        rubros: 'No se encontraron rubros registrados'
                    }
                )
            }
        }

    )
};