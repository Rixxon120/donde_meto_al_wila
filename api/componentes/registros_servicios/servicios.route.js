'use strict';
const express = require('express');
const router =  express.Router();
const servicios_api = require('./servicios.api');

const fs= require("fs");

router.route('/registrar_servicios')
    .post(
        function(req, res){
            servicios_api.registrar(req, res);
        }
    );

router.route('/consultar_servicios')
        .get(
            function(req, res){
                servicios_api.listar_servicios(req, res);
            }
        )

module.exports = router;