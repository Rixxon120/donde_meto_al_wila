'use strict';
const mongoose = require('mongoose');

let schema_noticias = new mongoose.Schema(
    {
        pregunta : {type : String, required : true},
      
    
      
    }
);

module.exports = mongoose.model('noticias', schema_noticias);