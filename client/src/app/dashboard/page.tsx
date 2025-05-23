'use client';

import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import LogoutButton from '@/component/LogoutButton';
import Header from '../(user)/com/Header';
import Footer from '../(user)/com/Footer';
import { UserPlus } from 'lucide-react';

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalDoctors: 0,
    totalAppointments: 0,
  });

  const [username, setUsername] = useState('Admin');
  const router = useRouter();

  useEffect(() => {
    // Fetch dashboard stats from backend
    const fetchStats = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/admin/stats');
        const data = await res.json();
        setStats(data);
      } catch (error) {
        console.error('Failed to fetch stats', error);
      }
    };

    // Load admin username from localStorage
    const storedAuth = localStorage.getItem('admin');
    if (storedAuth) {
      const adminData = JSON.parse(storedAuth);
      setUsername(adminData.username || 'Admin');
    }

    fetchStats();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-lg hidden md:block">
          <div className="p-6 text-xl font-bold">Admin Panel</div>
          <nav className="flex flex-col space-y-2 px-4 text-gray-700">
            <Link href="/dashboard" className="hover:text-blue-500">
              Dashboard
            </Link>
            <Link href="/auth/admin/addDoctors" className="hover:text-blue-500">
              Doctors
            </Link>
            <Link href="/auth/admin/appointments" className="hover:text-blue-500">
              Appointment Scheduler
            </Link>
            <Link href="/auth/admin/addNews" className="hover:text-blue-500">
              News
            </Link>
            <Link
              href="/auth/adminRegister"
              className="flex items-center gap-2 hover:text-blue-500"
            >
              <UserPlus size={18} />
              Register Admin
            </Link>
          </nav>
          <div className="p-6">
            <LogoutButton />
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-gray-800">Welcome, {username} 👋</h1>
            <p className="text-gray-500">Here’s what’s happening today.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-blue-100">
              <CardContent className="p-6">
                <h2 className="text-lg text-gray-700">Total Users</h2>
                <p className="text-3xl font-bold">{stats.totalUsers}</p>
              </CardContent>
            </Card>
            <Card className="bg-green-100">
              <CardContent className="p-6">
                <h2 className="text-lg text-gray-700">Total Doctors</h2>
                <p className="text-3xl font-bold">{stats.totalDoctors}</p>
              </CardContent>
            </Card>
            <Card className="bg-yellow-100">
              <CardContent className="p-6">
                <h2 className="text-lg text-gray-700">Appointments</h2>
                <p className="text-3xl font-bold">{stats.totalAppointments}</p>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
