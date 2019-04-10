'use strict';
const express = require('express');
const router =  express.Router();
const registros_api = require('./registros.api');

const fs= require("fs");

router.route('/registrar_mep')
    .post(
        function(req, res){
            registros_api.registrar(req, res);
        }
    );

router.route('/consultar_mep')
        .get(
            function(req, res){
                registros_api.listar_mep(req, res);
            }
        )

module.exports = router;