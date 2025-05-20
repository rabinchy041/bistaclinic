import React from 'react'
import { VscChromeMinimize } from "react-icons/vsc";

function page() {
  return (
    <>
      <section className='py-4'>
  <div className="container">
    <div className="row">
      <div className="col-lg-6 shadow">
        <img className='w-100' src="https://media.istockphoto.com/id/457344351/photo/nurse-station.jpg?s=612x612&w=0&k=20&c=V_CyyX8pRAXDSKQ7hA9o3IsuNZfhB4GIk4uHSW0qWX4=" alt="" />


      </div>

      <div className="col-lg-6">
        <h4>Welcome to Bista Polyclinic</h4>
        
        <h2 className='text-start text-primary '><VscChromeMinimize /></h2>
        <p className=' py-1 text-secondary'>Bista Polyclinic is a premier healthcare institution committed to providing exceptional medical care with a focus on patient comfort and well-being. Our state-of-the-art facilities and cutting-edge technology ensure that you receive the best possible treatment.</p>
             <p className=' py-1 text-secondary'>With a team of highly skilled medical professionals specializing in various fields, we offer comprehensive healthcare services from preventive care to advanced treatments. Our patient-centered approach prioritizes your health needs while ensuring a supportive and healing environment.</p>

             <button className='btn bg-primary text-white'>Learn More About Us</button>

      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default page
