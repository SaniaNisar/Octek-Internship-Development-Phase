// import { User } from "../../../common/database/models/index.js";
// import {
//   BadRequestException,
//   UnauthorizedException,
// } from "../../../common/exceptions/index.js";
// import { EmailService, RedisClient } from "../../../common/services/index.js";
// import { uuid } from "uuidv4";
// import jwt from "jsonwebtoken";
// import bcrypt from "bcrypt";

// const register = async (name, email, password) => {
//   let user = await User.findOne({ where: { email } });
//   const encryptedPassword = await bcrypt.hash(password, 10);
//   if (user) {
//     if (user.verified) {
//       throw new UnauthorizedException();
//     } else {
//       user.name = name;
//       user.password = encryptedPassword;
//       user.type = 0;
//       await user.save();
//     }
//   } else {
//     user = await User.create({
//       email,
//       name,
//       password: encryptedPassword,
//       type: 0,
//       verified: false,
//     });
//   }
//   const randomToken = uuid();
//   const randomDigits = Math.floor(1000 + Math.random() * 9000);
//   const payload = {
//     email,
//     code: randomDigits.toString(),
//   };
//   const jwtToken = jwt.sign(payload, process.env.JWT_SECRET, {
//     expiresIn: "1h",
//   });
//   await RedisClient.set(randomToken, jwtToken);
//   await EmailService.sendRegistrationEmail(email, randomDigits);
//   return randomToken;
// };

// const verifyRegistration = async (token, code) => {
//   const jwtToken = await RedisClient.get(token);
//   const payload = jwt.verify(jwtToken, process.env.JWT_SECRET);
//   if (code === payload.code) {
//     const user = await User.findOne({ where: { email: payload.email } });
//     if (user) {
//       user.verified = true;
//       await user.save();
//       RedisClient.del(token);
//       return true;
//     }
//   } else {
//     throw new BadRequestException("Code did not match");
//   }
// };

// const forgotPassword = async (email) => {
// const user = await User.findOne({ where: { email } });
//   if (!user) {
//     throw new UnauthorizedException("Email Not Found");
//   }
//   const token = uuidv4();
//   const code = Math.floor(1000 + Math.random() * 9000).toString();
//   const jwtToken = jwt.sign({ email, code }, process.env.JWT_SECRET, {
//     expiresIn: "1h",
//   });
//   await RedisClient.set(token, jwtToken);
//   await EmailService.sendForgotPasswordEmail(email, code);
//   return token;
// };

// const login = async (email, password) => {
//   const user = await User.findOne({ where: { email, verified: true } });
//   if (!user) {
//     throw new UnauthorizedException();
//   }
//   if (!(await bcrypt.compare(password, user.password))) {
//     throw new UnauthorizedException();
//   }
//   const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
//   return { user, token };
// };

// export default { login, register, verifyRegistration, forgotPassword };

import { User } from "../../../common/database/models/index.js";
import { BadRequestException, UnauthorizedException } from "../../../common/exceptions/index.js";
import { EmailService, RedisClient } from "../../../common/services/index.js";
import { v4 as uuidv4 } from 'uuid';
import jwt from "jsonwebtoken";

const forgotPassword = async (email) => {
const user = await User.findOne({ where: { email , verified: true} });
  if (!user) {
    throw new UnauthorizedException("Email Not Found");
  }
  const token = uuidv4();
  const code = Math.floor(1000 + Math.random() * 9000).toString();
  const jwtToken = jwt.sign({ email, code }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  await RedisClient.set(token, jwtToken);
  await EmailService.sendForgotPasswordEmail(email, code);

  return token;
};
export default { forgotPassword };
