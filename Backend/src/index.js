const express = require('express');
const cors = require('cors');
const path = require ('path');
const app =express();
//const IndexRoutes= require('./Routes/index');
const taskRoutes = require('./Routes/tasks');

 app.set('views', path.join(__dirname, 'views'));
 app.set('port', process.env.PORT || 3002);
 app.set('view engine', 'ejs'); 
 app.engine('html', require('ejs').renderFile),
 
 app.use(cors());
 app.use(express.json());
 app.use(express.urlencoded({extended: false},));
 //app.use(IndexRoutes);
 app.use('/api', taskRoutes);
 //static Files
 app.use(express.static(path.join(__dirname, 'dist/cliente')));

 app.listen(app.get('port'), ()=>{

    console.log('escuchando puerto 3002', app.get('port'))
 });

//console.log("ejecutando 1 2 3 ");