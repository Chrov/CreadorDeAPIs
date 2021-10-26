const express = require('express');
const postRoute = require('./routes/posts');
const Mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config')


const app = express();
app.use(bodyParser.json())
app.use('/posts', postRoute)

//Conextar a la base de datos
Mongoose.connect( process.env.DB_CONECTION , console.log('Conección exitosa a la DB'))

app.listen(5000);