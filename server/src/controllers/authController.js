import Auth from '../models/authModel.js'; // Assuming file is named authModel.js
import jwt from 'jsonwebtoken';

// Register Admin
export const registerAdmin = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingAdmin = await Auth.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ message: 'Admin already exists with this email.' });
    }

    const newAdmin = new Auth({ username, email, password });
    await newAdmin.save();

    res.status(201).json({ message: 'Admin registered successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error. Could not register admin.' });
  }
};

// Login Admin
export const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Auth.findOne({ email });
    if (!admin) {
      return res.status(404).json({ message: 'Admin not found.' });
    }

    const isMatch = await admin.matchPassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials.' });
    }

    const token = jwt.sign({ id: admin._id, role: 'admin' }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });

    res
      .cookie('adminToken', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 * 1000,
      })
      .status(200)
      .json({
        message: 'Login successful.',
        admin: {
          id: admin._id,
          username: admin.username,
          email: admin.email,
        },
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error. Could not login.' });
  }
};

// Logout Admin
export const logoutAdmin = (req, res) => {
  res.clearCookie('adminToken');
  res.status(200).json({ message: 'Logout successful.' });
};
