require('dotenv').config();
const nodemailer = require('nodemailer');
let transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
 });
const mailOptions = {
    from: 'souravshaju023@gmail.com', // Sender address
    to: 'ashin.jnv@gmail.com,souravshaju123@gmail.com', // List of recipients
    subject: 'Send by nodemailer', // Subject line
    text: 'Hi Ashin Sir! This is a test mail.', // Plain text body
};

transport.sendMail(mailOptions, function(err, info) {
   if (err) {
     console.log(err)
   } else {
     console.log(info);
   }
});