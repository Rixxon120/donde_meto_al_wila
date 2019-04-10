'use strict';
const mongoose = require('mongoose');

let user_schema = new mongoose.Schema(
    {
        tipo : {type : String, required : true},
        identificacion : {type : String, unique : true, required: true},
        nombre : {type : String, required : true},
        sexo : {type: String, required: true},
        edad : {type: Number, required: true},
        correo : {type: String, unique: true, required: true},
        contrasenna: {type: String, required: true}
    }
);

module.exports = mongoose.model('stros_pf', user_schema);