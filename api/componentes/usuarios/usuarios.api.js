
'use strict';
const userModel = require('./usuarios.model');


module.exports.registrar = function(req, res) {
    let nuevo_usuario = new userModel(
        {
            tipo : req.body.tipo,
            identificacion : req.body.identificacion,
            nombre : req.body.nombre,
            sexo : req.body.sexo ,
            edad : req.body.edad,
            correo : req.body.correo,
            contrasenna: req.body.contrasenna
        }
    );
    
    nuevo_usuario.save(
        function(error){
            if(error == true){
                res.json(
                    {
                        success : false,
                        msg : 'No se pudo registrar el usuario,ucurrio el siguiente error'+ error
                    }
                );
            }else{
               
                res.json(
                    {
                        success : true,
                        msg : 'El usuario se registró de manera correcta'
                    });
                
            }
        }

    );
};



module.exports.validar = function(req ,res) {
    userModel.findOne({identificacion : req.body.identificacion}).then(
        function(usuario){
            if(usuario){
              if(usuario.contrasenna == req.body.contrasenna){
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