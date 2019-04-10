'use strict';
const express = require('express');
const router =  express.Router();
const rubros_api = require('./rubros.api');

router.route('/registrar_rubro')
    .post(
        function(req, res){
            rubros_api.registrar(req, res);
        }
    );

router.route('/listar_rubros')
        .get(
            function(req, res){
                rubros_api.listar_todos(req, res);
            }
        )

module.exports = router;