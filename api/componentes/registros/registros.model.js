'use strict';
const mongoose = require('mongoose');

let schema_registros = new mongoose.Schema(
    {
        pregunta : {type : String, required : true},
        respuesta : {type : String, required: true}
    
      
    }
);

module.exports = mongoose.model('registros', schema_registros);