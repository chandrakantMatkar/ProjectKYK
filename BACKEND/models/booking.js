const mongoose =  require('mongoose')

const bookingSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    phone:{
        type:String,
        required:true,
    },
    message:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    }
})

const Bookings = mongoose.model('bookings',bookingSchema);
module.exports = Bookings;
