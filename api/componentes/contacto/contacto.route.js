'use strict';
const express = require('express');
const router =  express.Router();
const contacto_api = require('./contacto.api');

const fs= require("fs");

router.route('/registrar_contacto')
    .post(
        function(req, res){
            contacto_api.registrar(req, res);
        }
    );

router.route('/consultar_contacto')
        .get(
            function(req, res){
                contacto_api.listar_contacto(req, res);
            }
        )

module.exports = router;