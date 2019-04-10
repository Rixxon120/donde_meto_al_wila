

'use strict';
const express = require('express');
const router =  express.Router();
const user_api = require('./usuarios.api');

router.route('/registrar_usuario')
    .post(
        function(req, res){
            user_api.registrar(req, res);
        }
    );

router.route('/validar_credenciales')
        .post(
            function(req, res){
                user_api.validar(req, res);
            }
        );




        

module.exports = router;
