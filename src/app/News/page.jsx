import React from 'react'

function page() {
  return (
    <>
       <section className="py-3">
        <div className="container">

          <h2 className="text-center mt-3">Health Tips & News</h2>
          <p className="text-center mt-3">Stay informed with the latest health news, medical breakthroughs, and wellness tips from our experts.</p>
          <div className="row mt-4">
            <div className="col-lg-4 shadow ">
              <img className="w-100" src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" alt="" />
              <p className=" text-center mt-2">August 15, 2023
                |
                Dr. Rahul Sharma</p>
              <h3>COVID-19 Vaccination Update: What You Need to Know</h3>
              <p>Stay informed about the latest developments in COVID-19 vaccinations and booster shots available at our clinic.</p>
              <button className="btn bg-primary text-white mt-2 mb-2">Read More</button>
            </div>

            <div className="col-lg-4 shadow ">
              <img className="w-100" src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" alt="" />
              <p className="text-center mt-2">August 10, 2023
                |
                Dr. Anita Patel</p>
              <h3>Nutrition Tips for Building a Stronger Immune System</h3>
              <p>Discover how proper nutrition can help strengthen your immune system and improve your overall health.</p>
              <button className="btn bg-primary text-white mt-2 mb-2">Read More</button>
            </div>


            <div className="col-lg-4 shadow ">
              <img className="w-100" src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" alt="" />
              <p className="text-center mt-2">August 5, 2023
                |
                Dr. Bijay Thapa</p>
              <h3>Mental Health Awareness: Breaking the Stigma</h3>
              <p>Learn about the importance of mental health care and the resources available at our clinic to support you.</p>
              <button className="btn bg-primary text-white mt-2 mb-2">Read More</button>
            </div>
          </div>
          <div className="row">
            <div className="col-lg text-center">
              <button className="btn bg-primary  text-white border-box mt-4">View All Doctor </button>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default page
