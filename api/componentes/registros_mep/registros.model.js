'use strict';
const mongoose = require('mongoose');

let schema_registros_mep = new mongoose.Schema(
    {
        pregunta : {type : String, required : true},
        respuesta : {type : String, required: true}
    
      
    }
);

module.exports = mongoose.model('registros_mep', schema_registros_mep);