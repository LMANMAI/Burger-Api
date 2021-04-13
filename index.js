const express = require('express');
const cors = require('cors');
const dbConnection = require('./config/db');

const app = express();
dbConnection();
app.use(cors());
app.use(express.json({ extended: true }));

const port = process.env.PORT || 4000;
app.use('/api/burger', require('./routes/burger'));

app.listen(port, '0.0.0.0' ,()=>{
    console.log('Corriendo desde el puerto: ', port);
})
