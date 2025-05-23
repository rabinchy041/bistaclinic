'use client'
import Image from "next/image";
import { FaFacebook, FaLinkedin, FaRegCalendarMinus } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaRegFilePdf } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";
import AppointmentPage from "./(user)/Appointment/page";
import Link from "next/link";
import { CiLocationOn, CiMail, CiTwitter } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { IoLogoInstagram } from "react-icons/io";
import DoctorPage from "./(user)/Docter/page";
import AddNewsPage from "./(user)/News/page";
import { useEffect, useState } from "react";
import Header from "./(user)/com/Header";
import Footer from "./(user)/com/Footer";




export default function Home() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsAdminLoggedIn(localStorage.getItem("isAdmin") === "true");
    }
  }, []);

  return (
    <>
     <Header/>

     
      <section className="py-3 ">
        <div className="row">
          <img
            className="w-100 mt-2 r"
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080"
            alt=""
          />
        </div>
      </section>

      <section className="py-2 n bg-ligh mt-2">
        <div className="container  ">
          <h2 className="text-center text-info-emphasis">My Services</h2>
          <p className="text-center text-secondary">
            Comprehensive digital marketing solutions for your business
          </p>

          <div className="row  text-center  ">
            <div className="col-lg-3  shadow n">
              <h3 className="text-primary mt-2">
                <FaRegCalendarMinus />
              </h3>
              <h5 className="mt-2"> Book Appointment</h5>
              <p>Schedule a visit with our specialists</p>
            </div>

            <div className="col-lg-3 shadow ms-4 n ">
              <h3 className="text-success mt-2">
                <FaRegFilePdf />
              </h3>
              <h5>Our Services </h5>
              <p>Explore our comprehensive care services</p>
            </div>
            <div className="col-lg ms-4 shadow n ">
              <h3 className="text-primary mt-2">
                <MdManageAccounts />
              </h3>
              <h5>Our Doctors </h5>
              <p>Meet our experienced specialists</p>
            </div>

            <div className="col-lg ms-4 shadow s ">
              <h3 className="text-danger mt-2">
                <FaBuilding />
              </h3>
              <h5 className="mt-2"> About Clinic</h5>
              <p>Learn about our facility and history</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 mt-3">
        <div className="container shadow">
          <div className="row">
            <div className="col-lg-6">
              <h2>
                Providing Quality Healthcare <br />
                Since 2005
              </h2>
              <p className="py-2">
                Bista Polyclinic is a premier healthcare provider committed to
                delivering exceptional medical services. With a team of
                specialized doctors and state-of-the-art facilities, we ensure
                that our patients receive the highest quality of care.
              </p>

              <p>
                Our mission is to improve the health and wellbeing of the
                communities we serve. We provide patient-centered care with
                compassion, excellence, and integrity.
              </p>

              <div className="row">
                <div className="col-lg-6">
                  <h6>Qualified Doctor</h6>
                </div>
                <div className="col-lg-6">
                  <h6>Emergency Services</h6>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6">
                  <h6>Mordern Equipment</h6>
                </div>
                <div className="col-lg-6">
                  <h6>Patient-centered care</h6>
                </div>
              </div>
              <button className="btn bg-primary text-white mt-2 mb-2">
                Learn more
              </button>
            </div>
            <div className="col-lg-6">
              <button className="btn text-white bg-primary wrk-exp">
                {" "}
                <h2>15+</h2>
                <p>Years Of experience</p>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 shadow">
              <img
                className="w-100"
                src="https://media.istockphoto.com/id/457344351/photo/nurse-station.jpg?s=612x612&w=0&k=20&c=V_CyyX8pRAXDSKQ7hA9o3IsuNZfhB4GIk4uHSW0qWX4="
                alt=""
              />
            </div>

            <div className="col-lg-6">
              <h4>Welcome to Bista Polyclinic</h4>

              <hr />
              <p className=" py-1 text-secondary">
                Bista Polyclinic is a premier healthcare institution committed
                to providing exceptional medical care with a focus on patient
                comfort and well-being. Our state-of-the-art facilities and
                cutting-edge technology ensure that you receive the best
                possible treatment.
              </p>
              <p className=" py-1 text-secondary">
                With a team of highly skilled medical professionals specializing
                in various fields, we offer comprehensive healthcare services
                from preventive care to advanced treatments. Our
                patient-centered approach prioritizes your health needs while
                ensuring a supportive and healing environment.
              </p>

              <button className="btn bg-primary text-white">
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </section>


     {/* news section */}
      <AddNewsPage/>
      {/* news section */}

      <section className="py-4">
        <div className="  row  bg-primary text-center v">
          <div className="col-lg-6 mt-5 text-white">
            <h2 className="fw-bold">Need Urgent Medical Attention?</h2>
            <p>
              Our emergency services are available 24/7 for your urgent
              healthcare needs.
            </p>
          </div>
          <div className="col-lg-6">
            <button className="btn bg-light  border-box mt-5">
              Contact Us{" "}
            </button>
            <button className="btn text-white   border-white ms-3 mt-5">
              Emergency: +977 9898989898{" "}
            </button>
          </div>
        </div>
      </section>

    {/* Doctor section */}
     <DoctorPage/>
  {/* Doctor section */}
       <AppointmentPage/>

      <section className="py-3">
        <div className="container">
          <h2 className="text-center mt-3">Health Tips & News</h2>
          <p className="text-center mt-3">
            Stay informed with the latest health news, medical breakthroughs,
            and wellness tips from our experts.
          </p>
          <div className="row mt-4">
            <div className="col-lg-4 shadow ">
              <img
                className="w-100"
                src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500"
                alt=""
              />
              <p className=" text-center mt-2">
                August 15, 2023 | Dr. Rahul Sharma
              </p>
              <h3>COVID-19 Vaccination Update: What You Need to Know</h3>
              <p>
                Stay informed about the latest developments in COVID-19
                vaccinations and booster shots available at our clinic.
              </p>
              <button className="btn bg-primary text-white mt-2 mb-2">
                Read More
              </button>
            </div>

            <div className="col-lg-4 shadow ">
              <img
                className="w-100"
                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500"
                alt=""
              />
              <p className="text-center mt-2">
                August 10, 2023 | Dr. Anita Patel
              </p>
              <h3>Nutrition Tips for Building a Stronger Immune System</h3>
              <p>
                Discover how proper nutrition can help strengthen your immune
                system and improve your overall health.
              </p>
              <button className="btn bg-primary text-white mt-2 mb-2">
                Read More
              </button>
            </div>

            <div className="col-lg-4 shadow ">
              <img
                className="w-100"
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500"
                alt=""
              />
              <p className="text-center mt-2">
                August 5, 2023 | Dr. Bijay Thapa
              </p>
              <h3>Mental Health Awareness: Breaking the Stigma</h3>
              <p>
                Learn about the importance of mental health care and the
                resources available at our clinic to support you.
              </p>
              <button className="btn bg-primary text-white mt-2 mb-2">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4">
        <div className="container">
          <h3 className=" text-center">Our Location</h3>
          <p className=" text-center">
            We are conveniently located in the heart of Sisahaniya, easily
            accessible by public transportation.
          </p>
          <div className="row">
            <div className="col-lg-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3527.7922416854162!2d82.64891677525907!3d27.846924076102887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3997a52d310096c1%3A0x755cd9290d7a9868!2sBista%20polyclinic!5e0!3m2!1sen!2snp!4v1747566863500!5m2!1sen!2snp"
                width={600}
                height={450}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="fw-bold  text-center">Contact Information</h2>
              <div className="mb-3">
                <h6 className="fw-bold">Address</h6>
                <p>RMW2+QH9, Sisahaniya 22400</p>
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
                <h6 className="fw-bold">Working Hours</h6>
                <p> Monday - Friday: 8:00 AM - 8:00 PM</p>
                <p>Saturday: 9:00 AM - 6:00 PM</p>
                <p>Sunday: 10:00 AM - 4:00 PM</p>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-3 text-center ">
        <div className=" shadow  bg1">
          <h2 className="text-white py-3 ">
            Ready to Schedule an Appointment?
          </h2>

          <p className="py-1 text-white ">
            Our team of healthcare professionals is ready to provide you with
            exceptional care. Book an appointment today.
          </p>

          <button className="btn bg-primary text-white mb-2 ">
            Book Appointment
          </button>
        </div>
      </section>
        <footer className="text-white bg-primary pt-4">
      {/* Top Social Icons */}
     

      {/* Footer Content */}
        <Footer/>


      {/* Footer Bottom */}
      <div className="text-center py-3 bg-dark">
        <small>© 2025 Bista Polyclinic. All Rights Reserved.</small>
      </div>
    </footer>
    </>
  );
}
