import React from 'react'

function page() {
  return (
    <>
      
      
      <section className="py-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <p className=" text-primary">Book an Appointment</p>
              <h3 className="fw-bold">Schedule Your Visit</h3>
              <div className="row">
                <div className="col-lg-6">
                  <form>
                    <fieldset disabled>
                      <div className="mb-3">
                        <label htmlFor="Full Name" className="form-label">Full Name</label>
                        <input type="text" id="dsbvhg" className="form-control" placeholder="kfdjhd" />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="Email Address" className="form-label">Email Address</label>
                        <select id="disabledSelect" className="form-select">
                          <option>Disabled select</option>
                        </select>
                      </div>
                    </fieldset>
                  </form>
                </div>
                <div className="col-lg-6">
                  <form>
                    <fieldset disabled>
                      <div className="mb-3">
                        <label htmlFor="Phone Number" className="form-label">Phone Number</label>
                        <input type="text" id="disabledTextInput" className="form-control" placeholder="98xxxxxxxx" />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Preferred Date</label>
                        <select className="form-select">
                          <option>Preferred Date</option>
                          <option>Preferred Date</option>
                        </select>
                      </div>
                    </fieldset>
                  </form>


                </div>
                <div>
                  <label htmlFor="exampleDataList" className="form-label">Department</label>
                  <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Select Deparment" />
                  <datalist id="datalistOptions">
                    <option value="San Francisco">
                    </option><option value="New York">
                    </option><option value="Seattle">
                    </option><option value="Los Angeles">
                    </option><option value="Chicago">
                    </option></datalist>
                </div>

                <div className="mb-3 py-3">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">Massage (Optional)</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                </div>
                <button className="btn bg-primary  text-white border-box mt-2">View All Doctor </button>
              </div>
            </div>
            <div className="col-lg-6 shadow">
              <img className='w-100' src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600 " alt="" />

              <h4 className='fw-bold py-3'> Working Hours </h4>

              <div className="row">
                <div className="col-lg-6">
                  <h6>Monday-Friday</h6>

                </div>
                <div className="col-lg-6">
                  <h6 className='text-end'>8:00AM-8:00PM</h6>

                </div>
                <div className="row">
                  <div className="col-lg-0">

                  </div>
                  <div className="col-lg-12">
                    <hr />

                  </div>
                  <div className="col-lg-0">

                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6">
                  <h6>Saturday</h6>

                </div>
                <div className="col-lg-6">
                  <h6 className='text-end'>9:00AM-6:00PM</h6>

                </div>
                <div className="row">
                  <div className="col-lg-0">

                  </div>
                  <div className="col-lg-12">
                    <hr />

                  </div>
                  <div className="col-lg-0">

                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6">
                  <h6>Sunday</h6>

                </div>
                <div className="col-lg-6">
                  <h6 className='text-end'>10:00AM-4:00PM</h6>

                </div>
                <div className="row">
                  <div className="col-lg-0">

                  </div>
                  <div className="col-lg-12">
                    <hr />

                  </div>
                  <div className="col-lg-0">

                  </div>
                </div>
              </div>


              <div className="row">
                <div className="col-lg-6">
                  <h6 className='text-success'>Emergency Services</h6>

                </div>
                <div className="col-lg-6">
                  <h6 className='text-end text-success'>24/7</h6>

                </div>
                <div className="row">
                  <div className="col-lg-0">

                  </div>
                  <div className="col-lg-12">
                    <hr />

                  </div>
                  <div className="col-lg-0">

                  </div>
                </div>
                <div className="row">

                  <h6>Need Help?</h6>
                  <p>For any queries regarding application or Emergencies, Please call:</p>
                  <h5 className='text-primary'>‪+977 9812345678‬</h5>


                </div>



              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default page
