'use strict';
const model_registros = require('./reg_ce_edu.model');

module.exports.registrar_cedu = (req, res) =>{
    let registros_nuevo = new model_registros(
        {
            
            
            identificacion: req.body.identificacion,
            password: req.body.password,
            nivel: req.body.nivel,
            tipo : req.body.tipo,
            nombre_completo: req.body.nombre_completo,
            provincias : req.body.provincias,
            cantones : req.body.cantones,
            distritos: req.body.distritos,
            num_año_fun: req.body.num_año_fun,
            ref_historica: req.body.ref_historica
           

            
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



module.exports.listar_ce = (req ,res) =>{

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
        function(usuario2){
            if(usuario2){
              if(usuario2.password == req.body.password){
                  res.json({
   success:true,
   usuario2 :usuario2


                  });
                   }
                   else{

                    

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
   module.exports.buscar_por_id = function(req,res){
    model_registros.find({_id :req.body.id_ce }).then(
        function(registro){
            if(registro){
                res.json(
                    {
                        success: true,
                        registro: registro
                    }
                )
            }else{
                res.json(
                    {
                        success: false,
                        registro: 'No se encontraron usuarios registrados'
                    }
                )
            }
        }

    )

   };