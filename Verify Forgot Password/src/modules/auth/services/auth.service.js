import { User } from "../../../common/database/models/index.js";
import { UnauthorizedException } from "../../../common/exceptions/index.js";
import { RedisClient } from "../../../common/services/index.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const verifyForgotPassword = async (token, code, newPassword) => {
  try {
    // Get the value from Redis using the token as the key
    const redisValue = await RedisClient.get(token);
    if (!redisValue) {
      throw new UnauthorizedException("Token not found");
    }
    // Verify the JWT stored in the Redis value
    const decoded = jwt.verify(redisValue, process.env.JWT_SECRET);
    if (decoded.code !== code) {
      throw new UnauthorizedException("Code is incorrect");
    }

    // Get the user by email from the payload and update the password
    const user = await User.findOne({
      where: { email: decoded.email, verified: true },
    });
    if (!user) {
      throw new UnauthorizedException("User not found");
    }

    // Encrypt the new password and update the user record
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();

    // Delete the token from Redis
    await RedisClient.del(token);

    return { message: "Password changed successfully" };
  } catch (error) {
    throw new Error(error.message || "Internal Server Error");
  }
};

export default { verifyForgotPassword };
