import Auth from '../models/authModel.js';
import jwt from 'jsonwebtoken';

// Utility to validate strong password
const isStrongPassword = (password) => {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(password);
};

// ✅ Register Admin or User
export const registerAdmin = async (req, res) => {
  const { username, email, password, role } = req.body;

  try {
    // Check if user exists
    const existingUser = await Auth.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists with this email.' });
    }

    // Strong password validation
    if (!isStrongPassword(password)) {
      return res.status(400).json({
        message:
          'Password must be at least 8 characters and include uppercase, lowercase, number, and special character.',
      });
    }

    // Default to "user" role if not provided
    const newUser = new Auth({
      username,
      email,
      password,
      role: role || 'user',
    });

    await newUser.save();

    res.status(201).json({ message: 'Registration successful!' });
  } catch (error) {
    console.error('Register Error:', error);
    res.status(500).json({ message: 'Server error. Could not register user.' });
  }
};

// Login Admin
export const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Auth.findOne({ email });

    if (!admin || admin.role !== 'admin') {
      return res.status(404).json({ message: 'Admin not found.' });
    }

    const isMatch = await admin.matchPassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials.' });
    }

    const token = jwt.sign(
      { id: admin._id, role: 'admin' },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res
      .cookie('adminToken', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict', // or 'lax' if you face cross-site cookie issues
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      })
      .status(200)
      .json({
        message: 'Login successful.',
        admin: {
          id: admin._id,
          username: admin.username,
          email: admin.email,
          role: admin.role,
        },
      });
  } catch (error) {
    console.error('Login Admin Error:', error);
    res.status(500).json({ message: 'Server error. Could not login.' });
  }
};


// ✅ Logout Admin
export const logoutAdmin = (req, res) => {
  res.clearCookie('adminToken');
  res.status(200).json({ message: 'Logout successful.' });
};
