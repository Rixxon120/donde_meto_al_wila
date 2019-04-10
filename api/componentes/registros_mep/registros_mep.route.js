'use strict';
const express = require('express');
const router =  express.Router();
const registros_mep_api = require('./registros_mep.api');

const fs= require("fs");

router.route('/registrar_faq_mep')
    .post(
        function(req, res){
            registros_mep_api.registrar_mep(req, res);
        }
    );

router.route('/consultar_faq_mep')
        .get(
            function(req, res){
                registros_mep_api.listar_faq_mep(req, res);
            }
        )

module.exports = router;