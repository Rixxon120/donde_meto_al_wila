'use strict';
const express = require('express');
const router =  express.Router();
const actividades_api = require('./actividades.api');

const fs= require("fs");

router.route('/registrar_actividades')
    .post(
        function(req, res){
            actividades_api.registrar(req, res);
        }
    );

router.route('/consultar_actividades')
        .get(
            function(req, res){
                actividades_api.listar_actividades(req, res);
            }
        )

module.exports = router;