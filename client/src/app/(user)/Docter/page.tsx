'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const specializations = [
  'Cardiologist',
  'Neurologist',
  'Pediatrician',
  'Dermatologist',
  'Orthopedic Surgeon',
  'Chief Medical Officer',
  'General Practitioner',
  'ENT Specialist',
];

interface Doctor {
  id: string | number;
  name: string;
  specialization: string;
  education?: string[];
  experience?: string;
  bio?: string;
  image?: string;
}

function DoctorPage() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/doctors');
        setDoctors(response.data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };
    fetchDoctors();
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    specialization: '',
    educationText: '',
    experience: '',
    bio: '',
    imageFile: null as File | null,
    imagePreview: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFormData((prev) => ({ ...prev, imageFile: file }));

    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prev) => ({ ...prev, imagePreview: reader.result as string }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.specialization || !formData.educationText) {
      alert('Please fill name, specialization, and education fields.');
      return;
    }

    const newDoctor = {
      name: formData.name,
      specialization: formData.specialization,
      education: formData.educationText.split(',').map((ed) => ed.trim()),
      experience: formData.experience,
      bio: formData.bio,
      image: formData.imagePreview || 'https://via.placeholder.com/150',
    };

    try {
      const response = await axios.post('http://localhost:5000/api/doctors', newDoctor);
      setDoctors((prev) => [...prev, response.data]);

      setFormData({
        name: '',
        specialization: '',
        educationText: '',
        experience: '',
        bio: '',
        imageFile: null,
        imagePreview: '',
      });
    } catch (error) {
      console.error('Error adding doctor:', error);
      alert('Failed to add doctor');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-50 py-10 px-6 md:px-16">
      <h1 className="text-4xl font-extrabold text-center text-indigo-900 mb-12 drop-shadow-lg">
        Meet Our Expert Doctors
      </h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-white rounded-xl shadow-xl p-8 mb-16"
        noValidate
      >
        <h2 className="text-2xl font-semibold text-indigo-800 mb-6 border-b pb-3">
          Add Doctor Details
        </h2>

        {/* Name */}
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder=" "
            required
            className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
          />
          <label
            htmlFor="name"
            className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Name *
          </label>
        </div>

        {/* Specialization */}
        <div className="relative z-0 w-full mb-6 group">
          <select
            id="specialization"
            name="specialization"
            value={formData.specialization}
            onChange={handleChange}
            required
            className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 cursor-pointer appearance-none focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
          >
            <option value="" disabled>
              Select Specialization *
            </option>
            {specializations.map((spec) => (
              <option key={spec} value={spec}>
                {spec}
              </option>
            ))}
          </select>
          <label
            htmlFor="specialization"
            className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Specialization *
          </label>
        </div>

        {/* Education */}
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            id="educationText"
            name="educationText"
            value={formData.educationText}
            onChange={handleChange}
            placeholder=" "
            required
            className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
          />
          <label
            htmlFor="educationText"
            className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Education * (comma separated)
          </label>
        </div>

        {/* Experience */}
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            placeholder=" "
            className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
          />
          <label
            htmlFor="experience"
            className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Experience
          </label>
        </div>

        {/* Bio */}
        <div className="relative z-0 w-full mb-6 group">
          <textarea
            id="bio"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            rows={3}
            placeholder=" "
            className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-600 peer resize-none"
          ></textarea>
          <label
            htmlFor="bio"
            className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Bio
          </label>
        </div>

        {/* Image Upload */}
        <div className="mb-8">
          <label className="block mb-2 text-gray-700 font-semibold">Upload Image</label>
          <div className="flex items-center space-x-4">
            <label
              htmlFor="imageFile"
              className="cursor-pointer inline-block rounded-full overflow-hidden border-4 border-indigo-500 hover:border-indigo-700 transition"
              style={{ width: '80px', height: '80px' }}
            >
              {formData.imagePreview ? (
                <img
                  src={formData.imagePreview}
                  alt="Preview"
                  className="object-cover w-full h-full"
                />
              ) : (
                <div className="flex items-center justify-center w-full h-full bg-indigo-100 text-indigo-400 text-3xl font-bold">
                  +
                </div>
              )}
            </label>
            <input
              type="file"
              id="imageFile"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
            <span className="text-gray-500">Select or drag image</span>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 transition text-white font-bold py-3 rounded-lg shadow-md focus:outline-none focus:ring-4 focus:ring-indigo-300"
        >
          Add Doctor
        </button>
      </form>

      {/* Doctors List */}
      <section className="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {doctors.map((doc) => (
          <article
            key={doc.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col"
          >
            <img
              src={doc.image || 'https://via.placeholder.com/400x300?text=No+Image'}
              alt={doc.name}
              className="h-64 w-full object-cover"
              loading="lazy"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-semibold text-indigo-900 mb-1">{doc.name}</h3>
              <p className="text-indigo-600 font-semibold mb-3">{doc.specialization}</p>
              <p className="text-gray-700 mb-4 flex-grow">{doc.bio || 'No bio available.'}</p>

              <div className="mb-4">
                <h4 className="font-semibold text-indigo-800 mb-1">Education</h4>
                <ul className="list-disc list-inside text-gray-700 text-sm max-h-24 overflow-auto">
                  {(doc.education ?? []).map((edu, i) => (
                    <li key={i}>{edu}</li>
                  ))}
                </ul>
              </div>

              <p className="font-semibold text-gray-800">
                Experience: <span className="font-normal">{doc.experience || 'N/A'}</span>
              </p>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

export default DoctorPage;
