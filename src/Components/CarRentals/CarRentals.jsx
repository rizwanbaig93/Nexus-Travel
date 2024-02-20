import React from "react";
import "./CarRentals.css"
import Image1 from "../CarRentals/CarImages/image1.png"
import Image2 from "../CarRentals/CarImages/image2.png"
import Image3 from "../CarRentals/CarImages/image3.png"
import Image4 from "../CarRentals/CarImages/image4.png"
import StarIcon from '@mui/icons-material/Star';
import ACEImage from "../CarRentals/CarImages/image5.png"
import CarIcon1 from "../CarRentals/CarImages/CarIcon1.png"
import CarIcon2 from "../CarRentals/CarImages/CarIcon2.png"
import CarIcon3 from "../CarRentals/CarImages/CarIcon3.png"
import BookingForm from "../Cards/BookingForm/Booking"
import OwlCarousel from 'react-owl-carousel';

const options = {
  margin: 10,
  responsiveClass: true,
  nav: true,
  dot:true,
  autoplay: false,
  navText: ["<", ">"],
  smartSpeed: 1000,
  responsive: {
      0: {
          items: 1,
      },
      400: {
          items: 1,
      },
      600: {
          items: 2,
      },
      700: {
          items: 2,
      },
      1000: {
          items: 3,
      },
      1440: {
        items: 4,
    }
  },
};


