'use client'
import React from 'react';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { CiTwitter, CiMail, CiLocationOn } from 'react-icons/ci';
import { IoLogoInstagram } from 'react-icons/io5';
import { BsTelephone } from 'react-icons/bs';

function Footer() {
  return (
    <footer className="text-white bg-primary pt-4">
      {/* Top Social Icons */}
     

      {/* Footer Content */}
      <section className="text-center text-md-start mt-4">
  <div className="container">
    <div className="row">
      {/* About */}
      <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
        <h6 className="text-uppercase fw-bold">BISTA POLYCLINIC</h6>
        <hr className="mb-2 mt-0 d-inline-block mx-auto" style={{ width: 60, backgroundColor: '#7c4dff', height: 2 }} />
        <p>
          Bista Polyclinic is a premier healthcare institution committed to providing exceptional medical care with a focus on patient comfort and well-being.
        </p>
         <section className="d-flex justify-content-center gap-4 p-3 border-bottom">
        <a href="#" className="text-white fs-4"><FaFacebook /></a>
        <a href="#" className="text-white fs-4"><CiTwitter /></a>
        <a href="#" className="text-white fs-4"><IoLogoInstagram /></a>
        <a href="#" className="text-white fs-4"><FaLinkedin /></a>
      </section>
      </div>

      {/* Quick Links */}
      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
        <h6 className="text-uppercase fw-bold">Quick Links</h6>
        <hr className="mb-2 mt-0 d-inline-block mx-auto" style={{ width: 60, backgroundColor: '#7c4dff', height: 2 }} />
        {['Home', 'About', 'Our Services', 'Our Doctors', 'News & Updates', 'Contact Us'].map((text, index) => (
          <p key={index}>
            <a href="#" className="text-white text-decoration-none">{text}</a>
          </p>
        ))}
      </div>

      {/* Contact Info */}
      <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
        <h6 className="text-uppercase fw-bold">Contact</h6>
        <hr className="mb-2 mt-0 d-inline-block mx-auto" style={{ width: 60, backgroundColor: '#7c4dff', height: 2 }} />
        <p><CiLocationOn className="me-2" /> Sisahaniya, Rapti-7, Dang</p>
        <p><CiMail className="me-2" /> info@bistapoliclinic.com</p>
        <p><BsTelephone className="me-2" /> +01 234 567 88</p>
        <p><CiLocationOn className="me-2" /> RMW2+QH9, Sisahaniya 22400</p>
      </div>

      {/* Opening Hours */}
      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
        <h6 className="text-uppercase fw-bold">Opening Hours</h6>
        <hr className="mb-2 mt-0 d-inline-block mx-auto" style={{ width: 60, backgroundColor: '#7c4dff', height: 2 }} />
        <div className="row mb-2">
          <div className="col-6">Sunday - Friday:</div>
          <div className="col-6 text-start">8:00 AM - 8:00 PM</div>
        </div>
        <div className="row mb-3">
          <div className="col-6">Saturday:</div>
          <div className="col-6 text-start">Closed</div>
        </div>
        <div className="py-2">
          <h5 className="mb-1">Emergency Services</h5>
          <p className="mb-1">Available 24/7</p>
          <p className="mb-0 fw-bold">Call: +977 1 4123457</p>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Footer Bottom */}
      <div className="text-center py-3 bg-dark">
        <small> &copy; {new Date().getFullYear()} Hospital Admin Panel</small>
      </div>
    </footer>
  );
}

export default Footer;
