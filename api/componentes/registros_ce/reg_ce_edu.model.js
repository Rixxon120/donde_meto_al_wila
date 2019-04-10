'use strict';
const mongoose = require('mongoose');

let schema_registros_ce = new mongoose.Schema(
    {
        identificacion : {type : String, required : true, unique: true},
        password: {type: String, required: true},
        nivel: {type: String, required: true},
        tipo : {type: String, required: true},
        nombre_completo: {type: String, required: true},
        provincias : {type: String, required: true},
        cantones : {type: String, required: true},
        distritos: {type: String, required: true},
        num_año_fun: {type: Number, required: true},
        ref_historica: {type: String, required: true}
       
        
    }
);


module.exports = mongoose.model('ppgistrosce', schema_registros_ce);