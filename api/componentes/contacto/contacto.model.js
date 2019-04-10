'use strict';
const mongoose = require('mongoose');

let schema_contacto = new mongoose.Schema(
    {
        nombre : {type : String, required : true},
        id : {type : Number, required : true},
        depar : {type : String, required : true},
        telefono : {type : Number, required : true},
        correo : {type : String, required : true},
      
    
      
    }
);

module.exports = mongoose.model('contacto', schema_contacto);