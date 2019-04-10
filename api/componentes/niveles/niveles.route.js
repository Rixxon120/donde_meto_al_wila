'use strict';
const express = require('express');
const router =  express.Router();
const nivel_api = require('./niveles.api');

router.route('/registrar_nivel')
    .post(
        function(req, res){
            nivel_api.registrar_niveles(req, res);
        }
    );

router.route('/listar_nivel')
        .get(
            function(req, res){
                nivel_api.listar_niveles(req, res);
            }
        )




        

module.exports = router;



