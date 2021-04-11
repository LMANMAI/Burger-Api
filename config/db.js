const mongoose = require('mongoose');
require('dotenv').config({path: 'variables.env'})

const dbConnection = async() => {
    try {
        await  mongoose.connect(process.env.DB,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log('Coneccion con exito a la base de datos')
    } catch (error) {
        console.log(error, 'Ocurrio un error conectando a la base de datos');
        process.exit(1)
    }
}
module.exports = dbConnection;