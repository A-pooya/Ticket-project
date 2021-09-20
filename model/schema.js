const mongoose = require('mongoose');
const { date, string } = require('yup/lib/locale');
const {yupValidation} = require('./yupValidation');

const ticketSchema = new mongoose.Schema({
    day:{
        type: String ,
        required:true,
    },
    time:{
        type:String,
        required:true,
    },
    capacity:{
        type:Number,
        required:true,
        default:5
    },
    specialCapacity:{
        type:Number,
        default:0
    },
    reserve:{
        type:Boolean,
        required:true,
        default:false,
    },
    sanseDate:{
        type:String,
        required:true
    }, 
});


ticketSchema.statics.TicketValidation = function(body){
    return yupValidation.validate(body , {abortEarly:false})
}

const Ticket = mongoose.model('Ticket' , ticketSchema);

module.exports = Ticket;