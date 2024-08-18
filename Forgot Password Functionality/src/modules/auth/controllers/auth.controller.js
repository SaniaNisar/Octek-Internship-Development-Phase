import { AuthService } from "../services/index.js";

const forgotPassword = async (req, res) => {
    const { email } = req.query;
    const token = await AuthService.forgotPassword(email);
    res.status(200).json({ token: token });
};

export default { forgotPassword };
