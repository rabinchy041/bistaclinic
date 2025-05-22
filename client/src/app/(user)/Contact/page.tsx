import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
function page() {
  return (
    <>
      
      <section className='py-5 mt-5 bg-primary text-white text-center'>
        <h6>Cantact us</h6>
        <h2>Get In Touch</h2>
        <p>We're here to help with any questions you may have about our services, appointments, or <br /> general inquiries.</p>
      </section>

         <section className='py-5 n bg-ligh mt-2'>
              <div className="container  ">
       
      
                <div className="row    ">
                  <div className="col-lg-3  shadow n">
                   
                    <h5 className="mt-2"> Our Location</h5>
                    <p>RMW2+QH9, Sisahaniya 22400</p>
                    <p className='text-primary'>Get Directions</p>
                  </div>
      
                  <div className="col-lg-3 shadow ms-4 n ">
                   
                    <h5>Phone Numbers </h5>
                    <p>Reception: +977 9812345678</p>
                    <p>Emergency: +977 9898989898</p>
                    <p>Appointment: +977 01-4567890</p>
      
                  </div>
                  <div className="col-lg ms-4 shadow n ">
               <h5 className="mt-2"> Email Addresses</h5>
                    <p>General Inquiries: info@bistapoliclinic.com</p>
                    <p>Appointments: appointment@bistapoliclinic.com</p>
                    <p>Feedback: feedback@bistapoliclinic.com</p>
                  </div>
      
                  <div className="col-lg ms-4 shadow s ">
                    
                    <h5 className="mt-2"> Social Media</h5>
                    <h3 className=' text-primary'><FaFacebook /> <FaInstagram /> <FaTwitter /></h3>
                  </div>
      
      
      
                </div>
              </div>
      
            </section>

              <section className="py-4">
        <div className="container">
          <h3 className=" text-center">Our Location</h3>
          <p className=" text-center">We are conveniently located in the heart of Sisahaniya, easily accessible by public transportation.</p>
          <div className="row">
            <div className="col-lg-6">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3527.7922416854162!2d82.64891677525907!3d27.846924076102887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3997a52d310096c1%3A0x755cd9290d7a9868!2sBista%20polyclinic!5e0!3m2!1sen!2snp!4v1747566863500!5m2!1sen!2snp" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

            </div>
            <div className="col-lg-6">
              <h2 className="fw-bold  text-center">Contact Information</h2>
              <div className="mb-3">
                <h6 className="fw-bold">Address</h6>
                <p>
                  RMW2+QH9, Sisahaniya 22400
                </p>
              </div>
              <div className="mb-3">
                <h6 className="fw-bold">Phone Number</h6>
                <p>+27 (0)12 664-0222 </p>
              </div>
              <div className="mb-3">
                <h6 className="fw-bold">Email Address</h6>
                <p> info@bistapoliclinic.co.za</p>
              </div>

              <div className="mb-2">
                <h6 className="fw-bold">
                  Working Hours</h6>
                <p> Monday - Friday: 8:00 AM - 8:00 PM</p>
                <p>Saturday: 9:00 AM - 6:00 PM</p>
                <p>Sunday: 10:00 AM - 4:00 PM</p>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-4 text-center '>
        <h6 className='text-primary'>FAQs</h6>
        <h2>Frequently Asked Questions</h2>
        <p>Find answers to common questions about our services, appointments, and policies.</p>
        
      </section>

      <section className='py-3'>
        <div className="container">
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8 shadow ">
              <h5 className='mt-2'>How do I schedule an appointment?</h5>
              <p>You can schedule an appointment by calling our appointment line at +977 01-4567890, using our online appointment form, or visiting our reception desk in person. We recommend booking at least 24 hours in advance for regular check-ups.</p>

            </div>
            <div className="col-lg-2"></div>
          </div>

          
        </div>
      </section>

            <section className='py-3'>
        <div className="container">
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8 shadow ">
              <h5 className='mt-2'>What insurance plans do you accept?</h5>
              <p>We accept most major insurance plans including NepHealth Insurance, Himalayan Care, National Health Plan, and Kathmandu Medical. Please contact our billing department for specific information about your insurance coverage.</p>

            </div>
            <div className="col-lg-2"></div>
          </div>

          
        </div>
      </section>

            <section className='py-3'>
        <div className="container">
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8 shadow ">
              <h5 className='mt-2'>What should I bring to my first appointment?</h5>
              <p>Please bring your identification, insurance card (if applicable), a list of current medications, any relevant medical records or test results, and information about your medical history. Arriving 15 minutes early to complete registration forms is recommended.</p>

            </div>
            <div className="col-lg-2"></div>
          </div>

          
        </div>
      </section>

            <section className='py-3'>
        <div className="container">
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8 shadow ">
              <h5 className='mt-2'>Do you offer telehealth services?</h5>
              <p>Yes, we offer telehealth consultations for certain types of appointments. Please call our reception to determine if your medical concern is suitable for a virtual visit and to schedule a telehealth appointment.</p>

            </div>
            <div className="col-lg-2"></div>
          </div>

          
        </div>
      </section>

                  <section className='py-3 mb-5'>
        <div className="container">
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8 shadow ">
              <h5 className='mt-2'>DWhat is your cancellation policy?</h5>
              <p>We request at least 24 hours' notice for appointment cancellations. This allows us to offer the time slot to other patients who need care. Repeated no-shows or late cancellations may result in a cancellation fee.</p>

            </div>
            <div className="col-lg-2"></div>
          </div>

          
        </div>
      </section>
    </>
  )
}

export default page
