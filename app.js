require("dotenv").config()
const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid-transport');
const sendMail = () => {
  const mailOptions = {
    auth: {
      api_key: process.env.API_KEY
    }
  }
  const transporter = nodemailer.createTransport(sgTransport(mailOptions));

  const sendIt = {
    to: process.env.USER_EMAIL,
    from: process.env.EMAIL,
    subject: "Hey Email",
    text: "text",
    html: "HEY!! HAVE SENT YOU AN EMAIL"
  };

  return transporter.sendMail(sendIt, function (err, res) {
    if (err) {
      console.log(err)
    }
    console.log(res);
  });

}
sendMail()