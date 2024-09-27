require('dotenv').config();
const mongoose = require('mongoose');
const mongoURI = process.env.MONGO_URI

console.log('MongoDB URI:', mongoURI);

const connectToMongo = async () => {
    try {
       const connect = await mongoose.connect(mongoURI);
       console.log("Connected to MongoDB successfully")
    } catch (error) {
       console.log(error) 
    }
}

module.exports = connectToMongo;