'use strict';
const express = require('express');
const router =  express.Router();
const registros_api = require('./registros.api');

const fs= require("fs");

router.route('/registrar_faq')
    .post(
        function(req, res){
            registros_api.registrar(req, res);
        }
    );

router.route('/consultar_faq')
        .get(
            function(req, res){
                registros_api.listar_faq(req, res);
            }
        )

module.exports = router;