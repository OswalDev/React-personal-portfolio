const nodemailer = require('nodemailer');

const SendEmail = async (subject, message, send_to, sent_from, reply_to) => {
    // const firstName = "" || undefined;
    // const lastName = "" || undefined;
    // const email = "" || undefined;
    // const phoneNumber = "" || undefined;
    // const Message = ;
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: "587",
        auth: {
            user: process.env.EMAIL_USER,
            user: process.env.EMAIL_PASS,
        },
        tls: {
            rejectUnauthorized: false,
        }
    })

    const options = {
        from: sent_from,
        to: send_to,
        replyTo: reply_to,
        subject: subject,
        html: message
    }

    //send email
    transporter.sendMail(options, function(err, info) {
        if(err) {
            console.log(err);
        }else{
            console.log(info);
        }
    })
};

module.exports = SendEmail;