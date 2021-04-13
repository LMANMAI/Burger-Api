const express = require('express');
const cors = require('cors');
const dbConnection = require('./config/db');

const app = express();
app.use(express.json({extended: true}));
app.use(cors());
dbConnection();
const port = process.env.PORT || 4000;
app.use('/api/burger', require('./routes/burger'));

app.listen(port, ()=>{
    console.log('Corriendo desde el puerto', port);
})
