const nodemailer = require("nodemailer");

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "farahraboudi999@gmail.com", 
    pass: "ilovegod1999", 
  },
});

// setup email data with unicode symbols
let mailOptions = {
  from: "farahraboudi999@gmail.com", 
  to: "maouiabenmaouia2019@gmail.com", 
  subject: "Test Email",
  text: "This is a test email from Node.js",
  html: "<b>This is a test email from Node.js</b>",
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log("Message sent: %s", info.messageId);
});
