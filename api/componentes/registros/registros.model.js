'use strict';
const mongoose = require('mongoose');

let schema_registros = new mongoose.Schema(
    {
        nombre : {type : String, required: true},
        identificacion : {type : String, required : true, unique: true},
        nacionalidad : {type : String, required: true},
        provincias : {type : String, required: true},
        cantones : {type : String, required: true},
        distritos : {type : String, required:true},
        hijos: {type: Number},
        correo : {type: String, required: true},
        password : {type: String, required: true},
        tipo1 : {type : String, required:true},

        foto :{type: String}
        
    }
);
var Schema = mongoose.Schema;

var img_schema= new Schema({
    title: {type: String, require: false},
    creator: {type: Schema.Types.ObjectId, ref: "User"},
    extension: { type: String, require: true}
});
var imagenes= mongoose.model("imagenes",img_schema);
module.exports= imagenes;

module.exports = mongoose.model('registros', schema_registros);