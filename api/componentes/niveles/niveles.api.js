'use strict';
const model_niveles = require('./niveles.model');


module.exports.registrar_niveles = (req, res) =>{
    let niveles_nuevo = new model_niveles(
        {
            Nombre: req.body.Nombre,
            Preescolar : req.body.Preescolar,
            Educacion_Primaria: req.body.Educacion_Primaria,
            Educacion_Secundaria : req.body.Educacion_Secundaria,
            Educacion_Diversificada: req.body.Educacion_Diversificada
        }
    );
    
    niveles_nuevo.save(
        function(error){
            if(error){
                res.json(
                    {
                        success : false,
                        msg : `No se pudo guardar el comentario ocurrió el siguiente error ${error}`
                    }
                )
            }else{
               
                res.json(
                    {
                        success : true,
                        msg : `Se registró el comentario de forma correcta`
                    }
                )
            }
        }

    );
};



module.exports.listar_niveles = (req ,res) =>{
    model_niveles.find().then(
        function(niveles){
            if(niveles.length > 0){
                res.json(
                    {
                        success: true,
                        niveles: niveles
                    }
                )
            }else{
                res.json(
                    {
                        success: false,
                        niveles: 'No se encontraron comentarios'
                    }
                )
            }
        }

    )
};

/*
module.exports=(app, passport)=>{
app.get('/',(req,res) => {

res.render('index');

});

app.get('/login',(req,res)=>{

    res.render('login',{
    message:req.flash('loginMessage')
});
});

app.post('/login',passport.authenticate('local-login',{
    successRedirect:'/profile',
failureRedirect:'/login',
failtureFlash:true
    

    }));

    /

app.get('/signup',(req,res)=>{
res.render('/signup',{

    message:req.flash('signupMessage')
});
});



app.post('/signup',passport.authenticate('local-signup',{
successRedirect:'/profile',
failureRedirect:'/signup',
failtureFlash:true


}));
app.get('/profile',isLoggedIn,(req,res)=>{
res.render('profile',{
user:req.user

});

});


app.get('/logout',(req,res)=>{

req.logout();
res.redirect('/');

});

};

function isLoggedIn(req,res,next){

if(req.isAuthenticated()){
return next();

}

return res.redirect('/');
} */
