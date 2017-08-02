const express = require('express');
// const router = express.Router();
const app = express();
const Message = require('./../models/Message');
const bodyParser = require('body-parser');
const sendEmail = require('../services/nodemailer');

module.exports = (app) => {

    app.post('/message', (req, res) => {
        if (!req.body) return res.sendStatus(400);

        let first_name = req.body.first_name;
        let last_name = req.body.last_name;
        let email = req.body.email;
        let phone = req.body.phone;
        let message = req.body.message;

        // console.log('** req.body ---', req.body);
        let formData = new Message({
            first_name,
            last_name,
            email,
            phone,
            message
        });

        formData.save()
            .then((doc) => {
                console.log('Contact info stored: ', doc);
                res.send('You message has been sent. Thank you for contacting us. We will get back to you as soon as possible.');
            },
                (err) => console.log(":-( Oh oh! Something went wrong!", err))
            .catch((err) => {
                console.log('Catch Error: ', err);
                res.send(err);
            });

        sendEmail(first_name, last_name, email, phone, message);
    });
};



