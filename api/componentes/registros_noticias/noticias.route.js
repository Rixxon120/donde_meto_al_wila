'use strict';
const express = require('express');
const router =  express.Router();
const noticias_api = require('./noticias.api');

const fs= require("fs");

router.route('/registrar_noticias')
    .post(
        function(req, res){
            noticias_api.registrar(req, res);
        }
    );

router.route('/consultar_noticias')
        .get(
            function(req, res){
                noticias_api.listar_noticias(req, res);
            }
        )

module.exports = router;