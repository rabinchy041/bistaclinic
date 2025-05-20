import Link from 'next/link'
import React from 'react'

function Header() {
    return (
        <>
            <header className='x'>
                <section className='py-3'>

                    <div className="row bg-primary text-white ">
                        <div className="col-lg-3 text-center mt-2 ">
                            <h6>+977 9812345678</h6>
                        </div>
                        <div className="col-lg-4 vv mt-2"><h6>info@bistapoliclinic.com</h6></div>
                        <div className="col-lg-5 kk mt-2 text-end">
                            <h6>Emergency: +977 9898989898</h6>
                        </div>
                    </div>

                </section>

                <section className=' x'>
                    <div className="container ">
                        <div className="row">
                            <div className="col-lg-10">
                                <nav className="navbar navbar-expand-lg ">
                                    <div className="container">
                                        <div className='girajan'>
                                            <ul className='  d-flex fw-bold'>
                                                <li className='text-primary'>BISTA</li>
                                                <li className='text-secondary-emphasis'>POLICLINIC</li>
                                            </ul>
                                        </div>


                                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                            <span className="navbar-toggler-icon" />
                                        </button>
                                        <div className="collapse navbar-collapse " id="navbarSupportedContent">
                                            <ul className="navbar-nav gap-2 logo-gap flex d-flex justify-content-end fw-dark">
                                                <li className="nav-item  ">
                                                    <Link className="nav-link Active text-decoration-none mt-2 " aria-current="page" href="/">Home</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link Active text-decoration-none mt-2" href="/About">About</Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link className="nav-link Active text-decoration-none mt-2" href="/Services" >
                                                        Services</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link Active text-decoration-none mt-2" href="/Docter">Docter</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link Active text-decoration-none mt-2" href="/News">News</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link Active text-decoration-none mt-2" href="/Contact">Contact</Link>
                                                </li>
                                                <li className="nav-item">
                                                      <Link className="nav-link Active text-decoration-none" href="/Appointment"><button className='btn bg-primary text-white'>Appointment</button></Link>
                                                  
                                                </li>
                                            </ul>

                                        </div>
                                    </div>
                                </nav>




                            </div>

                        </div>
                    </div>
                </section>

            </header>

        </>

    )
}

export default Header
