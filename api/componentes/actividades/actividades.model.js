'use strict';
const mongoose = require('mongoose');

let schema_actividades = new mongoose.Schema(
    {
        pregunta : {type : String, required : true},
      
    
      
    }
);

module.exports = mongoose.model('actividades', schema_actividades);