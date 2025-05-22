'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import Header from '@/app/(user)/com/Header';
import Footer from '@/app/(user)/com/Footer';


interface Appointment {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  preferredDate: string;
  department: string;
  message?: string;
  status: 'pending' | 'done';
}

const AppointmentScheduler = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchAppointments = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/appointments');
      const sortedAppointments = res.data.appointments.sort(
        (a: Appointment, b: Appointment) =>
          new Date(a.preferredDate).getTime() - new Date(b.preferredDate).getTime()
      );
      setAppointments(sortedAppointments);
    } catch (err) {
      toast.error('Failed to fetch appointments');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this appointment?')) return;
    try {
      await axios.delete(`http://localhost:5000/api/appointments/${id}`);
      setAppointments((prev) => prev.filter((a) => a._id !== id));
      toast.success('Appointment deleted');
    } catch {
      toast.error('Delete failed');
    }
  };

  const handleStatusToggle = async (id: string, currentStatus: 'pending' | 'done') => {
    const newStatus = currentStatus === 'pending' ? 'done' : 'pending';
    if (!window.confirm(`Mark this appointment as ${newStatus}?`)) return;
    try {
      await axios.patch(`http://localhost:5000/api/appointments/${id}/status`, {
        status: newStatus,
      });
      setAppointments((prev) =>
        prev.map((a) => (a._id === id ? { ...a, status: newStatus } : a))
      );
      toast.success(`Status updated to ${newStatus}`);
    } catch {
      toast.error('Status update failed');
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <Toaster />

      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold text-blue-700 mb-6">🩺 Appointment Scheduler</h1>

        {loading ? (
          <p>Loading...</p>
        ) : appointments.length === 0 ? (
          <p className="text-gray-600">No appointments found.</p>
        ) : (
          <div className="overflow-x-auto bg-white shadow-md rounded">
            <table className="min-w-full text-sm text-left text-gray-700">
              <thead className="bg-blue-100 text-xs uppercase font-bold text-gray-600">
                <tr>
                  <th className="px-4 py-2">#</th>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Phone</th>
                  <th className="px-4 py-2">Email</th>
                  <th className="px-4 py-2">Date</th>
                  <th className="px-4 py-2">Department</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">Message</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((app, idx) => (
                  <tr key={app._id} className="border-t text-center">
                    <td className="px-4 py-2">{idx + 1}</td>
                    <td className="px-4 py-2">{app.fullName}</td>
                    <td className="px-4 py-2">{app.phone}</td>
                    <td className="px-4 py-2">{app.email}</td>
                    <td className="px-4 py-2">
                      {new Date(app.preferredDate).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-2">{app.department}</td>
                    <td className="px-4 py-2">
                      <span
                        className={`px-2 py-1 rounded text-white ${
                          app.status === 'done' ? 'bg-green-500' : 'bg-yellow-500'
                        }`}
                      >
                        {app.status}
                      </span>
                    </td>
                    <td className="px-4 py-2">{app.message || '-'}</td>
                    <td className="px-4 py-2 space-x-2">
                      <button
                        onClick={() => handleStatusToggle(app._id, app.status)}
                        className="px-2 py-1 text-sm bg-blue-500 text-white rounded"
                      >
                        Toggle
                      </button>
                      <button
                        onClick={() => handleDelete(app._id)}
                        className="px-2 py-1 text-sm bg-red-500 text-white rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default AppointmentScheduler;
