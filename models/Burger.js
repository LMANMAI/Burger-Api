const mongoose = require('mongoose');

const BurgerSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    toppings:[],
    image:{
        type:String,
        required: true,
        trim: true
    }
})
module.exports = mongoose.model('Burger', BurgerSchema);