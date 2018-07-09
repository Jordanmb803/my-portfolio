require('dotenv').config()
const express = require('express')
    , bodyParser = require('body-parser')
    , nodemailer = require('nodemailer')

const app = express()

app.use(bodyParser.json())


app.post('/send/email', (req, res) => {
    const {name, sentFrom, message} = req.body

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'jordanmb803@gmail.com',
            pass: process.env.PASS
        }
    });

    const mailOptions = {
        from: sentFrom, // sender address
        to: 'jordanmb803@gmail.com', // list of receivers
        subject: `message from ${name}`, // Subject line
        html: `From: ${sentFrom} Message: ${message}`// plain text body
    };
transporter.sendMail(mailOptions, function (err, info) {
    if (err)
        console.log(err)
    else
        console.log(info);
});
res.sendStatus(200)

})


app.listen(process.env.PORT, () => console.log(`Now listening on port ${process.env.PORT}`))