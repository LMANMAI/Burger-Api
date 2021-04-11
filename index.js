const express = require('express');
const dbConnection = require('./config/db');

const app = express();
app.use(express.json({extended: true}));
dbConnection();
const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=>{
    console.log('Corriendo el servidor')
})
