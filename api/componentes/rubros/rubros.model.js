'use strict';
const mongoose = require('mongoose');

let schema_rubros = new mongoose.Schema(
    {
        rubro : {type : String, required : true},
       
        
    }
);

module.exports = mongoose.model('rubros', schema_rubros);