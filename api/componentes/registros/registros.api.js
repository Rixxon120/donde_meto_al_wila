'use strict';
const model_registros = require('./registros.model');

module.exports.registrar = (req, res) =>{
    let registros_nuevo = new model_registros(
        {
            
            nombre : req.body.nombre,
            identificacion : req.body.identificacion,
            nacionalidad : req.body.nacionalidad,
            provincias : req.body.provincias,
            cantones : req.body.cantones,
            distritos : req.body.distritos,
            hijos : req.body.hijos,
            correo : req.body.correo,
            password: req.body.password,
            tipo1: req.body.tipo1,
            foto : req.body.foto

            
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
                        msg : `Se registró sus datos de forma correcta`
                    }
                )
            }
        }

    );
};



module.exports.listar_todos = (req ,res) =>{

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


module.exports.validar = function(req ,res) {
    model_registros .findOne({identificacion : req.body.identificacion}).then(
        function(usuario){
            if(usuario){
              if(usuario.password == req.body.password){
                  res.json({
   success:true,
   usuario :usuario


                  });
                   }else{

                    res.json({
                  success:false
            

                    });
                  

              }
            }else{
                res.json({
success:false,
msg: 'el usuario no existe'
                });
                }
            }
    )
   };