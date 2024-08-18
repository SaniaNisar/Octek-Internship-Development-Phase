import { AuthService } from "../services/index.js";

const verifyForgotPassword = async (req, res) => {
  const { token, code, newPassword } = req.body;
  const result = await AuthService.verifyForgotPassword(token, code, newPassword);
  return res.status(201).json(result);
};
export default {verifyForgotPassword };
