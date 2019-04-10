'use strict';
const mongoose = require('mongoose');


let schema_niveles = new mongoose.Schema(
    {
        Nombre: {type : String, required : true},
        Preescolar: {type : String, required : true},
        Educacion_Primaria : {type : String, required: true},
        Educacion_Secundaria : {type: String, required: true},
        Educacion_Diversificada : {type: String, required: true}
    }
);

/*
const userSchema = new mongoose.Schema(
    {
local:{

email:String,
password:String

},
facebook:{
 id:String,
 token: String,
email: String,
password:String



},

google:{
    id:String,
    token: String,
    email: String,
    password:String
    
    
    
    },

});

userSchema.methods.generateHash= function (password){

    return bcrypt.hashSync(password, bcrypt.genSaltSync(8),null);
};

userSchema.methods.validatePassword= function (password) {
return bcrypt.compareSync(password,this.local.password);

};

module.exports = mongoose.model('User', userSchema);*/

module.exports = mongoose.model('Niveles3', schema_niveles);




