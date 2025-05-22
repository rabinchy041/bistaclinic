'use clinet'
import Link from 'next/link'
import React from 'react'

function Header() {
    return (
        <header>
            {/* Top Contact Bar */}
            <section className="py-3 bg-primary text-white">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center px-4 space-y-2 lg:space-y-0">
                    <h6>+977 9812345678</h6>
                    <h6>info@bistapoliclinic.com</h6>
                    <h6>Emergency: +977 9898989898</h6>
                </div>
            </section>

            {/* Navigation */}
            <section className="text-dark py-4 shadow">
                <div className="max-w-7xl mx-auto px-4">
                    <nav className="flex flex-col lg:flex-row justify-between items-center">
                        {/* Logo */}
                        <div className="flex items-center gap-1 text-xl font-bold">
                            <span className="text-primary">BISTA</span>
                            <span className="text-gray-700">POLICLINIC</span>
                        </div>

                        {/* Menu */}
                        <ul className="flex flex-wrap justify-center lg:justify-end items-center gap-4 mt-4 lg:mt-0 font-medium text-sm">
                            <li>
                                <Link className="text-gray-700  text-decoration-none" href="/">Home</Link>
                            </li>
                            <li>
                                <Link className="text-gray-700  text-decoration-none" href="/About">About</Link>
                            </li>
                            <li>
                                <Link className="text-gray-700  text-decoration-none" href="/Services">Services</Link>
                            </li>
                            <li>
                                <Link className="text-gray-700  text-decoration-none" href="/Docter">Docter</Link>
                            </li>
                            <li>
                                <Link className="text-gray-700  text-decoration-none" href="/News">News</Link>
                            </li>
                            
                            <li>
                                <Link className="text-gray-700  text-decoration-none" href="/Contact">Contact</Link>
                            </li>
                            <li>
                                <Link className="text-decoration-none" href="/Appointment">
                                    <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition">
                                        Appointment
                                    </button>
                                </Link>
                            </li>
                            <li>
                                <Link className="text-decoration-none" href="/auth/adminLogin">
                                    <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition">
                                        login
                                    </button>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
        </header>
    )
}

export default Header
