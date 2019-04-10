'use strict';
const mongoose = require('mongoose');

let schema_registros_ten = new mongoose.Schema(
    {
        posicion : {type : String, required : true},
        colegio : {type : String, required: true}
    
      
    }
);

module.exports = mongoose.model('registros_ten', schema_registros_ten);