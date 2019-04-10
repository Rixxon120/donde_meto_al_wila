'use strict';

/**
 * Exportamos todas las dependencias necesarias para establecer la conexión
 */
const express = require('express'),
      app = express(),
      path = require('path'),
      bodyParser = require('body-parser'),
      morgan =  require('morgan'),
      mongoose = require('mongoose');

/**
 * Se definen las variables necesarias para la conexión con MongoDB
 */
let db = mongoose.connection,
//dburl ='mongodb://luisgh:tecnologia1@luisdb-shard-00-00-8ybdx.mongodb.net:27017,LuisDB-shard-00-01-8ybdx.mongodb.net:27017,LuisDB-shard-00-02-8ybdx.mongodb.net:27017/LuisDB?ssl=true&replicaSet=LuisDB-shard-0&authSource=admin&retryWrites=true',
dburl ='mongodb://indominus:indominus@cluster0-shard-00-00-hubyw.mongodb.net:27017,Cluster0-shard-00-01-hubyw.mongodb.net:27017,Cluster0-shard-00-02-hubyw.mongodb.net:27017/Cluster0?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true',
    port = 4000;

/**
 * Se le indica que cree un servidor extra dentro del puerto 4000 y escuche los cambios que se le hagan a esos archivos
 */
let server = app.listen(port,_server());

/**
 * Se define la conexión con Mongoose, enviándole como parámetro la url de la base de datos
 */
mongoose.connect(dburl, { useNewUrlParser: true });

/**
 * Si la conexión falla, imprime en consola el error
 */
db.on('error', console.error.bind(console, 'Error de conexión: '));

/**
 * Si la conexión es exitosa nos imprime en la consola que se ha establecido conexión con Mongo
 */
db.once('open', function () {
  console.log('Base de datos conectada correctamente');
});

/**
 * Le indicamos a express que envíe las respuestas a la carpeta "public"
 */
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Le indicamos a la aplicación que el formato de los datos va a ser JSON
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('dev'));

app.use( function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});


const registros = require('./componentes/registros/registros.route');

app.use('/api', registros); 

const registros_mep = require('./componentes/registros_mep/registros.route');

app.use('/api', registros_mep);

const utiles_oficial =require('./componentes/utiles_oficial/utiles_oficial.route');
app.use('/api',utiles_oficial);

const utiles_centro =require('./componentes/utiles_centro/utiles_centro.route');
app.use('/api',utiles_centro);

const rubros = require('./componentes/rubros/rubros.route');

app.use('/api', rubros);


const registros_pf = require('./componentes/registros_pf/registros_pf.route');

app.use('/api', registros_pf);

const noticias= require('./componentes/registros_noticias/noticias.route');

app.use('/api', noticias);

const servicios = require('./componentes/registros_servicios/servicios.route');

app.use('/api', servicios);

const contacto= require('./componentes/contacto/contacto.route');

app.use('/api', contacto);
 
const actividades = require('./componentes/actividades/actividades.route');

app.use('/api', actividades);


const registros_ten = require('./componentes/registros_ten/registros.route');

app.use('/api', registros_ten);

const niveles = require('./componentes/niveles/niveles.route');
app.use('/api', niveles);



const reg_edu = require('./componentes/registros_ce/reg_ce_edu.route');
app.use('/api', reg_edu);

const registros_faq = require('./componentes/registros_faq/registros.route');

app.use('/api', registros_faq);

// Se guarda todo lo que se ha realizado
module.exports = app;

function _server(){
  console.log('Back-end corriendo en el puerto ' + port);
};



