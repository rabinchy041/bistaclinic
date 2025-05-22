'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import LogoutButton from '@/component/LogoutButton';
import Header from '../(user)/com/Header';
import Footer from '../(user)/com/Footer';


export default function Dashboard() {
  const stats = {
    totalUsers: 120,
    totalDoctors: 15,
    totalAppointments: 87,
  };

  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('user');
    router.push('/auth/adminLogin');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      
    <Header/>
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-lg hidden md:block">
          <div className="p-6 text-xl font-bold">Admin Panel</div>
          <nav className="flex flex-col space-y-2 px-4 text-gray-700">
            <Link href="/dashboard" className="hover:text-blue-500">Dashboard</Link>
            <Link href="/Doctor" className="hover:text-blue-500">Doctors</Link>
            <Link href="/auth/admin/appointments" className="hover:text-blue-500">Appointment Scheduler</Link>
            <Link href="/News" className="hover:text-blue-500">News</Link>
          </nav>
          <div className="p-6">
            <LogoutButton/>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-gray-800">Welcome, Admin 👋</h1>
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
 <Footer/>
     
    </div>
  );
}
