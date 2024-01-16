console.log("welcom mr taher")
const express = require('express')//obligtoir mil module express
var bodyParser = require('body-parser');//yrdha json mhma knyt yli jya
const app = express();//kima hekka express module  le routre
//lllloo
//activer les api
//aaaa
const port=5900//y
app.use(express.json({ extended: false, limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb', extended: false, parameterLimit: 50000 }))
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
// app.use(bodyParser.json())
app.use(express.json({ extended: false, limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb', extended: false, parameterLimit: 50000 }))
 const connect = require('./dateBase/connect')
 const admin=require('./router/superAdmin/crudAdminApi')
 const joueur= require("./router/admin/crudJoueurApi");
 const authAdmin=require("./router/auth/authAdmin&SuperAdmin");
 const authJoueur=require("./router/auth/authJoueur");
 const gestionRoulette=require("./router/joueur/gestionRoulette");
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/admin',admin);
app.use('/joueur',joueur);
app.use('/loginAdmin',authAdmin);
app.use('/loginJoueur',authJoueur);
app.use('/Roulette',gestionRoulette);
//routes
// "bcrypt": "^5.0.0",
// "body-parser": "^1.19.0",
// "express": "^4.17.1",
// "jsonwebtoken": "^8.5.1",
// "lodash": "^4.17.20",
// "mongoose": "^5.11.14",
// "node-cron": "^3.0.0",
// "nodemailer": "^6.6.2",
// "nodemon": "^2.0.9",
// "passport": "^0.4.1",
// "passport-http-bearer": "^1.0.1",
// "sync": "^0.2.5",
// "synchronous-promise": "^2.0.15",
// "xlsx": "^0.17.1"
app.listen(port,'0.0.0.0',()=>console.log('Server listen on the port ',port)) ;
