
import React from "react";
import "./Contact.css"



const ContactForm = () =>  {
  return (
    <div class="Contact-Form-Image ">
      <div className="container ">
      <div class="row">
        <div class="col-lg-6 col-md-12 Contact-Form align-self-center p-3">
          <h1 class="Heading mt-4">Contact Us</h1>
          {/* <!-- contact form --> */}
          <form class="custom-form">
            {/* <!-- name --> */}
            <div class="form-group ">
              <label for="name">Name</label>
              <input type="name" name="name" class="form-control mt-1" id="name" placeholder="Enter your name"/>
            </div>

            {/* <!-- email --> */}
            <div class="form-group pt-2">
              <label for="email">Email address</label>
              <input type="email" name="email"  class="form-control mt-1" id="email" placeholder="Enter your email"/>
            </div>

            {/* <!-- subject --> */}
            <div class="form-group pt-2">
              <label for="subject">Mobile No</label>
              <input type="number" name="subject" class="form-control mt-1" id="subject" placeholder="Enter mobile number"/>
            </div>

            <div class="form-group pt-2">
              <label for="email_body">Message</label>
              <textarea class="form-control mt-1" id="email_body" rows="5"></textarea>
            </div>

            <div className="Contact-Button">
            <button type="submit" class="btn mt-4 mb-5">
              Submit
            </button>
            </div>
            
          </form>
        </div>

        <div className="col-lg-6 col-md-12">
            <div className="Contact-Image mt-5">
         {/* <Image></Image> */}
            </div>
        </div> 
      </div>
      </div>
    </div>
    );
}

export default ContactForm;