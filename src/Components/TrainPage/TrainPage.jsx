
import React from "react";
import "./TrainPage.css"
import Footer from "../Footer/Footer"
import Logo from "../Assets/Logo/nexuslogo.png"
import TabsDetails from "../TabsDetails/TabsDetails";
import Image1 from "./TrainImages/image1.gif"
import Image2 from "./TrainImages/image2.gif"
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChairIcon from '@mui/icons-material/Chair';
import GppGoodIcon from '@mui/icons-material/GppGood';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import RecommendIcon from '@mui/icons-material/Recommend';
import OwlCarousel from 'react-owl-carousel';
import DoneIcon from '@mui/icons-material/Done';
import ServiceImage from "./TrainImages/service-icon1.png"
import ServiceImage2 from "./TrainImages/service-icon2.png"
import ServiceImage3 from "./TrainImages/service-icon3.png"

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
        }
    },
  };

const TrainPage = () => {

        return (
        <div>

         <div className="Header train-bg">
         <nav class="navbar navbar-expand-lg d-block pt-0">
                <div class="container-fluid ">
              <div className="Logo">
                        <img id="Home" src={Logo} alt="" />
                    </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="Tabs-Button">
                <div className="buttons ps-3">
                <a href="/flightpage" ><button><p>Flights</p></button></a> 
                   <a href="hotels"><button ><p>Hotels</p></button></a>  
                   <a href="cars"><button><p>Cars</p></button></a> 
                   <a href="trains"><button><p>Trains</p></button></a> 
                   <a href="tours"><button><p>Tours</p></button></a> 
                   <a href="umrah"><button><p>Hajj & Umrah</p></button></a>
                   </div>
                   <div className="Form-Header-Button">
                   <form class="header-button" role="search">
                            <button class="btn btn-outline-success" type="submit">Search Bookings</button>
                            <button class="btn btn-outline-success" type="submit">Sign In / Register</button>
                        </form>
                        </div>
            </div> 
            </div>  
                </div>
            </nav> 
            <TabsDetails></TabsDetails>

        </div>

        <div className="TrainPage pb-5 pt-5">
    <div className="container pt-2">
    <ul class="Nav-Train-Tabs nav nav-pills Train-Tabs custom-bg" id="pills-tab" role="tablist">
  <li class="nav-item Train-nav-item" role="presentation">
    <button class="nav-link active" id="pills-train-tab" data-bs-toggle="pill" data-bs-target="#pills-train" type="button" role="tab" aria-controls="pills-train" aria-selected="true">
      <StickyNote2Icon className="Train-Tabs-Icon"/> My Booking</button>
  </li>
  <li class="nav-item Train-nav-item" role="presentation">
    <button class="nav-link" id="pills-guide-tab" data-bs-toggle="pill" data-bs-target="#pills-guide" type="button" role="tab" aria-controls="pills-guide" aria-selected="false">
        <BookOnlineIcon className="Train-Tabs-Icon"/>Train Guide</button>
  </li>
  <li class="nav-item Train-nav-item" role="presentation">
    <button class="nav-link" id="pills-notice-tab" data-bs-toggle="pill" data-bs-target="#pills-notice" type="button" role="tab" aria-controls="pills-notice" aria-selected="false">
        <NotificationsIcon className="Train-Tabs-Icon"/>Notice</button>
  </li>
   </ul>

   <div class="tab-content Train-Tabs-Content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-train" role="tabpanel" aria-labelledby="pills-train-tab" tabindex="0">
    <div className="Train-tabs-HP"> 
    <div className="row">
        <div className="col-lg-4 col-sm-12 col-md-6 Tabs-Image">
      <img src={Image2} alt="" />
        </div>
        <div className="col-lg-8 col-sm-12 col-md-6">
        <div className="Train-tabs-Anchor pt-2">
        <h2>Access Nexus.com Member-exclusive Deals</h2>
        <p>Access Nexus.com Member-exclusive Deals Sign in or register now to manage your bookings with ease!</p>
        <div className="Train-tabs-button pt-3">
        <a href="#" className="register">Register Now</a>
        <a href="#" className="SignIn">Sign In</a>
        </div>
     
    </div>
        </div>
    </div>
    </div>
   
  
  </div>

  <div class="tab-pane fade" id="pills-guide" role="tabpanel" aria-labelledby="pills-guide-tab" tabindex="0">
  <div className="Train-tabs-HP"> 
  <div className="row">
    <div className="col-lg-4 col-sm-12 col-md-6 Tabs-Image">
    <img src={Image1} alt="" />
    </div>
    <div className="col-lg-8 col-sm-12 col-md-6 Tabs-Middle-Content">
    <h2 className="pt-5">Ticket Pick-up and Taking the Train</h2>
        <p>Guide on booking trains, ticket pick-up, taking the train, changes, cancellations, and reimbursements. </p>
    </div>
  </div>
    </div>
  </div>
  
  <div class="tab-pane fade" id="pills-notice" role="tabpanel" aria-labelledby="pills-notice-tab" tabindex="0">
    <div className="Tabs-Paragraph">
   <p> <span>[Important Notice]</span> Refund and change policies for trains in mainland China have been modified as follows:</p>
   <p><span> Refunds:</span> Refund requests can be made online 8:00–21:00 (GMT+8). Online refund requests must be made at least 3.5 hours before the train's departure time. To refund your ticket within 3.5 hours before departure, please go to the ticket window at the train station.</p>
   <p> <span>Changes:</span>  Change requests can be made online 9:00–20:00 (GMT+8). Online change requests must be made at least 1.5 hours before the train's departure time, and there must be more than 1.5 hours before the departure time of the new train. To change your ticket within 1.5 hours before departure, please go to the ticket window at the train station.</p>
   </div>
    </div>
   </div>

    </div>
        </div>

        <div className="Train-Offer-Section pb-5 pt-5">
    <div className="container Train-Main-Content pb-5 pt-5">
    <div className="row train-row-margin">
     <div className="col-lg-3 col-sm-12 col-md-6">
                <div className="Train-Offer-Content pt-3">
            <div className="d-flex justify-content-center Offer-Icon">
            <ChairIcon className="Icons"/>
            </div>
           
        <h2>Free Seat Selection</h2>
        <p>Choose your seats while booking</p>
        </div>
      </div>
           
      <div className="col-lg-3 col-sm-12 col-md-6">
        <div className="Train-Offer-Content pt-3">
        <div className="d-flex justify-content-center Offer-Icon">
            < GppGoodIcon className="Icons"/>
            </div>
        <h2>Secure Booking</h2>
        <p>Your personal information is protected by our secure systems</p>
        </div> 
        </div>
        
        <div className="col-lg-3 col-sm-12 col-md-6">
        <div className="Train-Offer-Content pt-3">
        <div className="d-flex justify-content-center Offer-Icon">
            <LibraryBooksIcon className="Icons"/>
            </div>
        <h2>Travel Assistance</h2>
        <p>Plan your trip with our travel checklist and trip planner, and chat to customer support anytime through our mobile app</p>
        </div>
        </div>

        <div className="col-lg-3 col-sm-12 col-md-6">
        <div className="Train-Offer-Content pt-3">
        <div className="d-flex justify-content-center Offer-Icon">
            <RecommendIcon className="Icons"/>
            </div>
        <h2>Reliable Support</h2>
        <p>One-on-one customer support available in multiple languages</p>
        </div>
         </div>
    </div>
    </div>
        </div>

        <div className="Client-Review-Page Great-Offer-Bg">
                <div className="container">
                <div className='Carousel-Heading text-center'>
            <h1 className="pt-5 pb-3">Our Great <span className="offer-span">Seat</span> Options</h1>
        </div>
                <OwlCarousel className='Services-Owl owl-theme Items-Owl  mt-3' loop margin={10} nav {...options}>
   <div class='items Great-Offer-Option mt-3'>
   <div class=" Option-Offer-Content pt-3">
   <img className="Option-card-image ps-3" src={ServiceImage} alt="" />
    <p class="ps-3  pt-4 text-start">Service 01</p>
    <h2 className="ps-3 pt-4 ">Enjoy Stress-Free Travel</h2>
 
    <ul className="ps-0 d-flex justify-content-between p-2 Option-Offer-mb Option-Offer-pb">
        <li class="Client-card-text text-start text-black list-unstyled pt-1">Travel stress-free by getting</li> 
        <li className="list-unstyled" ><DoneIcon className="Font-size"/></li>
        </ul> 
        
        <ul className="ps-0 d-flex justify-content-between p-2 Option-Offer-mb Option-Offer-pb">
        <li class="Client-card-text text-start text-black list-unstyled pt-1">Covered for flight modification</li> 
        <li className="list-unstyled" ><DoneIcon className="Font-size"/></li>
        </ul>

        <ul className="ps-0 d-flex justify-content-between p-2 Option-Offer-mb Option-Offer-pb">
        <li class="Client-card-text text-start text-black list-unstyled pt-1">Cancellation, accident & medical</li> 
        <li className="list-unstyled" ><DoneIcon className="Font-size"/></li>
        </ul>
   </div>
   </div> 
   
   <div class='items Great-Offer-Option mt-3'>
   <div class=" Option-Offer-Content pt-3">
   <img className="Option-card-image ps-3" src={ServiceImage3} alt="" />
    <p class="ps-3  pt-4 text-start">Service 02</p>
    <h2 className="ps-3 pt-4 ">Pre Book your Baggage</h2>
 
    <ul className="ps-0 d-flex justify-content-between p-2  Option-Offer-mb Option-Offer-pb">
        <li class="Client-card-text text-start text-black list-unstyled pt-1">Pre-book your baggage </li> 
        <li className="list-unstyled" ><DoneIcon className="Font-size"/></li>
        </ul> 
        
        <ul className="ps-0 d-flex justify-content-between p-2 Option-Offer-mb Option-Offer-pb">
        <li class="Client-card-text text-start text-black list-unstyled pt-1">Allowance now and save up </li> 
        <li className="list-unstyled" ><DoneIcon className="Font-size"/></li>
        </ul>

        <ul className="ps-0 d-flex justify-content-between p-2 Option-Offer-mb Option-Offer-pb">
        <li class="Client-card-text text-start text-black list-unstyled pt-1">90% of baggage charges </li> 
        <li className="list-unstyled" ><DoneIcon className="Font-size"/></li>
        </ul>
   </div>
   </div>

   <div class='items Great-Offer-Option mt-3'>
   <div class=" Option-Offer-Content pt-3">
    <img className="Option-card-image Service-Image-Width image-fix-width ps-3"  src={ServiceImage2} alt="" />
    <p class="ps-3 pt-4 text-start">Service 03</p>
    <h2 className="ps-3 pt-2 ">Reserve preferred seat!</h2>
 
    <ul className="ps-0 d-flex justify-content-between p-2 Option-Offer-mb Option-Offer-pb">
        <li class="Client-card-text text-start text-black list-unstyled pt-1">What will it be, window or aisle? </li> 
        <li className="list-unstyled" ><DoneIcon className="Font-size"/></li>
        </ul> 
        
        <ul className="ps-0 d-flex justify-content-between p-2 Option-Offer-mb Option-Offer-pb">
        <li class="Client-card-text text-start text-black list-unstyled pt-1">Select your preferred seat prior </li> 
        <li className="list-unstyled" ><DoneIcon className="Font-size"/></li>
        </ul>

        <ul className="ps-0 d-flex justify-content-between p-2 Option-Offer-mb Option-Offer-pb">
        <li class="Client-card-text text-start text-black list-unstyled pt-1">Reserved for you. </li> 
        <li className="list-unstyled" ><DoneIcon className="Font-size"/></li>
        </ul>
   </div>
   </div>


   <div class='items Great-Offer-Option mt-3'>
   <div class=" Option-Offer-Content pt-3">
    <img className="Option-card-image ps-3" src={ServiceImage} alt="" />
    <p class="ps-3 pt-4 text-start">Service 04</p>
    <h2 className="ps-3 pt-4 ">Reserve preferred seat!</h2>
 
    <ul className="ps-0 d-flex justify-content-between p-2 Option-Offer-mb Option-Offer-pb">
        <li class="Client-card-text text-start text-black list-unstyled pt-1">What will it be, window or aisle? </li> 
        <li className="list-unstyled" ><DoneIcon className="Font-size"/></li>
        </ul> 
        
        <ul className="ps-0 d-flex justify-content-between p-2 Option-Offer-mb Option-Offer-pb">
        <li class="Client-card-text text-start text-black list-unstyled pt-1">Select your preferred seat prior </li> 
        <li className="list-unstyled" ><DoneIcon className="Font-size"/></li>
        </ul>

        <ul className="ps-0 d-flex justify-content-between p-2 Option-Offer-mb Option-Offer-pb">
        <li class="Client-card-text text-start text-black list-unstyled pt-1">Reserved for you. </li> 
        <li className="list-unstyled" ><DoneIcon className="Font-size"/></li>
        </ul>
         </div>
         </div>


             </OwlCarousel>
                </div>
            </div>
          <Footer></Footer>
          
        </div>
    );
    
}

export default TrainPage;



