const nodemailer = require('nodemailer');
const keys = require('../config/keys');

module.exports = (first_name, last_name, email, phone, message) => {

    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: keys.email, // Your email id
            pass: keys.password // Your password
        }
    });

    let text = `You've received a message from: ${first_name} ${last_name} \n\n Email Address: ${email} \n\n Phone: ${phone} \n\n Message:\n\n${message}`;

    let mailOptions = {
        from: keys.email, // sender address
        to: [
            keys.ccEmail,
            keys.email
        ], // list of receivers
        subject: `Message from Potential Client: ${first_name} ${last_name}`,  // Subject line
        text: text //, // plaintext body
    // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
            res.json({
                yo: 'error'
            }).bind(this);
        } else {
            console.log('Message sent: ' + info.response);
            res.json({
                yo: info.response
            }).bind(this);
        }

    });
};