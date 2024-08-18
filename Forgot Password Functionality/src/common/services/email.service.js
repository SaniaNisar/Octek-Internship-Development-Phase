import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS,
    },
    tls: {
        rejectUnauthorized: false,
    },
});

const sendForgotPasswordEmail = async (to, code) => {
    const emailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject: 'Password Reset Code',
        text: `Your password reset code is: ${code}`
      };

      return await transporter.sendMail(emailOptions);

      
};


export default { sendForgotPasswordEmail };