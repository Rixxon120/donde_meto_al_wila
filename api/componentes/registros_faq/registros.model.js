'use strict';
const mongoose = require('mongoose');

let schema_registros_faq = new mongoose.Schema(
    {
        pregunta : {type : String, required : true},
        respuesta : {type : String, required: true}
    
      
    }
);

module.exports = mongoose.model('registros_faq', schema_registros_faq);