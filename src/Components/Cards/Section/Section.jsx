import React from "react";
import "./Section.css";
import MobileImage from "../Section/SectionImage/MobileImage1.jpg";
import CountryDropdown from "../Section/CountryDropdown"


const Section = () => {
  return (
 <div className="Section-div pt-0 mb-5">
      <div className=" Section">
        <div className="container">
          <div className="Section-Box">
            <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className=" Section-Image pt-5 mt-5"><img src={MobileImage} alt="" class="mt-4" /></div>
            </div>
            <div className="col-lg-6 col-md-6 ps-5 custom-section">
              <div className="Title pt-5 mt-5">
                <h2>Your all-in-one travel app.</h2>
              </div>

              <div className="Content pt-2">
                <p>
                  Book flights, hotels, trains & rental cars anywhere in the
                  world in just seconds. Get real-time flight updates, travel
                  info, exclusive deals, and 30% more Trip Coins only on the
                  app!
                </p>
              </div>

              <div className="Section-Tabs pt-3">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button class="nav-link active id=" sms-tab data-bs-toggle="tab" data-bs-target="#sms-tab-pane" type="button role=" tab aria-controls="sms-tab-pane aria-selected=" true>
                      SMS
                    </button>
                  </li>
                  <li class="nav-item ps-2" role="presentation">
                    <button class="nav-link" id="call-tab" data-bs-toggle="tab" data-bs-target="#call-tab-pane" type="button" role="tab" aria-controls="call-tab-pane" aria-selected="false">
                      Email
                    </button>
                  </li>
                </ul>
              </div>

              <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="sms-tab-pane" role="tabpanel" aria-labelledby="sms-tab" tabindex="0">
                  <div className="Content pt-2">
                    <p>
                      Enter your phone number to receive a text with a link to
                      download the app.
                    </p>
                  </div>
                  <div className="Call-Content">
                    <CountryDropdown></CountryDropdown>
                  </div>
                  <div className="Section-Button pt-2">
                    <button className="btn" type="button">Send</button>
                  </div>
                </div>

                <div class="tab-pane fade" id="call-tab-pane" role="tabpanel" aria-labelledby="call-tab" tabindex="0">
                  <div className="Content pt-2">
                    <p>
                      The download link will be sent to your email. Please open the link and download the app using your phone.
                    </p>
                  </div>
                  <div className="Call-Content Email-Content">
                    <input type="email" placeholder="Enter your email" />
                  </div>
                  <div className="Section-Button pt-2">
                    <button className="btn Custom-Button" type="button">Send</button>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
