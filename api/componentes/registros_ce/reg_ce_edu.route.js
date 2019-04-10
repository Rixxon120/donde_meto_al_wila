'use strict';
const express = require('express');
const router =  express.Router();
const registros_api2 = require('./reg_ce_edu.api');


router.param('id_ce',function(req, res ,next,id_ce){
req.body.id_ce=id_ce;
next();
});

router.route('/registrar_ce')
    .post(
        function(req, res){
            registros_api2.registrar_cedu(req, res);
        }
    );

router.route('/listar_ce')
        .get(
            function(req, res){
                registros_api2.listar_ce(req, res);
            }
        );




        router.route('/validar_credenciales_dos')
        .post(
            function(req, res){
                registros_api2.validar(req, res);
            }
        );
        router.route('/buscar_ce/:id_ce')
        .get(
            function(req, res){
                registros_api2.buscar_por_id(req, res);
            }
        );




        

module.exports = router;