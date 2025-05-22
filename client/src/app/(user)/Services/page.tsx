import React from 'react'
import { FaArrowRight } from "react-icons/fa";

function page() {
  return (
    <>
     <section className="py-3">
             <div className="row ">
               <h3 className="fw-bold text-center mt-2">Our Services</h3>
               <p className="text-center mt-3 ">We offer a wide range of medical services to meet all your healthcare needs. Our specialized<br /> departments provide comprehensive care with the latest medical technologies.</p>
             </div>
             <div className="row ">
               <div className="col-lg-4 text-light  p-3 shadow">
                 <img className='w-100 m ' src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" alt="" />
                 <h2 className='text-dark g-10 m-2'>General Medicine</h2>
                 <p className='text-secondary m-2'>Comprehensive care for adults including diagnosis, treatment, and prevention of diseases and conditions.</p>
                 <button className="btn text-primary  m-2">Learn More<FaArrowRight className="m-2" /></button>
               </div>
     
               <div className="col-lg-4 text-light  p-3 shadow">
                 <img className='w-100 m ' src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" alt="" />
                 <h2 className='text-dark g-10'>Pediatric Care</h2>
                 <p className='text-secondary'>Specialized healthcare for infants, children, and adolescents, focusing on growth and development.</p>
                 <button className="btn text-primary">Learn More<FaArrowRight className="m-2" /></button>
               </div>
     
               <div className="col-lg-4 text-light  p-3 shadow ">
                 <img className='w-100 m ' src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" alt="" />
                 <h2 className='text-dark g-10'>Dental Care</h2>
                 <p className='text-secondary'>Complete oral health services including preventive care, restorative treatments, and cosmetic procedures.</p>
                 <button className="btn text-primary">Learn More<FaArrowRight className="m-2" /></button>
               </div>
               <div className="row">
                 <div className="col-lg text-center">
                   <button className="btn bg-primary  text-white border-box mt-4">View All Service </button>
     
                 </div>
               </div>
             </div>
     
           </section>
    </>
  )
}

export default page
