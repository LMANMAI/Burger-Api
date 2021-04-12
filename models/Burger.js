const mongoose = require('mongoose');

const BurgerSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true,
        trim: true
    },
    ingredientes:[],
    
})
module.exports = mongoose.model('Burger', BurgerSchema);