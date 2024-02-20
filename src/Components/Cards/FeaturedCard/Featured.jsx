import React from "react";
import "./Featured.css"
import Image1 from "../FeaturedCard/FeaturedImage/image1.png"
import Image2 from "../FeaturedCard/FeaturedImage/image2.png"
import Image3 from "../FeaturedCard/FeaturedImage/image3.png"
import Image4 from "../FeaturedCard/FeaturedImage/image4.png"
import StarIcon from '@mui/icons-material/Star';
import FeaturedIcon1 from "../FeaturedCard/FeaturedImage/Featuredicon1.png"
import FeaturedIcon2 from "../FeaturedCard/FeaturedImage/Featuredicon2.png"
import FeaturedIcon3 from "../FeaturedCard/FeaturedImage/Featuredicon3.png"
import PopularAttractions from "../PapularAttractions/PopularAttraction"
import CarRentals from "../../CarRentals/CarRentals";
import Section from "../Section/Section"
import Paragraph from "../Section/Paragraph/Paragraph"
import Footer from "../Section/Footer/Footer"
import ContactForm from "../Section/ContactForm/Contact"
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

const Card = () => {
    return (
      <div id="/card" className="Main-Cards">

        <div className="Featured-Image  pb-3">
            <div className="container">
                <div className="Card-Heading p-3">
                    <div className="Heading pt-4">
                    <h2>Top Destinations</h2>
                    </div>
                    <div className="d-flex Heading-Content pt-1">
                      <div><h6 className="custom-destination-h6"><img  src={FeaturedIcon1}  alt="" className="Icon-Width icon-marginleft"/><small>Hotel Booking Guarantee</small></h6></div>
                      <div className="Heading-Icon"><h6 className="custom-destination-h6"><img  src={FeaturedIcon2}  alt="" className="Icon-Width"/>Hotel Stay Guarantee</h6></div>
                      <div><h6 className="custom-destination-h6"><img  src={FeaturedIcon3}  alt="" className="Icon-Width"/>Rewards for booking</h6></div>
                    </div>
                </div>

                <div className="Card-Tabs p-1 pt-0">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                 <li class="nav-item" role="presentation">
                   <button class="nav-link active" id="Bangkok-tab" data-bs-toggle="tab" data-bs-target="#Bangkok-tab-pane" type="button" role="tab" aria-controls="BangkokBangkok-tab-pane" aria-selected="true">Egypt</button>
                 </li>
                 <li class="nav-item" role="presentation">
                   <button class="nav-link" id="HongKong-tab" data-bs-toggle="tab" data-bs-target="#HongKong-tab-pane" type="button" role="tab" aria-controls="HongKong-tab-pane" aria-selected="false">Kuwait</button>
                 </li>
                 <li class="nav-item" role="presentation">
                   <button class="nav-link" id="Singapore-tab" data-bs-toggle="tab" data-bs-target="#Singapore-tab-pane" type="button" role="tab" aria-controls="Singapore-tab-pane" aria-selected="false">Bahrain</button>
                 </li>
                 <li class="nav-item" role="presentation">
                   <button class="nav-link" id="Tokyo-tab" data-bs-toggle="tab" data-bs-target="#Tokyo-tab-pane" type="button" role="tab" aria-controls="Tokyo-tab-pane" aria-selected="false">Qatar</button>
                 </li>
                 <li class="nav-item" role="presentation">
                   <button class="nav-link" id="Shanghai-tab" data-bs-toggle="tab" data-bs-target="#Shanghai-tab-pane" type="button" role="tab" aria-controls="Shanghai-tab-pane" aria-selected="false">Saudi Arabia</button>
                 </li>
                 <li class="nav-item" role="presentation">
                   <button class="nav-link" id="Phuket-tab" data-bs-toggle="tab" data-bs-target="#Phuket-tab-pane" type="button" role="tab" aria-controls="Phuket-tab-pane" aria-selected="false">Iraq</button>
                 </li>
                 <li class="nav-item" role="presentation">
                   <button class="nav-link" id="Seoul-tab" data-bs-toggle="tab" data-bs-target="#Seoul-tab-pane" type="button" role="tab" aria-controls="Seoul-tab-pane" aria-selected="false">United Arab Emirates</button>
                 </li>
                 <li class="nav-item" role="presentation">
                   <button class="nav-link" id="Osaka-tab" data-bs-toggle="tab" data-bs-target="#Osaka-tab-pane" type="button" role="tab" aria-controls="Osaka-tab-pane" aria-selected="false">Oman</button>
                 </li>
               </ul>
                </div>

                <div class="tab-content  p-3 " id="myTabContent">
                 <div class="tab-pane Card-Content fade show active" id="Bangkok-tab-pane" role="tabpanel" aria-labelledby="Bangkok-tab" tabindex="0">
                 <div class="row ">
                 <OwlCarousel className="Top-Destination-Carousel  Flight-Carousel" {...options}>
                 <div class="custom-mobile d-flex justify-content-space-between">
                  <div className="">
                <div class="card card-width">
               <img src={Image1} class="card-img-top" alt="..."/>
                <div class="content-box">
                    <h1 class="card-title pt-3">Grand Mercure Phuket Patong(SHA Extra Plus)</h1>
                    <p class="card-content" contentEditable data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Disabled popover">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere sequi illo nam repudiandae tempore quaerat veritatis doloremque omnis molestias id. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere sequi illo nam repudiandae tempore quaerat veritatis doloremque omnis molestias id. Facere sequi illo nam repudiandae tempore quaerat veritatis doloremque omnis molestias id.
                    </p>
                   
                    <div className="d-flex align-items-baseline justify-content-between pt-1">
          <div className="Card-Icons">
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
        <div className="Rating-Point">
          <p>4.3 <span>/5</span></p>
        </div>
        </div>
        <div className="Card-price mt-2">
          <div><span>From</span></div>
          <div className="ps-1"><h5>US$192</h5></div>
        </div>
                </div>
                <div className="Card-Button">
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button>
            </div>

                <div class="date-box">
                    <span class="month">JUNE</span>
                    <span class="date">29</span>
                </div>
   
            </div>
            </div>
                 </div>

                 <div class="custom-mobile d-flex justify-content-space-between">
  <div class="card card-width">
  <img src={Image2} class="card-img-top" alt="..."/>
                <div class="content-box">
                    <h1 class="card-title pt-3">Grand Mercure Phuket Patong(SHA Extra Plus)</h1>
                    <p class="card-content">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere sequi illo nam repudiandae tempore quaerat veritatis doloremque omnis molestias id.
                    </p>
                    <div className="d-flex align-items-baseline justify-content-between pt-1">
          <div className="Card-Icons">
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
        <div className="Rating-Point">
          <p>4.3 <span>/5</span></p>
        </div>
        </div>
        <div className="Card-price mt-2">
          <div><span>From</span></div>
          <div className="ps-1"><h5>US$192</h5></div>
        </div>
                </div>
                <div className="Card-Button">
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button>
            </div>
                <div class="date-box">
                    <span class="month">JUNE</span>
                    <span class="date">29</span>
                </div>
   
            </div>
                 </div>

                 <div class="custom-mobile d-flex justify-content-space-between">
  <div class="card card-width">
  <img src={Image3} class="card-img-top" alt="..."/>
                <div class="content-box">
                    <h1 class="card-title pt-3">Grand Mercure Phuket Patong(SHA Extra Plus)</h1>
                    <p class="card-content">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere sequi illo nam repudiandae tempore quaerat veritatis doloremque omnis molestias id.
                    </p>
                    <div className="d-flex align-items-baseline justify-content-between pt-1">
          <div className="Card-Icons">
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
        <div className="Rating-Point">
          <p>4.3 <span>/5</span></p>
        </div>
        </div>
        <div className="Card-price mt-2">
          <div><span>From</span></div>
          <div className="ps-1"><h5>US$192</h5></div>
        </div>
                </div>
                <div className="Card-Button">
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button>
            </div>
                <div class="date-box">
                    <span class="month">JUNE</span>
                    <span class="date">29</span>
                </div>
   
            </div>
                 </div>

                 <div class="custom-mobile d-flex justify-content-space-between">
             <div class="card card-width">
             <a href=""><img src="https://via.placeholder.com/150" /></a>
                <div class="content-box">
                    <h1 class="card-title pt-3">Grand Mercure Phuket Patong(SHA Extra Plus)</h1>
                    <p class="card-content" data-toggle="popover" title="Popover Text" data-content="Some content inside the popover">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere sequi illo nam repudiandae tempore quaerat veritatis doloremque omnis molestias id.
                    </p>
                    <div className="d-flex align-items-baseline justify-content-between pt-1">
          <div className="Card-Icons">
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
        <div className="Rating-Point">
          <p>4.3 <span>/5</span></p>
        </div>
        </div>
        <div className="Card-price mt-2">
          <div><span>From</span></div>
          <div className="ps-1"><h5>US$192</h5></div>
        </div>
                </div>
                <div className="Card-Button">
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button>
            </div>
                <div class="date-box">
                    <span class="month">JUNE</span>
                    <span class="date">29</span>
                </div>
   
            </div>
                 </div>

                 <div class="custom-mobile d-flex justify-content-space-between">
  <div class="card card-width">
  <img src={Image3} class="card-img-top" alt="..."/>
                <div class="content-box">
                    <h1 class="card-title pt-3">Grand Mercure Phuket Patong(SHA Extra Plus)</h1>
                    <p class="card-content">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere sequi illo nam repudiandae tempore quaerat veritatis doloremque omnis molestias id.
                    </p>
                    <div className="d-flex align-items-baseline justify-content-between pt-1">
          <div className="Card-Icons">
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
        <div className="Rating-Point">
          <p>4.3 <span>/5</span></p>
        </div>
        </div>
        <div className="Card-price mt-2">
          <div><span>From</span></div>
          <div className="ps-1"><h5>US$192</h5></div>
        </div>
                </div>
                <div className="Card-Button">
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button>
            </div>
                <div class="date-box">
                    <span class="month">JUNE</span>
                    <span class="date">29</span>
                </div>
   
            </div>
                 </div>

                 <div class="custom-mobile d-flex justify-content-space-between">
             <div class="card card-width">
             <a href=""><img src="https://via.placeholder.com/150" /></a>
                <div class="content-box">
                    <h1 class="card-title pt-3">Grand Mercure Phuket Patong(SHA Extra Plus)</h1>
                    <p class="card-content" data-toggle="popover" title="Popover Text" data-content="Some content inside the popover">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere sequi illo nam repudiandae tempore quaerat veritatis doloremque omnis molestias id.
                    </p>
                    <div className="d-flex align-items-baseline justify-content-between pt-1">
          <div className="Card-Icons">
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
        <div className="Rating-Point">
          <p>4.3 <span>/5</span></p>
        </div>
        </div>
        <div className="Card-price mt-2">
          <div><span>From</span></div>
          <div className="ps-1"><h5>US$192</h5></div>
        </div>
                </div>
                <div className="Card-Button">
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button>
            </div>
                <div class="date-box">
                    <span class="month">JUNE</span>
                    <span class="date">29</span>
                </div>
   
            </div>
                 </div>
                 </OwlCarousel>
                </div>
                 </div>

                 <div class="tab-pane fade" id="HongKong-tab-pane" role="tabpanel" aria-labelledby="HongKong-tab" tabindex="0">
                 <div class="row ">
                 <OwlCarousel className="Top-Destination-Carousel  Flight-Carousel" {...options}>
                 <div class="custom-mobile d-flex justify-content-space-between">
                  <div className="parent">
                <div class="card card-width">
               <img src={Image1} class="card-img-top" alt="..."/>
                <div class="content-box">
                    <h1 class="card-title pt-3">Grand Mercure Phuket Patong(SHA Extra Plus)</h1>
                    <p class="card-content">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere sequi illo nam repudiandae tempore quaerat veritatis doloremque omnis molestias id.
                    </p>
                    <div className="d-flex align-items-baseline justify-content-between pt-1">
          <div className="Card-Icons">
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
        <div className="Rating-Point">
          <p>4.3 <span>/5</span></p>
        </div>
        </div>
        <div className="Card-price mt-2">
          <div><span>From</span></div>
          <div className="ps-1"><h5>US$192</h5></div>
        </div>
                </div>
                <div className="Card-Button">
            <button type="button" class="btn btn-primary">Book Now</button>
            </div>
                <div class="date-box">
                    <span class="month">JUNE</span>
                    <span class="date">29</span>
                </div>
   
            </div>
            </div>
                 </div>

                 <div class="custom-mobile d-flex justify-content-space-between">
  <div class="card card-width">
  <img src={Image2} class="card-img-top" alt="..."/>
                <div class="content-box">
                    <h1 class="card-title pt-3">Grand Mercure Phuket Patong(SHA Extra Plus)</h1>
                    <p class="card-content">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere sequi illo nam repudiandae tempore quaerat veritatis doloremque omnis molestias id.
                    </p>
                    <div className="d-flex align-items-baseline justify-content-between pt-1">
          <div className="Card-Icons">
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
        <div className="Rating-Point">
          <p>4.3 <span>/5</span></p>
        </div>
        </div>
        <div className="Card-price mt-2">
          <div><span>From</span></div>
          <div className="ps-1"><h5>US$192</h5></div>
        </div>
                </div>
                <div className="Card-Button">
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button>
            </div>
                <div class="date-box">
                    <span class="month">JUNE</span>
                    <span class="date">29</span>
                </div>
   
            </div>
                 </div>

                 <div class="custom-mobile d-flex justify-content-space-between">
  <div class="card card-width">
  <img src={Image3} class="card-img-top" alt="..."/>
                <div class="content-box">
                    <h1 class="card-title pt-3">Grand Mercure Phuket Patong(SHA Extra Plus)</h1>
                    <p class="card-content">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere sequi illo nam repudiandae tempore quaerat veritatis doloremque omnis molestias id.
                    </p>
                    <div className="d-flex align-items-baseline justify-content-between pt-1">
          <div className="Card-Icons">
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
        <div className="Rating-Point">
          <p>4.3 <span>/5</span></p>
        </div>
        </div>
        <div className="Card-price mt-2">
          <div><span>From</span></div>
          <div className="ps-1"><h5>US$192</h5></div>
        </div>
                </div>

                <div class="date-box">
                    <span class="month">JUNE</span>
                    <span class="date">29</span>
                </div>
                <div className="Card-Button">
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button>
            </div>
            </div>
                 </div>
  
                 <div class="custom-mobile d-flex justify-content-space-between">
  <div class="card card-width">
  <img src={Image4} class="card-img-top" alt="..."/>
                <div class="content-box">
                    <h1 class="card-title pt-3">Grand Mercure Phuket Patong(SHA Extra Plus)</h1>
                    <p class="card-content">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere sequi illo nam repudiandae tempore quaerat veritatis doloremque omnis molestias id.
                    </p>
                    <div className="d-flex align-items-baseline justify-content-between pt-1">
          <div className="Card-Icons">
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
        <div className="Rating-Point">
          <p>4.3 <span>/5</span></p>
        </div>
        </div>
        <div className="Card-price mt-2">
          <div><span>From</span></div>
          <div className="ps-1"><h5>US$192</h5></div>
        </div>
                </div>

                <div class="date-box">
                    <span class="month">JUNE</span>
                    <span class="date">29</span>
                </div>
                <div className="Card-Button">
            <button type="button" class="btn btn-primary">Book Now</button>
            </div>
            </div>
                 </div>
                 </OwlCarousel> 
                 </div>
                 </div>

                 <div class="tab-pane fade" id="Singapore-tab-pane" role="tabpanel" aria-labelledby="Singapore-tab" tabindex="0">
                  <div class="row ">
                  <OwlCarousel className="Top-Destination-Carousel  Flight-Carousel" {...options}>
                 <div class="custom-mobile d-flex justify-content-space-between">
                  <div className="parent">
                <div class="card card-width">
               <img src={Image1} class="card-img-top" alt="..."/>
                <div class="content-box">
                    <h1 class="card-title pt-3">Grand Mercure Phuket Patong(SHA Extra Plus)</h1>
                    <p class="card-content">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere sequi illo nam repudiandae tempore quaerat veritatis doloremque omnis molestias id.
                    </p>
                    <div className="d-flex align-items-baseline justify-content-between pt-1">
          <div className="Card-Icons">
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
        <div className="Rating-Point">
          <p>4.3 <span>/5</span></p>
        </div>
        </div>
        <div className="Card-price mt-2">
          <div><span>From</span></div>
          <div className="ps-1"><h5>US$192</h5></div>
        </div>
                </div>
                <div className="Card-Button">
            <button type="button" class="btn btn-primary">Book Now</button>
            </div>
                <div class="date-box">
                    <span class="month">JUNE</span>
                    <span class="date">29</span>
                </div>
   
            </div>
            </div>
                 </div>

                 <div class="custom-mobile d-flex justify-content-space-between">
  <div class="card card-width">
  <img src={Image2} class="card-img-top" alt="..."/>
                <div class="content-box">
                    <h1 class="card-title pt-3">Grand Mercure Phuket Patong(SHA Extra Plus)</h1>
                    <p class="card-content">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere sequi illo nam repudiandae tempore quaerat veritatis doloremque omnis molestias id.
                    </p>
                    <div className="d-flex align-items-baseline justify-content-between pt-1">
          <div className="Card-Icons">
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
        <div className="Rating-Point">
          <p>4.3 <span>/5</span></p>
        </div>
        </div>
        <div className="Card-price mt-2">
          <div><span>From</span></div>
          <div className="ps-1"><h5>US$192</h5></div>
        </div>
                </div>
                <div className="Card-Button">
            <button type="button" class="btn btn-primary">Book Now</button>
            </div>
                <div class="date-box">
                    <span class="month">JUNE</span>
                    <span class="date">29</span>
                </div>
   
            </div>
                 </div>

                 <div class="custom-mobile d-flex justify-content-space-between">
  <div class="card card-width">
  <img src={Image3} class="card-img-top" alt="..."/>
                <div class="content-box">
                    <h1 class="card-title pt-3">Grand Mercure Phuket Patong(SHA Extra Plus)</h1>
                    <p class="card-content">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere sequi illo nam repudiandae tempore quaerat veritatis doloremque omnis molestias id.
                    </p>
                    <div className="d-flex align-items-baseline justify-content-between pt-1">
          <div className="Card-Icons">
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
        <div className="Rating-Point">
          <p>4.3 <span>/5</span></p>
        </div>
        </div>
        <div className="Card-price mt-2">
          <div><span>From</span></div>
          <div className="ps-1"><h5>US$192</h5></div>
        </div>
                </div>
                <div className="Card-Button">
            <button type="button" class="btn btn-primary">Book Now</button>
            </div>
                <div class="date-box">
                    <span class="month">JUNE</span>
                    <span class="date">29</span>
                </div>
   
            </div>
                 </div>
  
                 <div class="custom-mobile d-flex justify-content-space-between">
  <div class="card card-width">
  <img src={Image4} class="card-img-top" alt="..."/>
                <div class="content-box">
                    <h1 class="card-title pt-3">Grand Mercure Phuket Patong(SHA Extra Plus)</h1>
                    <p class="card-content">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere sequi illo nam repudiandae tempore quaerat veritatis doloremque omnis molestias id.
                    </p>
                    <div className="d-flex align-items-baseline justify-content-between pt-1">
          <div className="Card-Icons">
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
        <div className="Rating-Point">
          <p>4.3 <span>/5</span></p>
        </div>
        </div>
        <div className="Card-price mt-2">
          <div><span>From</span></div>
          <div className="ps-1"><h5>US$192</h5></div>
        </div>
                </div>

                <div class="date-box">
                    <span class="month">JUNE</span>
                    <span class="date">29</span>
                </div>
                <div className="Card-Button">
            <button type="button" class="btn btn-primary">Book Now</button>
            </div>
            </div>
                 </div>
                 </OwlCarousel> 
                 </div>
                 </div>

                 <div class="tab-pane fade" id="Tokyo-tab-pane" role="tabpanel" aria-labelledby="Tokyo-tab" tabindex="0">
                 <div class="row ">
                 <OwlCarousel className="Top-Destination-Carousel  Flight-Carousel" {...options}>
                 <div class="custom-mobile d-flex justify-content-space-between">
                  <div className="parent">
                <div class="card card-width">
               <img src={Image1} class="card-img-top" alt="..."/>
                <div class="content-box">
                    <h1 class="card-title pt-3">Grand Mercure Phuket Patong(SHA Extra Plus)</h1>
                    <p class="card-content">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere sequi illo nam repudiandae tempore quaerat veritatis doloremque omnis molestias id.
                    </p>
                    <div className="d-flex align-items-baseline justify-content-between pt-1">
          <div className="Card-Icons">
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
        <div className="Rating-Point">
          <p>4.3 <span>/5</span></p>
        </div>
        </div>
        <div className="Card-price mt-2">
          <div><span>From</span></div>
          <div className="ps-1"><h5>US$192</h5></div>
        </div>
                </div>
<div className="Card-Button">
            <button type="button" class="btn btn-primary">Book Now</button>
            </div>
                <div class="date-box">
                    <span class="month">JUNE</span>
                    <span class="date">29</span>
                </div>
   
            </div>
            </div>
                 </div>

                 <div class="custom-mobile d-flex justify-content-space-between">
  <div class="card card-width">
  <img src={Image2} class="card-img-top" alt="..."/>
                <div class="content-box">
                    <h1 class="card-title pt-3">Grand Mercure Phuket Patong(SHA Extra Plus)</h1>
                    <p class="card-content">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere sequi illo nam repudiandae tempore quaerat veritatis doloremque omnis molestias id.
                    </p>
                    <div className="d-flex align-items-baseline justify-content-between pt-1">
          <div className="Card-Icons">
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
        <div className="Rating-Point">
          <p>4.3 <span>/5</span></p>
        </div>
        </div>
        <div className="Card-price mt-2">
          <div><span>From</span></div>
          <div className="ps-1"><h5>US$192</h5></div>
        </div>
                </div>
<div className="Card-Button">
            <button type="button" class="btn btn-primary">Book Now</button>
            </div>
                <div class="date-box">
                    <span class="month">JUNE</span>
                    <span class="date">29</span>
                </div>
   
            </div>
                 </div>

                 <div class="custom-mobile d-flex justify-content-space-between">
  <div class="card card-width">
  <img src={Image3} class="card-img-top" alt="..."/>
                <div class="content-box">
                    <h1 class="card-title pt-3">Grand Mercure Phuket Patong(SHA Extra Plus)</h1>
                    <p class="card-content">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere sequi illo nam repudiandae tempore quaerat veritatis doloremque omnis molestias id.
                    </p>
                    <div className="d-flex align-items-baseline justify-content-between pt-1">
          <div className="Card-Icons">
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
        <div className="Rating-Point">
          <p>4.3 <span>/5</span></p>
        </div>
        </div>
        <div className="Card-price mt-2">
          <div><span>From</span></div>
          <div className="ps-1"><h5>US$192</h5></div>
        </div>
                </div>
<div className="Card-Button">
            <button type="button" class="btn btn-primary">Book Now</button>
            </div>
                <div class="date-box">
                    <span class="month">JUNE</span>
                    <span class="date">29</span>
                </div>
   
            </div>
                 </div>
  
                 <div class="custom-mobile d-flex justify-content-space-between">
  <div class="card card-width">
  <img src={Image4} class="card-img-top" alt="..."/>
                <div class="content-box">
                    <h1 class="card-title pt-3">Grand Mercure Phuket Patong(SHA Extra Plus)</h1>
                    <p class="card-content">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere sequi illo nam repudiandae tempore quaerat veritatis doloremque omnis molestias id.
                    </p>
                    <div className="d-flex align-items-baseline justify-content-between pt-1">
          <div className="Card-Icons">
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
        <div className="Rating-Point">
          <p>4.3 <span>/5</span></p>
        </div>
        </div>
        <div className="Card-price mt-2">
          <div><span>From</span></div>
          <div className="ps-1"><h5>US$192</h5></div>
        </div>
                </div>
<div className="Card-Button">
            <button type="button" class="btn btn-primary">Book Now</button>
            </div>
                <div class="date-box">
                    <span class="month">JUNE</span>
                    <span class="date">29</span>
                </div>
   
            </div>
                 </div>
                 </OwlCarousel>
                </div>
                 </div>

                 <div class="tab-pane fade" id="Shanghai-tab-pane" role="tabpanel" aria-labelledby="Shanghai-tab" tabindex="0">
                 <div class="row ">
                 <OwlCarousel className="Top-Destination-Carousel  Flight-Carousel" {...options}>
                 <div class="custom-mobile d-flex justify-content-space-between">
                  <div className="parent">
                <div class="card card-width">
               <img src={Image1} class="card-img-top" alt="..."/>
                <div class="content-box">
                    <h1 class="card-title pt-3">Grand Mercure Phuket Patong(SHA Extra Plus)</h1>
                    <p class="card-content">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere sequi illo nam repudiandae tempore quaerat veritatis doloremque omnis molestias id.
                    </p>
                    <div className="d-flex align-items-baseline justify-content-between pt-1">
          <div className="Card-Icons">
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
        <div className="Rating-Point">
          <p>4.3 <span>/5</span></p>
        </div>
        </div>
        <div className="Card-price mt-2">
          <div><span>From</span></div>
          <div className="ps-1"><h5>US$192</h5></div>
        </div>
                </div>
<div className="Card-Button">
            <button type="button" class="btn btn-primary">Book Now</button>
            </div>
                <div class="date-box">
                    <span class="month">JUNE</span>
                    <span class="date">29</span>
                </div>
   
            </div>
            </div>
                 </div>

                 <div class="custom-mobile d-flex justify-content-space-between">
  <div class="card">
  <img src={Image2} class="card-img-top" alt="..."/>
                <div class="content-box">
                    <h1 class="card-title pt-3">Grand Mercure Phuket Patong(SHA Extra Plus)</h1>
                    <p class="card-content">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere sequi illo nam repudiandae tempore quaerat veritatis doloremque omnis molestias id.
                    </p>
                    <div className="d-flex align-items-baseline justify-content-between pt-1">
          <div className="Card-Icons">
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
        <div className="Rating-Point">
          <p>4.3 <span>/5</span></p>
        </div>
        </div>
        <div className="Card-price mt-2">
          <div><span>From</span></div>
          <div className="ps-1"><h5>US$192</h5></div>
        </div>
                </div>
<div className="Card-Button">
            <button type="button" class="btn btn-primary">Book Now</button>
            </div>
                <div class="date-box">
                    <span class="month">JUNE</span>
                    <span class="date">29</span>
                </div>
   
            </div>
                 </div>

                 <div class="custom-mobile d-flex justify-content-space-between">
  <div class="card">
  <img src={Image3} class="card-img-top" alt="..."/>
                <div class="content-box">
                    <h1 class="card-title pt-3">Grand Mercure Phuket Patong(SHA Extra Plus)</h1>
                    <p class="card-content">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere sequi illo nam repudiandae tempore quaerat veritatis doloremque omnis molestias id.
                    </p>
                    <div className="d-flex align-items-baseline justify-content-between pt-1">
          <div className="Card-Icons">
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
        <div className="Rating-Point">
          <p>4.3 <span>/5</span></p>
        </div>
        </div>
        <div className="Card-price mt-2">
          <div><span>From</span></div>
          <div className="ps-1"><h5>US$192</h5></div>
        </div>
                </div>
<div className="Card-Button">
            <button type="button" class="btn btn-primary">Book Now</button>
            </div>
                <div class="date-box">
                    <span class="month">JUNE</span>
                    <span class="date">29</span>
                </div>
   
            </div>
                 </div>
  
                 <div class="custom-mobile d-flex justify-content-space-between">
  <div class="card">
  <img src={Image4} class="card-img-top" alt="..."/>
                <div class="content-box">
                    <h1 class="card-title pt-3">Grand Mercure Phuket Patong(SHA Extra Plus)</h1>
                    <p class="card-content">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere sequi illo nam repudiandae tempore quaerat veritatis doloremque omnis molestias id.
                    </p>
                    <div className="d-flex align-items-baseline justify-content-between pt-1">
          <div className="Card-Icons">
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
        <div className="Rating-Point">
          <p>4.3 <span>/5</span></p>
        </div>
        </div>
        <div className="Card-price mt-2">
          <div><span>From</span></div>
          <div className="ps-1"><h5>US$192</h5></div>
        </div>
                </div>
<div className="Card-Button">
            <button type="button" class="btn btn-primary">Book Now</button>
            </div>
                <div class="date-box">
                    <span class="month">JUNE</span>
                    <span class="date">29</span>
                </div>
   
            </div>
                 </div>
                 </OwlCarousel>
                </div>
                 </div>

                 <div class="tab-pane fade" id="Phuket-tab-pane" role="tabpanel" aria-labelledby="Phuket-tab" tabindex="0">
                  <div class="row ">
                  <OwlCarousel className="Top-Destination-Carousel  Flight-Carousel" {...options}>
                 <div class="custom-mobile d-flex justify-content-space-between">
                  <div className="parent">
                <div class="card card-width">
               <img src={Image1} class="card-img-top" alt="..."/>
                <div class="content-box">
                    <h1 class="card-title pt-3">Grand Mercure Phuket Patong(SHA Extra Plus)</h1>
                    <p class="card-content">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere sequi illo nam repudiandae tempore quaerat veritatis doloremque omnis molestias id.
                    </p>
                    <div className="d-flex align-items-baseline justify-content-between pt-1">
          <div className="Card-Icons">
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
        <div className="Rating-Point">
          <p>4.3 <span>/5</span></p>
        </div>
        </div>
        <div className="Card-price mt-2">
          <div><span>From</span></div>
          <div className="ps-1"><h5>US$192</h5></div>
        </div>
                </div>
<div className="Card-Button">
            <button type="button" class="btn btn-primary">Book Now</button>
            </div>
                <div class="date-box">
                    <span class="month">JUNE</span>
                    <span class="date">29</span>
                </div>
   
            </div>
            </div>
                 </div>

                 <div class="custom-mobile d-flex justify-content-space-between">
  <div class="card card-width">
  <img src={Image2} class="card-img-top" alt="..."/>
                <div class="content-box">
                    <h1 class="card-title pt-3">Grand Mercure Phuket Patong(SHA Extra Plus)</h1>
                    <p class="card-content">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere sequi illo nam repudiandae tempore quaerat veritatis doloremque omnis molestias id.
                    </p>
                    <div className="d-flex align-items-baseline justify-content-between pt-1">
          <div className="Card-Icons">
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
        <div className="Rating-Point">
          <p>4.3 <span>/5</span></p>
        </div>
        </div>
        <div className="Card-price mt-2">
          <div><span>From</span></div>
          <div className="ps-1"><h5>US$192</h5></div>
        </div>
                </div>
<div className="Card-Button">
            <button type="button" class="btn btn-primary">Book Now</button>
            </div>
                <div class="date-box">
                    <span class="month">JUNE</span>
                    <span class="date">29</span>
                </div>
   
            </div>
                 </div>

                 <div class="custom-mobile d-flex justify-content-space-between">
  <div class="card card-width">
  <img src={Image3} class="card-img-top" alt="..."/>
                <div class="content-box">
                    <h1 class="card-title pt-3">Grand Mercure Phuket Patong(SHA Extra Plus)</h1>
                    <p class="card-content">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere sequi illo nam repudiandae tempore quaerat veritatis doloremque omnis molestias id.
                    </p>
                    <div className="d-flex align-items-baseline justify-content-between pt-1">
          <div className="Card-Icons">
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
        <div className="Rating-Point">
          <p>4.3 <span>/5</span></p>
        </div>
        </div>
        <div className="Card-price mt-2">
          <div><span>From</span></div>
          <div className="ps-1"><h5>US$192</h5></div>
        </div>
                </div>
<div className="Card-Button">
             <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button>
            </div>
                <div class="date-box">
                    <span class="month">JUNE</span>
                    <span class="date">29</span>
                </div>
   
            </div>
                 </div>
  
                 <div class="custom-mobile d-flex justify-content-space-between">
  <div class="card card-width">
  <img src={Image4} class="card-img-top" alt="..."/>
                <div class="content-box">
                    <h1 class="card-title pt-3">Grand Mercure Phuket Patong(SHA Extra Plus)</h1>
                    <p class="card-content">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere sequi illo nam repudiandae tempore quaerat veritatis doloremque omnis molestias id.
                    </p>
                    <div className="d-flex align-items-baseline justify-content-between pt-1">
          <div className="Card-Icons">
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
        <div className="Rating-Point">
          <p>4.3 <span>/5</span></p>
        </div>
        </div>
        <div className="Card-price mt-2">
          <div><span>From</span></div>
          <div className="ps-1"><h5>US$192</h5></div>
        </div>
                </div>
<div className="Card-Button">
             <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button>
            </div>
                <div class="date-box">
                    <span class="month">JUNE</span>
                    <span class="date">29</span>
                </div>
   
            </div>
                 </div>
                 </OwlCarousel>
                </div>
                 </div>

                 <div class="tab-pane fade" id="Seoul-tab-pane" role="tabpanel" aria-labelledby="Seoul-tab" tabindex="0">
                 <div class="row ">
                 <OwlCarousel className="Top-Destination-Carousel  Flight-Carousel" {...options}>
                 <div class="custom-mobile d-flex justify-content-space-between">
                  <div className="parent">
                <div class="card card-width">
               <img src={Image1} class="card-img-top" alt="..."/>
                <div class="content-box">
                    <h1 class="card-title pt-3">Grand Mercure Phuket Patong(SHA Extra Plus)</h1>
                    <p class="card-content">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere sequi illo nam repudiandae tempore quaerat veritatis doloremque omnis molestias id.
                    </p>
                    <div className="d-flex align-items-baseline justify-content-between pt-1">
          <div className="Card-Icons">
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
        <div className="Rating-Point">
          <p>4.3 <span>/5</span></p>
        </div>
        </div>
        <div className="Card-price mt-2">
          <div><span>From</span></div>
          <div className="ps-1"><h5>US$192</h5></div>
        </div>
                </div>
<div className="Card-Button">
             <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button>
            </div>
                <div class="date-box">
                    <span class="month">JUNE</span>
                    <span class="date">29</span>
                </div>
   
            </div>
            </div>
                 </div>

                 <div class="custom-mobile d-flex justify-content-space-between">
  <div class="card card-width">
  <img src={Image2} class="card-img-top" alt="..."/>
                <div class="content-box">
                    <h1 class="card-title pt-3">Grand Mercure Phuket Patong(SHA Extra Plus)</h1>
                    <p class="card-content">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere sequi illo nam repudiandae tempore quaerat veritatis doloremque omnis molestias id.
                    </p>
                    <div className="d-flex align-items-baseline justify-content-between pt-1">
          <div className="Card-Icons">
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
        <div className="Rating-Point">
          <p>4.3 <span>/5</span></p>
        </div>
        </div>
        <div className="Card-price mt-2">
          <div><span>From</span></div>
          <div className="ps-1"><h5>US$192</h5></div>
        </div>
                </div>
<div className="Card-Button">
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button>
            </div>
                <div class="date-box">
                    <span class="month">JUNE</span>
                    <span class="date">29</span>
                </div>
   
            </div>
                 </div>

                 <div class="custom-mobile d-flex justify-content-space-between">
  <div class="card card-width">
  <img src={Image3} class="card-img-top" alt="..."/>
                <div class="content-box">
                    <h1 class="card-title pt-3">Grand Mercure Phuket Patong(SHA Extra Plus)</h1>
                    <p class="card-content">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere sequi illo nam repudiandae tempore quaerat veritatis doloremque omnis molestias id.
                    </p>
                    <div className="d-flex align-items-baseline justify-content-between pt-1">
          <div className="Card-Icons">
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
        <div className="Rating-Point">
          <p>4.3 <span>/5</span></p>
        </div>
        </div>
        <div className="Card-price mt-2">
          <div><span>From</span></div>
          <div className="ps-1"><h5>US$192</h5></div>
        </div>
                </div>
<div className="Card-Button">
             <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button>
            </div>
                <div class="date-box">
                    <span class="month">JUNE</span>
                    <span class="date">29</span>
                </div>
   
            </div>
                 </div>
  
                 <div class="custom-mobile d-flex justify-content-space-between">
  <div class="card card-width">
  <img src={Image4} class="card-img-top" alt="..."/>
                <div class="content-box">
                    <h1 class="card-title pt-3">Grand Mercure Phuket Patong(SHA Extra Plus)</h1>
                    <p class="card-content">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere sequi illo nam repudiandae tempore quaerat veritatis doloremque omnis molestias id.
                    </p>
                    <div className="d-flex align-items-baseline justify-content-between pt-1">
          <div className="Card-Icons">
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
        <div className="Rating-Point">
          <p>4.3 <span>/5</span></p>
        </div>
        </div>
        <div className="Card-price mt-2">
          <div><span>From</span></div>
          <div className="ps-1"><h5>US$192</h5></div>
        </div>
                </div>
 <div className="Card-Button">
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button>
            </div>
                <div class="date-box">
                    <span class="month">JUNE</span>
                    <span class="date">29</span>
                </div>
   
            </div>
                 </div>
                 </OwlCarousel>
                </div>
                 </div>

                 <div class="tab-pane fade" id="Osaka-tab-pane" role="tabpanel" aria-labelledby="Osaka-tab" tabindex="0">
                 <div class="row ">
                 <OwlCarousel className="Top-Destination-Carousel  Flight-Carousel" {...options}>
                 <div class="custom-mobile d-flex justify-content-space-between">
                  <div className="parent">
                <div class="card card-width">
               <img src={Image1} class="card-img-top" alt="..."/>
                <div class="content-box">
                    <h1 class="card-title pt-3">Grand Mercure Phuket Patong(SHA Extra Plus)</h1>
                    <p class="card-content">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere sequi illo nam repudiandae tempore quaerat veritatis doloremque omnis molestias id.
                    </p>
                    <div className="d-flex align-items-baseline justify-content-between pt-1">
          <div className="Card-Icons">
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
        <div className="Rating-Point">
          <p>4.3 <span>/5</span></p>
        </div>
        </div>
        <div className="Card-price mt-2">
          <div><span>From</span></div>
          <div className="ps-1"><h5>US$192</h5></div>
        </div>
                </div>
 <div className="Card-Button">
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button>
            </div>
                <div class="date-box">
                    <span class="month">JUNE</span>
                    <span class="date">29</span>
                </div>
   
            </div>
            </div>
                 </div>

                 <div class="custom-mobile d-flex justify-content-space-between">
  <div class="card card-width">
  <img src={Image2} class="card-img-top" alt="..."/>
                <div class="content-box">
                    <h1 class="card-title pt-3">Grand Mercure Phuket Patong(SHA Extra Plus)</h1>
                    <p class="card-content">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere sequi illo nam repudiandae tempore quaerat veritatis doloremque omnis molestias id.
                    </p>
                    <div className="d-flex align-items-baseline justify-content-between pt-1">
          <div className="Card-Icons">
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
        <div className="Rating-Point">
          <p>4.3 <span>/5</span></p>
        </div>
        </div>
        <div className="Card-price mt-2">
          <div><span>From</span></div>
          <div className="ps-1"><h5>US$192</h5></div>
        </div>
                </div>
 <div className="Card-Button">
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button>
            </div>
                <div class="date-box">
                    <span class="month">JUNE</span>
                    <span class="date">29</span>
                </div>
   
            </div>
                 </div>

                 <div class="custom-mobile d-flex justify-content-space-between">
  <div class="card card-width">
  <img src={Image3} class="card-img-top" alt="..."/>
                <div class="content-box">
                    <h1 class="card-title pt-3">Grand Mercure Phuket Patong(SHA Extra Plus)</h1>
                    <p class="card-content">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere sequi illo nam repudiandae tempore quaerat veritatis doloremque omnis molestias id.
                    </p>
                    <div className="d-flex align-items-baseline justify-content-between pt-1">
          <div className="Card-Icons">
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
        <div className="Rating-Point">
          <p>4.3 <span>/5</span></p>
        </div>
        </div>
        <div className="Card-price mt-2">
          <div><span>From</span></div>
          <div className="ps-1"><h5>US$192</h5></div>
        </div>
                </div>
 <div className="Card-Button">
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button>
            </div>
                <div class="date-box">
                    <span class="month">JUNE</span>
                    <span class="date">29</span>
                </div>
   
            </div>
                 </div>
  
                 <div class="custom-mobile d-flex justify-content-space-between">
  <div class="card card-width">
  <img src={Image4} class="card-img-top" alt="..."/>
                <div class="content-box">
                    <h1 class="card-title pt-3">Grand Mercure Phuket Patong(SHA Extra Plus)</h1>
                    <p class="card-content">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere sequi illo nam repudiandae tempore quaerat veritatis doloremque omnis molestias id.
                    </p>
                    <div className="d-flex align-items-baseline justify-content-between pt-1">
          <div className="Card-Icons">
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
        <div className="Rating-Point">
          <p>4.3 <span>/5</span></p>
        </div>
        </div>
        <div className="Card-price mt-2">
          <div><span>From</span></div>
          <div className="ps-1"><h5>US$192</h5></div>
        </div>
                </div>
 <div className="Card-Button">
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button>
            </div>
                <div class="date-box">
                    <span class="month">JUNE</span>
                    <span class="date">29</span>
                </div>
   
            </div>
                 </div>
                 </OwlCarousel>
                </div>
                 </div>
               </div>
                </div>
            </div>
            <PopularAttractions></PopularAttractions>
            <CarRentals></CarRentals>
            <Section></Section>
            <Paragraph></Paragraph>
            <ContactForm></ContactForm>    
            <Footer></Footer>
      </div>
        
    )
}

export default Card;