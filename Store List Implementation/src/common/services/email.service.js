import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS,
    },
});

const sendRegistrationEmail = (to, verificationCode) => {
    const emailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject: 'Registration Verification',
        text: `Your verification code is ${verificationCode}. Use this code to verify your email address.`
    }
    return transporter.sendMail(emailOptions);
}

export default { sendRegistrationEmail };