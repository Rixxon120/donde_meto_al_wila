'use strict';
const mongoose = require('mongoose');

let schema_servicios = new mongoose.Schema(
    {
        pregunta : {type : String, required : true},
      
    
      
    }
);

module.exports = mongoose.model('servicios', schema_servicios);