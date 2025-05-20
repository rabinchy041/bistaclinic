import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";


import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";

function Footer() {
  return (
    <>

      <footer className="text-center text-lg-start text-white bg-primary">
        <section className="d-flex justify-content-between p-4">
          <div>
            <a href className="text-white me-4">
              <i className="fab fa-facebook-f" />
            </a>
            <a href className="text-white me-4">
              <i className="fab fa-twitter" />
            </a>
            <a href className="text-white me-4">
              <i className="fab fa-google" />
            </a>
            <a href className="text-white me-4">
              <i className="fab fa-instagram" />
            </a>
            <a href className="text-white me-4">
              <i className="fab fa-linkedin" />
            </a>
            <a href className="text-white me-4">
              <i className="fab fa-github" />
            </a>
          </div>
          {/* Right */}
        </section>
        {/* Section: Social media */}
        {/* Section: Links  */}
        <section className>
          <div className="container text-center text-md-start mt-3">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content */}
                <h6 className="text-uppercase fw-bold ">BISTA
                  POLYCLINIC</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: 60, backgroundColor: '#7c4dff', height: 2 }} />
                <p>
                  Bista Polyclinic is a premier healthcare institution committed to providing exceptional medical care with a focus on patient comfort and well-being.
                </p>

                <h3><FaFacebook />   <CiTwitter />  <IoLogoInstagram />  <FaLinkedin /> </h3>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold text-decoration-none">Queck Links</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: 60, backgroundColor: '#7c4dff', height: 2 }} />
                <p>
                  <a href="#!" className="text-white text-decoration-none">Home</a>
                </p>
                <p>
                  <a href="#!" className="text-white text-decoration-none">About</a>
                </p>
                <p>
                  <a href="#!" className="text-white text-decoration-none">Our Services</a>
                </p>
                <p>
                  <a href="#!" className="text-white text-decoration-none">Our Doctors</a>
                </p>

                <p>
                  <a href="#!" className="text-white text-decoration-none">News & Updates</a>
                </p>
                <p>
                  <a href="#!" className="text-white text-decoration-none">Cantact us</a>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}

                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: 60, backgroundColor: '#7c4dff', height: 2 }} />
                <p><i className="fas fa-home mr-3" /> Sisahaniya, Rapti-7, Dang</p>
                <p><i className="fas fa-envelope mr-3" /> <CiMail />info@bistapoliclinic.com</p>
                <p><i className="fas fa-phone mr-3" /><BsTelephone /> + 01 234 567 88</p>
                <p><i className="fas fa-print mr-3" /><CiLocationOn /> RMW2+QH9, Sisahaniya 22400</p>



              </div>

              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold">Opening Hours</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: 60, backgroundColor: '#7c4dff', height: 2 }} />
                <div className="row">
                  <div className="col-lg-6">
                    <h6>Sunday-Friday :</h6>

                  </div>
                  <div className="col-lg-6">
                    <h6 className='text-start'>8:00 AM - 8:00 PM</h6>

                  </div>

                  <div className="col-lg-6">
                    <h6>Saturday :</h6>

                  </div>
                  <div className="col-lg-6">
                    <h6 className='text-start'>Closed</h6>

                  </div>

                  
                  
                </div>
                <div className='py-3'>
                  <h5>Emergency Services</h5>
                  <h6>Available 24/7</h6>
                  <h5>Call: +977 1 4123457</h5>
                </div>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
      </footer>

    </>
  )
}

export default Footer
