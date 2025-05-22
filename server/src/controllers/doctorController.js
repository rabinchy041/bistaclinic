import Doctor from '../models/doctorModel.js';

export const addDoctor = async (req, res) => {
  try {
    const { name, specialization, education, experience, bio } = req.body;

    if (!name || !specialization || !education) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const educationArray = education.split(',').map(ed => ed.trim());

    const imageUrl = req.file ? `/uploads/${req.file.filename}` : '';

    const newDoctor = new Doctor({
      name,
      specialization,
      education: educationArray,
      experience,
      bio,
      imageUrl,
    });

    await newDoctor.save();

    res.status(201).json(newDoctor);
  } catch (error) {
    console.error('Add doctor error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find().sort({ createdAt: -1 });
    res.json(doctors);
  } catch (error) {
    console.error('Get doctors error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
