const express = require('express')
const router = express.Router()
const Booking = require('../models/booking')
const twilio = require('twilio');
require('dotenv').config(); 

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = twilio(accountSid, authToken);

if (!accountSid || !authToken) {
    throw new Error('Twilio credentials are missing! Check your environment variables.');
}

router.post('/', (req, res) => {
    try {
        const booking = new Booking(req.body);
        booking.save()

        const combinedMessage = `Booking Details:\nName: ${req.body.name}\nPhone: ${req.body.phone}\nMessage: ${req.body.message}`;
        client.messages.create({
            body: combinedMessage,
            from: 'whatsapp:+14155238886',
            to: 'whatsapp:+918329359445'
        })
        return res.status(200).json({ success: true,msg:'Message sent successfully' });
    } catch (error) {
        return res.status(400).json({ success: false,msg:error.message });
    }
});

router.get('/', (req, res) => {
    Booking.find().then(booking => res.json(booking));
});


module.exports = router;