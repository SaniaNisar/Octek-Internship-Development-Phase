import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  // Uncomment below if you encounter self-signed certificate issues
  tls: {
    rejectUnauthorized: false
  }
});

export default transporter;
