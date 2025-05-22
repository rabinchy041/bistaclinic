import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialization: { type: String, required: true },
  education: { type: [String], required: true },
  experience: { type: String },
  bio: { type: String },
  imageUrl: { type: String, default: '' },
}, { timestamps: true });

const Doctor = mongoose.model('Doctor', doctorSchema);
export default Doctor;