const CarRentals = () => {
    return (
        <div  className="Car-Image pb-3">
            <div className="container">
                <div className="Card-Heading p-3">
                    <div className="Heading pt-4">
                    <h2>Umrah Packages</h2>
                    </div>
                    <div className="d-flex Heading-Content pt-1">
                      <div><h6 className="custom-destination-h6"><img  src={CarIcon1}  alt="" className="Icon-Width"/>Free Cancellations</h6></div>
                      <div className="Heading-Icon"><h6 className="custom-destination-h6"><img  src={CarIcon2}  alt="" className="Icon-Width"/>No Credit Card Fees</h6></div>
                      <div><h6 className="custom-destination-h6"><img  src={CarIcon3}  alt="" className="Icon-Width"/>Service You Can Rely On</h6></div>
                    </div>
                </div>

                <div className="Card-Tabs Rental-Card-Tabs p-1 pt-0">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                 <li class="nav-item" role="presentation">
                   <button class="nav-link custom-car-navlink active" id="CarNewyork-tab" data-bs-toggle="tab" data-bs-target="#CarNewyork-tab-pane" type="button" role="tab" aria-controls="CarNewyork-tab-pane" aria-selected="true">UAE</button>
                 </li>
                 <li class="nav-item" role="presentation">
                   <button class="nav-link custom-car-navlink" id="CarLosangles-tab" data-bs-toggle="tab" data-bs-target="#CarLosangles-tab-pane" type="button" role="tab" aria-controls="CarLosangles-tab-pane" aria-selected="false">Bahrain</button>
                 </li>
                 <li class="nav-item" role="presentation">
                   <button class="nav-link custom-car-navlink" id="CarOrlando-tab" data-bs-toggle="tab" data-bs-target="#CarOrlando-tab-pane" type="button" role="tab" aria-controls="CarOrlando-tab-pane" aria-selected="false">Kuwait</button>
                 </li>
                 <li class="nav-item" role="presentation">
                   <button class="nav-link custom-car-navlink" id="CarTokyo-tab" data-bs-toggle="tab" data-bs-target="#CarTokyo-tab-pane" type="button" role="tab" aria-controls="CarTokyo-tab-pane" aria-selected="false">Qatar</button>
                 </li>
                 <li class="nav-item" role="presentation">
                   <button class="nav-link custom-car-navlink" id="CarShanghai-tab" data-bs-toggle="tab" data-bs-target="#CarShanghai-tab-pane" type="button" role="tab" aria-controls="CarShanghai-tab-pane" aria-selected="false">Egypt</button>
                 </li>
                 <li class="nav-item" role="presentation">
                   <button class="nav-link custom-car-navlink" id="CarPhuket-tab" data-bs-toggle="tab" data-bs-target="#CarPhuket-tab-pane" type="button" role="tab" aria-controls="CarPhuket-tab-pane" aria-selected="false">Oman</button>
                 </li>
                 <li class="nav-item" role="presentation">
                   <button class="nav-link custom-car-navlink" id="CarSeoul-tab" data-bs-toggle="tab" data-bs-target="#CarSeoul-tab-pane" type="button" role="tab" aria-controls="CarSeoul-tab-pane" aria-selected="false">Saudi Arabia</button>
                 </li>
                 <li class="nav-item" role="presentation">
                   <button class="nav-link custom-car-navlink" id="CarOsaka-tab" data-bs-toggle="tab" data-bs-target="#CarOsaka-tab-pane" type="button" role="tab" aria-controls="CarOsaka-tab-pane" aria-selected="false">Iraq</button>
                 </li>
               </ul>
                </div>

                <div class="tab-content  p-3 " id="myTabContent">
                 <div class="tab-pane Card-Content fade show active" id="CarNewyork-tab-pane" role="tabpanel" aria-labelledby="CarNewyork-tab" tabindex="0">
                 <div class="row ">
                   <OwlCarousel className="Umrah-Carousel  Flight-Carousel" {...options}>
                 <div class=" custom-mobile">
               <div class="post-module card-width">
                 <div class="thumbnail">
                   <div class="date">
                     <div class="day">27</div>
                     <div class="month">Mar</div>
                   </div>
                   <div className="Card-Img">
                   <img src={Image1}/>
                   </div>
                 </div>
                 <div class="post-content">
                   <div class="category">Photos</div>
                   <h2 class="sub_title">Ramzan Umrah Package</h2>
                   <p class="Rental-card-content">
                   We are offering best value 21 Days Umrah package in Lahore. Our package includes, direct airline ticket, complete transportation, quick Umrah visa processing and great customer assitance in Saudi Arabia.
                    </p>
                    <div className="d-flex align-items-baseline justify-content-between">
          <div className="Rental-Card-Icons">
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
        </div>
        <div className="Card-Reviews">
          <p>354 reviews </p>
        </div>
        </div>
        <div className="d-flex Card-Rating">
        <div className="Rental-Rating-Point">
          <p>4.3 <span>/5</span></p>
        </div>
        </div>
        <div className="Card-price mt-1">
          <div><span>From</span></div>
          <div className="ps-1"><h5>US$192</h5></div>
        </div>
        <div className="Rental-Card-Button">
        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button>
            </div>
                 </div>
               </div>
                 </div>

                 <div class=" custom-mobile">
               <div class="post-module card-width">
                 <div class="thumbnail">
                   <div class="date">
                     <div class="day">27</div>
                     <div class="month">Mar</div>
                   </div>
                   <div className="Card-Img">
                   <img src={Image2}/>
                   </div>
                 </div>
                 <div class="post-content">
                   <div class="category">Photos</div>
                   <h2 class="sub_title">Shab-e-Barat Umrah Package</h2>
                   <p class="Rental-card-content">
                   We are offering best value 21 Days Umrah package in Lahore. Our package includes, direct airline ticket, complete transportation, quick Umrah visa processing and great customer assitance in Saudi Arabia.
                    </p>
                    <div className="d-flex align-items-baseline justify-content-between">
          <div className="Rental-Card-Icons">
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
        </div>
        <div className="Card-Reviews">
          <p>354 reviews </p>
        </div>
        </div>
        <div className="d-flex Card-Rating">
        <div className="Rental-Rating-Point">
          <p>4.3 <span>/5</span></p>
        </div>
        </div>
        <div className="Card-price mt-1">
          <div><span>From</span></div>
          <div className="ps-1"><h5>US$192</h5></div>
        </div>
        <div className="Rental-Card-Button">
        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button>
            </div>
                 </div>
               </div>
                 </div>

                 <div class=" custom-mobile">
               <div class="post-module card-width">
                 <div class="thumbnail">
                   <div class="date">
                     <div class="day">27</div>
                     <div class="month">Mar</div>
                   </div>
                   <div className="Card-Img">
                   <img src={Image3}/>
                   </div>
                 </div>
                 <div class="post-content">
                   <div class="category">Photos</div>
                   <h2 class="sub_title">First Ashra Ramzan Package</h2>
                   <p class="Rental-card-content">
                   We are offering best value 21 Days Umrah package in Lahore. Our package includes, direct airline ticket, complete transportation, quick Umrah visa processing and great customer assitance in Saudi Arabia.
                    </p>
                    <div className="d-flex align-items-baseline justify-content-between">
          <div className="Rental-Card-Icons">
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
        </div>
        <div className="Card-Reviews">
          <p>354 reviews </p>
        </div>
        </div>
        <div className="d-flex Card-Rating">
        <div className="Rental-Rating-Point">
          <p>4.3 <span>/5</span></p>
        </div>
        </div>
        <div className="Card-price mt-1">
          <div><span>From</span></div>
          <div className="ps-1"><h5>US$192</h5></div>
        </div>
        <div className="Rental-Card-Button">
              <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button>
            </div>
                 </div>
               </div>
                 </div>
  
                 <div class=" custom-mobile">
               <div class="post-module card-width">
                 <div class="thumbnail">
                   <div class="date">
                     <div class="day">27</div>
                     <div class="month">Mar</div>
                   </div>
                   <div className="Card-Img">
                   <img src={Image4}/>
                   </div>
                 </div>
                 <div class="post-content">
                   <div class="category">Photos</div>
                   <h2 class="sub_title">Premium Umrah Package</h2>
                   <p class="Rental-card-content">
                   We are offering best value 21 Days Umrah package in Lahore. Our package includes, direct airline ticket, complete transportation, quick Umrah visa processing and great customer assitance in Saudi Arabia.
                    </p>
                    <div className="d-flex align-items-baseline justify-content-between">
          <div className="Rental-Card-Icons">
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
        </div>
        <div className="Card-Reviews">
          <p>354 reviews </p>
        </div>
        </div>
        <div className="d-flex Card-Rating">
        <div className="Rental-Rating-Point">
          <p>4.3 <span>/5</span></p>
        </div>
        </div>
        <div className="Card-price mt-1">
          <div><span>From</span></div>
          <div className="ps-1"><h5>US$192</h5></div>
        </div>
        <div className="Rental-Card-Button">
             <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button>
            </div>
                 </div>
               </div>
                 </div>

                 <div class=" custom-mobile">
               <div class="post-module card-width">
                 <div class="thumbnail">
                   <div class="date">
                     <div class="day">27</div>
                     <div class="month">Mar</div>
                   </div>
                   <div className="Card-Img">
                   <img src={Image3}/>
                   </div>
                 </div>
                 <div class="post-content">
                   <div class="category">Photos</div>
                   <h2 class="sub_title">First Ashra Ramzan Package</h2>
                   <p class="Rental-card-content">
                   We are offering best value 21 Days Umrah package in Lahore. Our package includes, direct airline ticket, complete transportation, quick Umrah visa processing and great customer assitance in Saudi Arabia.
                    </p>
                    <div className="d-flex align-items-baseline justify-content-between">
          <div className="Rental-Card-Icons">
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
        </div>
        <div className="Card-Reviews">
          <p>354 reviews </p>
        </div>
        </div>
        <div className="d-flex Card-Rating">
        <div className="Rental-Rating-Point">
          <p>4.3 <span>/5</span></p>
        </div>
        </div>
        <div className="Card-price mt-1">
          <div><span>From</span></div>
          <div className="ps-1"><h5>US$192</h5></div>
        </div>
        <div className="Rental-Card-Button">
              <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button>
            </div>
                 </div>
               </div>
                 </div>
  
                 <div class=" custom-mobile">
               <div class="post-module card-width">
                 <div class="thumbnail">
                   <div class="date">
                     <div class="day">27</div>
                     <div class="month">Mar</div>
                   </div>
                   <div className="Card-Img">
                   <img src={Image4}/>
                   </div>
                 </div>
                 <div class="post-content">
                   <div class="category">Photos</div>
                   <h2 class="sub_title">Premium Umrah Package</h2>
                   <p class="Rental-card-content">
                   We are offering best value 21 Days Umrah package in Lahore. Our package includes, direct airline ticket, complete transportation, quick Umrah visa processing and great customer assitance in Saudi Arabia.
                    </p>
                    <div className="d-flex align-items-baseline justify-content-between">
          <div className="Rental-Card-Icons">
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
        </div>
        <div className="Card-Reviews">
          <p>354 reviews </p>
        </div>
        </div>
        <div className="d-flex Card-Rating">
        <div className="Rental-Rating-Point">
          <p>4.3 <span>/5</span></p>
        </div>
        </div>
        <div className="Card-price mt-1">
          <div><span>From</span></div>
          <div className="ps-1"><h5>US$192</h5></div>
        </div>
        <div className="Rental-Card-Button">
             <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button>
            </div>
                 </div>
               </div>
                 </div>
                 </OwlCarousel> 
                </div>
                 </div>

                 <div class="tab-pane fade" id="CarLosangles-tab-pane" role="tabpanel" aria-labelledby="CarLosangles-tab" tabindex="0">
                   <div class="row ">
                   <OwlCarousel className="Umrah-Carousel  Flight-Carousel" {...options}>
                 <div class=" custom-mobile">
               <div class="post-module card-width">
                 <div class="thumbnail">
                   <div class="date">
                     <div class="day">27</div>
                     <div class="month">Mar</div>
                   </div>
                   <div className="Card-Img">
                   <img src={Image1}/>
                   </div>
                 </div>
                 <div class="post-content">
                   <div class="category">Photos</div>
                   <h2 class="sub_title">Ramzan Umrah Package</h2>
                   <p class="Rental-card-content">
                   We are offering best value 21 Days Umrah package in Lahore. Our package includes, direct airline ticket, complete transportation, quick Umrah visa processing and great customer assitance in Saudi Arabia.
                    </p>
                    <div className="d-flex align-items-baseline justify-content-between">
          <div className="Rental-Card-Icons">
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
        </div>
        <div className="Card-Reviews">
          <p>354 reviews </p>
        </div>
        </div>
        <div className="d-flex Card-Rating">
        <div className="Rental-Rating-Point">
          <p>4.3 <span>/5</span></p>
        </div>
        </div>
        <div className="Card-price mt-1">
          <div><span>From</span></div>
          <div className="ps-1"><h5>US$192</h5></div>
        </div>
        <div className="Rental-Card-Button">
        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button>
            </div>
                 </div>
               </div>
                 </div>

                 <div class=" custom-mobile">
               <div class="post-module card-width">
                 <div class="thumbnail">
                   <div class="date">
                     <div class="day">27</div>
                     <div class="month">Mar</div>
                   </div>
                   <div className="Card-Img">
                   <img src={Image2}/>
                   </div>
                 </div>
                 <div class="post-content">
                   <div class="category">Photos</div>
                   <h2 class="sub_title">Shab-e-Barat Umrah Package</h2>
                   <p class="Rental-card-content">
                   We are offering best value 21 Days Umrah package in Lahore. Our package includes, direct airline ticket, complete transportation, quick Umrah visa processing and great customer assitance in Saudi Arabia.
                    </p>
                    <div className="d-flex align-items-baseline justify-content-between">
          <div className="Rental-Card-Icons">
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
        </div>
        <div className="Card-Reviews">
          <p>354 reviews </p>
        </div>
        </div>
        <div className="d-flex Card-Rating">
        <div className="Rental-Rating-Point">
          <p>4.3 <span>/5</span></p>
        </div>
        </div>
        <div className="Card-price mt-1">
          <div><span>From</span></div>
          <div className="ps-1"><h5>US$192</h5></div>
        </div>
        <div className="Rental-Card-Button">
        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button>
            </div>
                 </div>
               </div>
                 </div>

                 <div class=" custom-mobile">
               <div class="post-module card-width">
                 <div class="thumbnail">
                   <div class="date">
                     <div class="day">27</div>
                     <div class="month">Mar</div>
                   </div>
                   <div className="Card-Img">
                   <img src={Image3}/>
                   </div>
                 </div>
                 <div class="post-content">
                   <div class="category">Photos</div>
                   <h2 class="sub_title">First Ashra Ramzan Package</h2>
                   <p class="Rental-card-content">
                   We are offering best value 21 Days Umrah package in Lahore. Our package includes, direct airline ticket, complete transportation, quick Umrah visa processing and great customer assitance in Saudi Arabia.
                    </p>
                    <div className="d-flex align-items-baseline justify-content-between">
          <div className="Rental-Card-Icons">
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
        </div>
        <div className="Card-Reviews">
          <p>354 reviews </p>
        </div>
        </div>
        <div className="d-flex Card-Rating">
        <div className="Rental-Rating-Point">
          <p>4.3 <span>/5</span></p>
        </div>
        </div>
        <div className="Card-price mt-1">
          <div><span>From</span></div>
          <div className="ps-1"><h5>US$192</h5></div>
        </div>
        <div className="Rental-Card-Button">
              <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button>
            </div>
                 </div>
               </div>
                 </div>
  
                 <div class=" custom-mobile">
               <div class="post-module card-width">
                 <div class="thumbnail">
                   <div class="date">
                     <div class="day">27</div>
                     <div class="month">Mar</div>
                   </div>
                   <div className="Card-Img">
                   <img src={Image4}/>
                   </div>
                 </div>
                 <div class="post-content">
                   <div class="category">Photos</div>
                   <h2 class="sub_title">Premium Umrah Package</h2>
                   <p class="Rental-card-content">
                   We are offering best value 21 Days Umrah package in Lahore. Our package includes, direct airline ticket, complete transportation, quick Umrah visa processing and great customer assitance in Saudi Arabia.
                    </p>
                    <div className="d-flex align-items-baseline justify-content-between">
          <div className="Rental-Card-Icons">
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
        </div>
        <div className="Card-Reviews">
          <p>354 reviews </p>
        </div>
        </div>
        <div className="d-flex Card-Rating">
        <div className="Rental-Rating-Point">
          <p>4.3 <span>/5</span></p>
        </div>
        </div>
        <div className="Card-price mt-1">
          <div><span>From</span></div>
          <div className="ps-1"><h5>US$192</h5></div>
        </div>
        <div className="Rental-Card-Button">
             <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button>
            </div>
                 </div>
               </div>
                 </div>
                 </OwlCarousel> 
                </div>
                 </div>

                 <div class="tab-pane fade" id="CarOrlando-tab-pane" role="tabpanel" aria-labelledby="CarOrlando-tab" tabindex="0">
                  <div class="row ">
                   <OwlCarousel className="Umrah-Carousel  Flight-Carousel" {...options}>
                 <div class=" custom-mobile">
               <div class="post-module card-width">
                 <div class="thumbnail">
                   <div class="date">
                     <div class="day">27</div>
                     <div class="month">Mar</div>
                   </div>
                   <div className="Card-Img">
                   <img src={Image1}/>
                   </div>
                 </div>
                 <div class="post-content">
                   <div class="category">Photos</div>
                   <h2 class="sub_title">Ramzan Umrah Package</h2>
                   <p class="Rental-card-content">
                   We are offering best value 21 Days Umrah package in Lahore. Our package includes, direct airline ticket, complete transportation, quick Umrah visa processing and great customer assitance in Saudi Arabia.
                    </p>
                    <div className="d-flex align-items-baseline justify-content-between">
          <div className="Rental-Card-Icons">
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
        </div>
        <div className="Card-Reviews">
          <p>354 reviews </p>
        </div>
        </div>
        <div className="d-flex Card-Rating">
        <div className="Rental-Rating-Point">
          <p>4.3 <span>/5</span></p>
        </div>
        </div>
        <div className="Card-price mt-1">
          <div><span>From</span></div>
          <div className="ps-1"><h5>US$192</h5></div>
        </div>
        <div className="Rental-Card-Button">
        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button>
            </div>
                 </div>
               </div>
                 </div>

                 <div class=" custom-mobile">
               <div class="post-module card-width">
                 <div class="thumbnail">
                   <div class="date">
                     <div class="day">27</div>
                     <div class="month">Mar</div>
                   </div>
                   <div className="Card-Img">
                   <img src={Image2}/>
                   </div>
                 </div>
                 <div class="post-content">
                   <div class="category">Photos</div>
                   <h2 class="sub_title">Shab-e-Barat Umrah Package</h2>
                   <p class="Rental-card-content">
                   We are offering best value 21 Days Umrah package in Lahore. Our package includes, direct airline ticket, complete transportation, quick Umrah visa processing and great customer assitance in Saudi Arabia.
                    </p>
                    <div className="d-flex align-items-baseline justify-content-between">
          <div className="Rental-Card-Icons">
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
        </div>
        <div className="Card-Reviews">
          <p>354 reviews </p>
        </div>
        </div>
        <div className="d-flex Card-Rating">
        <div className="Rental-Rating-Point">
          <p>4.3 <span>/5</span></p>
        </div>
        </div>
        <div className="Card-price mt-1">
          <div><span>From</span></div>
          <div className="ps-1"><h5>US$192</h5></div>
        </div>
        <div className="Rental-Card-Button">
        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button>
            </div>
                 </div>
               </div>
                 </div>

                 <div class=" custom-mobile">
               <div class="post-module card-width">
                 <div class="thumbnail">
                   <div class="date">
                     <div class="day">27</div>
                     <div class="month">Mar</div>
                   </div>
                   <div className="Card-Img">
                   <img src={Image3}/>
                   </div>
                 </div>
                 <div class="post-content">
                   <div class="category">Photos</div>
                   <h2 class="sub_title">First Ashra Ramzan Package</h2>
                   <p class="Rental-card-content">
                   We are offering best value 21 Days Umrah package in Lahore. Our package includes, direct airline ticket, complete transportation, quick Umrah visa processing and great customer assitance in Saudi Arabia.
                    </p>
                    <div className="d-flex align-items-baseline justify-content-between">
          <div className="Rental-Card-Icons">
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
        </div>
        <div className="Card-Reviews">
          <p>354 reviews </p>
        </div>
        </div>
        <div className="d-flex Card-Rating">
        <div className="Rental-Rating-Point">
          <p>4.3 <span>/5</span></p>
        </div>
        </div>
        <div className="Card-price mt-1">
          <div><span>From</span></div>
          <div className="ps-1"><h5>US$192</h5></div>
        </div>
        <div className="Rental-Card-Button">
              <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button>
            </div>
                 </div>
               </div>
                 </div>
  
                 <div class=" custom-mobile">
               <div class="post-module card-width">
                 <div class="thumbnail">
                   <div class="date">
                     <div class="day">27</div>
                     <div class="month">Mar</div>
                   </div>
                   <div className="Card-Img">
                   <img src={Image4}/>
                   </div>
                 </div>
                 <div class="post-content">
                   <div class="category">Photos</div>
                   <h2 class="sub_title">Premium Umrah Package</h2>
                   <p class="Rental-card-content">
                   We are offering best value 21 Days Umrah package in Lahore. Our package includes, direct airline ticket, complete transportation, quick Umrah visa processing and great customer assitance in Saudi Arabia.
                    </p>
                    <div className="d-flex align-items-baseline justify-content-between">
          <div className="Rental-Card-Icons">
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
        </div>
        <div className="Card-Reviews">
          <p>354 reviews </p>
        </div>
        </div>
        <div className="d-flex Card-Rating">
        <div className="Rental-Rating-Point">
          <p>4.3 <span>/5</span></p>
        </div>
        </div>
        <div className="Card-price mt-1">
          <div><span>From</span></div>
          <div className="ps-1"><h5>US$192</h5></div>
        </div>
        <div className="Rental-Card-Button">
             <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button>
            </div>
                 </div>
               </div>
                 </div>
                 </OwlCarousel> 
                </div>
                 </div>

                 <div class="tab-pane fade" id="CarTokyo-tab-pane" role="tabpanel" aria-labelledby="CarTokyo-tab" tabindex="0">
                  <div class="row ">
                   <OwlCarousel className="Umrah-Carousel  Flight-Carousel" {...options}>
                 <div class=" custom-mobile">
               <div class="post-module card-width">
                 <div class="thumbnail">
                   <div class="date">
                     <div class="day">27</div>
                     <div class="month">Mar</div>
                   </div>
                   <div className="Card-Img">
                   <img src={Image1}/>
                   </div>
                 </div>
                 <div class="post-content">
                   <div class="category">Photos</div>
                   <h2 class="sub_title">Ramzan Umrah Package</h2>
                   <p class="Rental-card-content">
                   We are offering best value 21 Days Umrah package in Lahore. Our package includes, direct airline ticket, complete transportation, quick Umrah visa processing and great customer assitance in Saudi Arabia.
                    </p>
                    <div className="d-flex align-items-baseline justify-content-between">
          <div className="Rental-Card-Icons">
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
        </div>
        <div className="Card-Reviews">
          <p>354 reviews </p>
        </div>
        </div>
        <div className="d-flex Card-Rating">
        <div className="Rental-Rating-Point">
          <p>4.3 <span>/5</span></p>
        </div>
        </div>
        <div className="Card-price mt-1">
          <div><span>From</span></div>
          <div className="ps-1"><h5>US$192</h5></div>
        </div>
        <div className="Rental-Card-Button">
        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button>
            </div>
                 </div>
               </div>
                 </div>

                 <div class=" custom-mobile">
               <div class="post-module card-width">
                 <div class="thumbnail">
                   <div class="date">
                     <div class="day">27</div>
                     <div class="month">Mar</div>
                   </div>
                   <div className="Card-Img">
                   <img src={Image2}/>
                   </div>
                 </div>
                 <div class="post-content">
                   <div class="category">Photos</div>
                   <h2 class="sub_title">Shab-e-Barat Umrah Package</h2>
                   <p class="Rental-card-content">
                   We are offering best value 21 Days Umrah package in Lahore. Our package includes, direct airline ticket, complete transportation, quick Umrah visa processing and great customer assitance in Saudi Arabia.
                    </p>
                    <div className="d-flex align-items-baseline justify-content-between">
          <div className="Rental-Card-Icons">
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
        </div>
        <div className="Card-Reviews">
          <p>354 reviews </p>
        </div>
        </div>
        <div className="d-flex Card-Rating">
        <div className="Rental-Rating-Point">
          <p>4.3 <span>/5</span></p>
        </div>
        </div>
        <div className="Card-price mt-1">
          <div><span>From</span></div>
          <div className="ps-1"><h5>US$192</h5></div>
        </div>
        <div className="Rental-Card-Button">
        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button>
            </div>
                 </div>
               </div>
                 </div>

                 <div class=" custom-mobile">
               <div class="post-module card-width">
                 <div class="thumbnail">
                   <div class="date">
                     <div class="day">27</div>
                     <div class="month">Mar</div>
                   </div>
                   <div className="Card-Img">
                   <img src={Image3}/>
                   </div>
                 </div>
                 <div class="post-content">
                   <div class="category">Photos</div>
                   <h2 class="sub_title">First Ashra Ramzan Package</h2>
                   <p class="Rental-card-content">
                   We are offering best value 21 Days Umrah package in Lahore. Our package includes, direct airline ticket, complete transportation, quick Umrah visa processing and great customer assitance in Saudi Arabia.
                    </p>
                    <div className="d-flex align-items-baseline justify-content-between">
          <div className="Rental-Card-Icons">
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
        </div>
        <div className="Card-Reviews">
          <p>354 reviews </p>
        </div>
        </div>
        <div className="d-flex Card-Rating">
        <div className="Rental-Rating-Point">
          <p>4.3 <span>/5</span></p>
        </div>
        </div>
        <div className="Card-price mt-1">
          <div><span>From</span></div>
          <div className="ps-1"><h5>US$192</h5></div>
        </div>
        <div className="Rental-Card-Button">
              <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button>
            </div>
                 </div>
               </div>
                 </div>
  
                 <div class=" custom-mobile">
               <div class="post-module card-width">
                 <div class="thumbnail">
                   <div class="date">
                     <div class="day">27</div>
                     <div class="month">Mar</div>
                   </div>
                   <div className="Card-Img">
                   <img src={Image4}/>
                   </div>
                 </div>
                 <div class="post-content">
                   <div class="category">Photos</div>
                   <h2 class="sub_title">Premium Umrah Package</h2>
                   <p class="Rental-card-content">
                   We are offering best value 21 Days Umrah package in Lahore. Our package includes, direct airline ticket, complete transportation, quick Umrah visa processing and great customer assitance in Saudi Arabia.
                    </p>
                    <div className="d-flex align-items-baseline justify-content-between">
          <div className="Rental-Card-Icons">
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
        </div>
        <div className="Card-Reviews">
          <p>354 reviews </p>
        </div>
        </div>
        <div className="d-flex Card-Rating">
        <div className="Rental-Rating-Point">
          <p>4.3 <span>/5</span></p>
        </div>
        </div>
        <div className="Card-price mt-1">
          <div><span>From</span></div>
          <div className="ps-1"><h5>US$192</h5></div>
        </div>
        <div className="Rental-Card-Button">
             <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button>
            </div>
                 </div>
               </div>
                 </div>
                 </OwlCarousel> 
                </div>
                 </div>

                 <div class="tab-pane fade" id="CarShanghai-tab-pane" role="tabpanel" aria-labelledby="CarShanghai-tab" tabindex="0">
                   <div class="row ">
                   <OwlCarousel className="Umrah-Carousel  Flight-Carousel" {...options}>
                 <div class=" custom-mobile">
               <div class="post-module card-width">
                 <div class="thumbnail">
                   <div class="date">
                     <div class="day">27</div>
                     <div class="month">Mar</div>
                   </div>
                   <div className="Card-Img">
                   <img src={Image1}/>
                   </div>
                 </div>
                 <div class="post-content">
                   <div class="category">Photos</div>
                   <h2 class="sub_title">Ramzan Umrah Package</h2>
                   <p class="Rental-card-content">
                   We are offering best value 21 Days Umrah package in Lahore. Our package includes, direct airline ticket, complete transportation, quick Umrah visa processing and great customer assitance in Saudi Arabia.
                    </p>
                    <div className="d-flex align-items-baseline justify-content-between">
          <div className="Rental-Card-Icons">
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
        </div>
        <div className="Card-Reviews">
          <p>354 reviews </p>
        </div>
        </div>
        <div className="d-flex Card-Rating">
        <div className="Rental-Rating-Point">
          <p>4.3 <span>/5</span></p>
        </div>
        </div>
        <div className="Card-price mt-1">
          <div><span>From</span></div>
          <div className="ps-1"><h5>US$192</h5></div>
        </div>
        <div className="Rental-Card-Button">
        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button>
            </div>
                 </div>
               </div>
                 </div>

                 <div class=" custom-mobile">
               <div class="post-module card-width">
                 <div class="thumbnail">
                   <div class="date">
                     <div class="day">27</div>
                     <div class="month">Mar</div>
                   </div>
                   <div className="Card-Img">
                   <img src={Image2}/>
                   </div>
                 </div>
                 <div class="post-content">
                   <div class="category">Photos</div>
                   <h2 class="sub_title">Shab-e-Barat Umrah Package</h2>
                   <p class="Rental-card-content">
                   We are offering best value 21 Days Umrah package in Lahore. Our package includes, direct airline ticket, complete transportation, quick Umrah visa processing and great customer assitance in Saudi Arabia.
                    </p>
                    <div className="d-flex align-items-baseline justify-content-between">
          <div className="Rental-Card-Icons">
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
        </div>
        <div className="Card-Reviews">
          <p>354 reviews </p>
        </div>
        </div>
        <div className="d-flex Card-Rating">
        <div className="Rental-Rating-Point">
          <p>4.3 <span>/5</span></p>
        </div>
        </div>
        <div className="Card-price mt-1">
          <div><span>From</span></div>
          <div className="ps-1"><h5>US$192</h5></div>
        </div>
        <div className="Rental-Card-Button">
        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button>
            </div>
                 </div>
               </div>
                 </div>

                 <div class=" custom-mobile">
               <div class="post-module card-width">
                 <div class="thumbnail">
                   <div class="date">
                     <div class="day">27</div>
                     <div class="month">Mar</div>
                   </div>
                   <div className="Card-Img">
                   <img src={Image3}/>
                   </div>
                 </div>
                 <div class="post-content">
                   <div class="category">Photos</div>
                   <h2 class="sub_title">First Ashra Ramzan Package</h2>
                   <p class="Rental-card-content">
                   We are offering best value 21 Days Umrah package in Lahore. Our package includes, direct airline ticket, complete transportation, quick Umrah visa processing and great customer assitance in Saudi Arabia.
                    </p>
                    <div className="d-flex align-items-baseline justify-content-between">
          <div className="Rental-Card-Icons">
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
        </div>
        <div className="Card-Reviews">
          <p>354 reviews </p>
        </div>
        </div>
        <div className="d-flex Card-Rating">
        <div className="Rental-Rating-Point">
          <p>4.3 <span>/5</span></p>
        </div>
        </div>
        <div className="Card-price mt-1">
          <div><span>From</span></div>
          <div className="ps-1"><h5>US$192</h5></div>
        </div>
        <div className="Rental-Card-Button">
              <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button>
            </div>
                 </div>
               </div>
                 </div>
  
                 <div class=" custom-mobile">
               <div class="post-module card-width">
                 <div class="thumbnail">
                   <div class="date">
                     <div class="day">27</div>
                     <div class="month">Mar</div>
                   </div>
                   <div className="Card-Img">
                   <img src={Image4}/>
                   </div>
                 </div>
                 <div class="post-content">
                   <div class="category">Photos</div>
                   <h2 class="sub_title">Premium Umrah Package</h2>
                   <p class="Rental-card-content">
                   We are offering best value 21 Days Umrah package in Lahore. Our package includes, direct airline ticket, complete transportation, quick Umrah visa processing and great customer assitance in Saudi Arabia.
                    </p>
                    <div className="d-flex align-items-baseline justify-content-between">
          <div className="Rental-Card-Icons">
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
        </div>
        <div className="Card-Reviews">
          <p>354 reviews </p>
        </div>
        </div>
        <div className="d-flex Card-Rating">
        <div className="Rental-Rating-Point">
          <p>4.3 <span>/5</span></p>
        </div>
        </div>
        <div className="Card-price mt-1">
          <div><span>From</span></div>
          <div className="ps-1"><h5>US$192</h5></div>
        </div>
        <div className="Rental-Card-Button">
             <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button>
            </div>
                 </div>
               </div>
                 </div>
                 </OwlCarousel> 
                </div>
                 </div>

                 <div class="tab-pane fade" id="CarPhuket-tab-pane" role="tabpanel" aria-labelledby="CarPhuket-tab" tabindex="0">
                    <div class="row ">
                   <OwlCarousel className="Umrah-Carousel  Flight-Carousel" {...options}>
                 <div class=" custom-mobile">
               <div class="post-module card-width">
                 <div class="thumbnail">
                   <div class="date">
                     <div class="day">27</div>
                     <div class="month">Mar</div>
                   </div>
                   <div className="Card-Img">
                   <img src={Image1}/>
                   </div>
                 </div>
                 <div class="post-content">
                   <div class="category">Photos</div>
                   <h2 class="sub_title">Ramzan Umrah Package</h2>
                   <p class="Rental-card-content">
                   We are offering best value 21 Days Umrah package in Lahore. Our package includes, direct airline ticket, complete transportation, quick Umrah visa processing and great customer assitance in Saudi Arabia.
                    </p>
                    <div className="d-flex align-items-baseline justify-content-between">
          <div className="Rental-Card-Icons">
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
        </div>
        <div className="Card-Reviews">
          <p>354 reviews </p>
        </div>
        </div>
        <div className="d-flex Card-Rating">
        <div className="Rental-Rating-Point">
          <p>4.3 <span>/5</span></p>
        </div>
        </div>
        <div className="Card-price mt-1">
          <div><span>From</span></div>
          <div className="ps-1"><h5>US$192</h5></div>
        </div>
        <div className="Rental-Card-Button">
        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button>
            </div>
                 </div>
               </div>
                 </div>

                 <div class=" custom-mobile">
               <div class="post-module card-width">
                 <div class="thumbnail">
                   <div class="date">
                     <div class="day">27</div>
                     <div class="month">Mar</div>
                   </div>
                   <div className="Card-Img">
                   <img src={Image2}/>
                   </div>
                 </div>
                 <div class="post-content">
                   <div class="category">Photos</div>
                   <h2 class="sub_title">Shab-e-Barat Umrah Package</h2>
                   <p class="Rental-card-content">
                   We are offering best value 21 Days Umrah package in Lahore. Our package includes, direct airline ticket, complete transportation, quick Umrah visa processing and great customer assitance in Saudi Arabia.
                    </p>
                    <div className="d-flex align-items-baseline justify-content-between">
          <div className="Rental-Card-Icons">
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
        </div>
        <div className="Card-Reviews">
          <p>354 reviews </p>
        </div>
        </div>
        <div className="d-flex Card-Rating">
        <div className="Rental-Rating-Point">
          <p>4.3 <span>/5</span></p>
        </div>
        </div>
        <div className="Card-price mt-1">
          <div><span>From</span></div>
          <div className="ps-1"><h5>US$192</h5></div>
        </div>
        <div className="Rental-Card-Button">
        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button>
            </div>
                 </div>
               </div>
                 </div>

                 <div class=" custom-mobile">
               <div class="post-module card-width">
                 <div class="thumbnail">
                   <div class="date">
                     <div class="day">27</div>
                     <div class="month">Mar</div>
                   </div>
                   <div className="Card-Img">
                   <img src={Image3}/>
                   </div>
                 </div>
                 <div class="post-content">
                   <div class="category">Photos</div>
                   <h2 class="sub_title">First Ashra Ramzan Package</h2>
                   <p class="Rental-card-content">
                   We are offering best value 21 Days Umrah package in Lahore. Our package includes, direct airline ticket, complete transportation, quick Umrah visa processing and great customer assitance in Saudi Arabia.
                    </p>
                    <div className="d-flex align-items-baseline justify-content-between">
          <div className="Rental-Card-Icons">
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
        </div>
        <div className="Card-Reviews">
          <p>354 reviews </p>
        </div>
        </div>
        <div className="d-flex Card-Rating">
        <div className="Rental-Rating-Point">
          <p>4.3 <span>/5</span></p>
        </div>
        </div>
        <div className="Card-price mt-1">
          <div><span>From</span></div>
          <div className="ps-1"><h5>US$192</h5></div>
        </div>
        <div className="Rental-Card-Button">
              <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button>
            </div>
                 </div>
               </div>
                 </div>
  
                 <div class=" custom-mobile">
               <div class="post-module card-width">
                 <div class="thumbnail">
                   <div class="date">
                     <div class="day">27</div>
                     <div class="month">Mar</div>
                   </div>
                   <div className="Card-Img">
                   <img src={Image4}/>
                   </div>
                 </div>
                 <div class="post-content">
                   <div class="category">Photos</div>
                   <h2 class="sub_title">Premium Umrah Package</h2>
                   <p class="Rental-card-content">
                   We are offering best value 21 Days Umrah package in Lahore. Our package includes, direct airline ticket, complete transportation, quick Umrah visa processing and great customer assitance in Saudi Arabia.
                    </p>
                    <div className="d-flex align-items-baseline justify-content-between">
          <div className="Rental-Card-Icons">
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
        </div>
        <div className="Card-Reviews">
          <p>354 reviews </p>
        </div>
        </div>
        <div className="d-flex Card-Rating">
        <div className="Rental-Rating-Point">
          <p>4.3 <span>/5</span></p>
        </div>
        </div>
        <div className="Card-price mt-1">
          <div><span>From</span></div>
          <div className="ps-1"><h5>US$192</h5></div>
        </div>
        <div className="Rental-Card-Button">
             <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button>
            </div>
                 </div>
               </div>
                 </div>
                 </OwlCarousel> 
                </div>
                 </div>

                 <div class="tab-pane fade" id="CarSeoul-tab-pane" role="tabpanel" aria-labelledby="CarSeoul-tab" tabindex="0">
                 <div class="row ">
                   <OwlCarousel className="Umrah-Carousel  Flight-Carousel" {...options}>
                 <div class=" custom-mobile">
               <div class="post-module card-width">
                 <div class="thumbnail">
                   <div class="date">
                     <div class="day">27</div>
                     <div class="month">Mar</div>
                   </div>
                   <div className="Card-Img">
                   <img src={Image1}/>
                   </div>
                 </div>
                 <div class="post-content">
                   <div class="category">Photos</div>
                   <h2 class="sub_title">Ramzan Umrah Package</h2>
                   <p class="Rental-card-content">
                   We are offering best value 21 Days Umrah package in Lahore. Our package includes, direct airline ticket, complete transportation, quick Umrah visa processing and great customer assitance in Saudi Arabia.
                    </p>
                    <div className="d-flex align-items-baseline justify-content-between">
          <div className="Rental-Card-Icons">
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
        </div>
        <div className="Card-Reviews">
          <p>354 reviews </p>
        </div>
        </div>
        <div className="d-flex Card-Rating">
        <div className="Rental-Rating-Point">
          <p>4.3 <span>/5</span></p>
        </div>
        </div>
        <div className="Card-price mt-1">
          <div><span>From</span></div>
          <div className="ps-1"><h5>US$192</h5></div>
        </div>
        <div className="Rental-Card-Button">
        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button>
            </div>
                 </div>
               </div>
                 </div>

                 <div class=" custom-mobile">
               <div class="post-module card-width">
                 <div class="thumbnail">
                   <div class="date">
                     <div class="day">27</div>
                     <div class="month">Mar</div>
                   </div>
                   <div className="Card-Img">
                   <img src={Image2}/>
                   </div>
                 </div>
                 <div class="post-content">
                   <div class="category">Photos</div>
                   <h2 class="sub_title">Shab-e-Barat Umrah Package</h2>
                   <p class="Rental-card-content">
                   We are offering best value 21 Days Umrah package in Lahore. Our package includes, direct airline ticket, complete transportation, quick Umrah visa processing and great customer assitance in Saudi Arabia.
                    </p>
                    <div className="d-flex align-items-baseline justify-content-between">
          <div className="Rental-Card-Icons">
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
        </div>
        <div className="Card-Reviews">
          <p>354 reviews </p>
        </div>
        </div>
        <div className="d-flex Card-Rating">
        <div className="Rental-Rating-Point">
          <p>4.3 <span>/5</span></p>
        </div>
        </div>
        <div className="Card-price mt-1">
          <div><span>From</span></div>
          <div className="ps-1"><h5>US$192</h5></div>
        </div>
        <div className="Rental-Card-Button">
        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button>
            </div>
                 </div>
               </div>
                 </div>

                 <div class=" custom-mobile">
               <div class="post-module card-width">
                 <div class="thumbnail">
                   <div class="date">
                     <div class="day">27</div>
                     <div class="month">Mar</div>
                   </div>
                   <div className="Card-Img">
                   <img src={Image3}/>
                   </div>
                 </div>
                 <div class="post-content">
                   <div class="category">Photos</div>
                   <h2 class="sub_title">First Ashra Ramzan Package</h2>
                   <p class="Rental-card-content">
                   We are offering best value 21 Days Umrah package in Lahore. Our package includes, direct airline ticket, complete transportation, quick Umrah visa processing and great customer assitance in Saudi Arabia.
                    </p>
                    <div className="d-flex align-items-baseline justify-content-between">
          <div className="Rental-Card-Icons">
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
        </div>
        <div className="Card-Reviews">
          <p>354 reviews </p>
        </div>
        </div>
        <div className="d-flex Card-Rating">
        <div className="Rental-Rating-Point">
          <p>4.3 <span>/5</span></p>
        </div>
        </div>
        <div className="Card-price mt-1">
          <div><span>From</span></div>
          <div className="ps-1"><h5>US$192</h5></div>
        </div>
        <div className="Rental-Card-Button">
              <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button>
            </div>
                 </div>
               </div>
                 </div>
  
                 <div class=" custom-mobile">
               <div class="post-module card-width">
                 <div class="thumbnail">
                   <div class="date">
                     <div class="day">27</div>
                     <div class="month">Mar</div>
                   </div>
                   <div className="Card-Img">
                   <img src={Image4}/>
                   </div>
                 </div>
                 <div class="post-content">
                   <div class="category">Photos</div>
                   <h2 class="sub_title">Premium Umrah Package</h2>
                   <p class="Rental-card-content">
                   We are offering best value 21 Days Umrah package in Lahore. Our package includes, direct airline ticket, complete transportation, quick Umrah visa processing and great customer assitance in Saudi Arabia.
                    </p>
                    <div className="d-flex align-items-baseline justify-content-between">
          <div className="Rental-Card-Icons">
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
        </div>
        <div className="Card-Reviews">
          <p>354 reviews </p>
        </div>
        </div>
        <div className="d-flex Card-Rating">
        <div className="Rental-Rating-Point">
          <p>4.3 <span>/5</span></p>
        </div>
        </div>
        <div className="Card-price mt-1">
          <div><span>From</span></div>
          <div className="ps-1"><h5>US$192</h5></div>
        </div>
        <div className="Rental-Card-Button">
             <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button>
            </div>
                 </div>
               </div>
                 </div>
                 </OwlCarousel> 
                </div>
                 </div>

                 <div class="tab-pane fade" id="CarOsaka-tab-pane" role="tabpanel" aria-labelledby="CarOsaka-tab" tabindex="0">
                 <div class="row ">
                   <OwlCarousel className="Umrah-Carousel  Flight-Carousel" {...options}>
                 <div class=" custom-mobile">
               <div class="post-module card-width">
                 <div class="thumbnail">
                   <div class="date">
                     <div class="day">27</div>
                     <div class="month">Mar</div>
                   </div>
                   <div className="Card-Img">
                   <img src={Image1}/>
                   </div>
                 </div>
                 <div class="post-content">
                   <div class="category">Photos</div>
                   <h2 class="sub_title">Ramzan Umrah Package</h2>
                   <p class="Rental-card-content">
                   We are offering best value 21 Days Umrah package in Lahore. Our package includes, direct airline ticket, complete transportation, quick Umrah visa processing and great customer assitance in Saudi Arabia.
                    </p>
                    <div className="d-flex align-items-baseline justify-content-between">
          <div className="Rental-Card-Icons">
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
        </div>
        <div className="Card-Reviews">
          <p>354 reviews </p>
        </div>
        </div>
        <div className="d-flex Card-Rating">
        <div className="Rental-Rating-Point">
          <p>4.3 <span>/5</span></p>
        </div>
        </div>
        <div className="Card-price mt-1">
          <div><span>From</span></div>
          <div className="ps-1"><h5>US$192</h5></div>
        </div>
        <div className="Rental-Card-Button">
        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button>
            </div>
                 </div>
               </div>
                 </div>

                 <div class=" custom-mobile">
               <div class="post-module card-width">
                 <div class="thumbnail">
                   <div class="date">
                     <div class="day">27</div>
                     <div class="month">Mar</div>
                   </div>
                   <div className="Card-Img">
                   <img src={Image2}/>
                   </div>
                 </div>
                 <div class="post-content">
                   <div class="category">Photos</div>
                   <h2 class="sub_title">Shab-e-Barat Umrah Package</h2>
                   <p class="Rental-card-content">
                   We are offering best value 21 Days Umrah package in Lahore. Our package includes, direct airline ticket, complete transportation, quick Umrah visa processing and great customer assitance in Saudi Arabia.
                    </p>
                    <div className="d-flex align-items-baseline justify-content-between">
          <div className="Rental-Card-Icons">
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
        </div>
        <div className="Card-Reviews">
          <p>354 reviews </p>
        </div>
        </div>
        <div className="d-flex Card-Rating">
        <div className="Rental-Rating-Point">
          <p>4.3 <span>/5</span></p>
        </div>
        </div>
        <div className="Card-price mt-1">
          <div><span>From</span></div>
          <div className="ps-1"><h5>US$192</h5></div>
        </div>
        <div className="Rental-Card-Button">
        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button>
            </div>
                 </div>
               </div>
                 </div>

                 <div class=" custom-mobile">
               <div class="post-module card-width">
                 <div class="thumbnail">
                   <div class="date">
                     <div class="day">27</div>
                     <div class="month">Mar</div>
                   </div>
                   <div className="Card-Img">
                   <img src={Image3}/>
                   </div>
                 </div>
                 <div class="post-content">
                   <div class="category">Photos</div>
                   <h2 class="sub_title">First Ashra Ramzan Package</h2>
                   <p class="Rental-card-content">
                   We are offering best value 21 Days Umrah package in Lahore. Our package includes, direct airline ticket, complete transportation, quick Umrah visa processing and great customer assitance in Saudi Arabia.
                    </p>
                    <div className="d-flex align-items-baseline justify-content-between">
          <div className="Rental-Card-Icons">
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
        </div>
        <div className="Card-Reviews">
          <p>354 reviews </p>
        </div>
        </div>
        <div className="d-flex Card-Rating">
        <div className="Rental-Rating-Point">
          <p>4.3 <span>/5</span></p>
        </div>
        </div>
        <div className="Card-price mt-1">
          <div><span>From</span></div>
          <div className="ps-1"><h5>US$192</h5></div>
        </div>
        <div className="Rental-Card-Button">
              <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button>
            </div>
                 </div>
               </div>
                 </div>
  
                 <div class=" custom-mobile">
               <div class="post-module card-width">
                 <div class="thumbnail">
                   <div class="date">
                     <div class="day">27</div>
                     <div class="month">Mar</div>
                   </div>
                   <div className="Card-Img">
                   <img src={Image4}/>
                   </div>
                 </div>
                 <div class="post-content">
                   <div class="category">Photos</div>
                   <h2 class="sub_title">Premium Umrah Package</h2>
                   <p class="Rental-card-content">
                   We are offering best value 21 Days Umrah package in Lahore. Our package includes, direct airline ticket, complete transportation, quick Umrah visa processing and great customer assitance in Saudi Arabia.
                    </p>
                    <div className="d-flex align-items-baseline justify-content-between">
          <div className="Rental-Card-Icons">
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
          <StarIcon className="Star"></StarIcon>
        </div>
        <div className="Card-Reviews">
          <p>354 reviews </p>
        </div>
        </div>
        <div className="d-flex Card-Rating">
        <div className="Rental-Rating-Point">
          <p>4.3 <span>/5</span></p>
        </div>
        </div>
        <div className="Card-price mt-1">
          <div><span>From</span></div>
          <div className="ps-1"><h5>US$192</h5></div>
        </div>
        <div className="Rental-Card-Button">
             <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button>
            </div>
                 </div>
               </div>
                 </div>
                 </OwlCarousel> 
                </div>
                 </div>
               </div>
                </div>
                <BookingForm></BookingForm>
                
            </div>
            
    )
}

export default CarRentals;