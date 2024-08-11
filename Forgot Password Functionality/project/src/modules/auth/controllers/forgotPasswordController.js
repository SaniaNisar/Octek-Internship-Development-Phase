import forgotPassword from '../services/forgotPasswordService.js';

const forgotPasswordController = async (req, res) => {
  const { email } = req.query;

  try {
    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    const token = await forgotPassword(email);

    res.status(200).json({ token:token });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export { forgotPasswordController };
