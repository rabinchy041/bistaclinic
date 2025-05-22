import Admin from '../models/adminModel.js';
import generateToken from '../utils/generatetoken.js';

export const registerAdmin = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await Admin.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'Admin already exists' });

    const admin = new Admin({ username, email, password });
    await admin.save();

    res.status(201).json({
      _id: admin._id,
      username: admin.username,
      email: admin.email,
      token: generateToken(admin._id),
    });
  } catch (error) {
    res.status(500).json({ message: 'Registration failed' });
  }
};

export const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(404).json({ message: 'Admin not found' });

    const isMatch = await admin.matchPassword(password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    res.json({
      _id: admin._id,
      username: admin.username,
      email: admin.email,
      token: generateToken(admin._id),
    });
  } catch (error) {
    res.status(500).json({ message: 'Login failed' });
  }
};
