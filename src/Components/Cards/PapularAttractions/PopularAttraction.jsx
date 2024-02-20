import React from "react";
import "./PopularAttractions.css"
import Image1 from "./PopularImage/image1.png"
import Image2 from "./PopularImage/image2.png"
import Image3 from "./PopularImage/image3.png"
import Image4 from "./PopularImage/image4.png"
import StarIcon from '@mui/icons-material/Star';
import OwlCarousel from 'react-owl-carousel';

const options = {
  margin: 10,
  responsiveClass: true,
  nav: true,
  dot:true,
  autoplay: false,
  navText: [".", "."],
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

const PopularAttractions = () => {
    return (
      <div className="">
        <div className="Best-Hotel-Image pb-5">
            <div className="container ">
                <div className="Card-Heading p-3">
                    <div className="Heading  pt-4">
                    <h2>Best Hotels</h2>
                    </div>
                </div>

                <div className="Card-Tabs p-1 pt-0">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                   <button class="nav-link custom-nav-button active" id="PopularBangkok-tab" data-bs-toggle="tab" data-bs-target="#PopularBangkok-tab-pane" type="button" role="tab" aria-controls="PopularLosAngles-tab-pane" aria-selected="false">Oman</button>
                 </li>
                 <li class="nav-item" role="presentation">
                   <button class="nav-link custom-nav-button" id="PopularLosAngles-tab" data-bs-toggle="tab" data-bs-target="#PopularLosAngles-tab-pane" type="button" role="tab" aria-controls="PopularLosAngles-tab-pane" aria-selected="false">Kuwait</button>
                 </li>

                 <li class="nav-item" role="presentation">
                   <button class="nav-link custom-nav-button" id="PopularSingapore-tab" data-bs-toggle="tab" data-bs-target="#PopularSingapore-tab-pane" type="button" role="tab" aria-controls="PopularSingapore-tab-pane" aria-selected="false">Oman</button>
                 </li>

                 <li class="nav-item" role="presentation">
                   <button class="nav-link custom-nav-button" id="PopularTokyo-tab" data-bs-toggle="tab" data-bs-target="#PopularTokyo-tab-pane" type="button" role="tab" aria-controls="PopularTokyo-tab-pane" aria-selected="false">Saudi Arabia</button>
                 </li>
                 <li class="nav-item" role="presentation">
                   <button class="nav-link custom-nav-button" id="PopularManila-tab" data-bs-toggle="tab" data-bs-target="#PopularManila-tab-pane" type="button" role="tab" aria-controls="PopularManila-tab-pane" aria-selected="false">Canda</button>
                 </li>
                 <li class="nav-item" role="presentation">
                   <button class="nav-link  custom-nav-button" id="PopularNewyork-tab" data-bs-toggle="tab" data-bs-target="#PopularNewyork-tab-pane" type="button" role="tab" aria-controls="PopularNewyork-tab-pane" aria-selected="false">Kuwait</button>
                 </li>
               </ul>
                </div>

                <div class="tab-content  p-3 " id="myTabContent">
                <div class="tab-pane fade show active" id="PopularBangkok-tab-pane" role="tabpanel" aria-labelledby="PopularBangkok-tab" tabindex="0">
                <div class="row ">
                <OwlCarousel className="Best-Hotel-Carousel  Flight-Carousel" {...options}>
                 <div class=" custom-mobile d-flex justify-content-space-between">
                  <div className="parent">
                <div class="card card-width-ml">
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

                 <div class=" custom-mobile d-flex justify-content-space-between">
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

                 <div class=" custom-mobile d-flex justify-content-space-between">
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
  
                 <div class=" custom-mobile d-flex justify-content-space-between">
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

                 <div class=" custom-mobile d-flex justify-content-space-between">
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

                 <div class=" custom-mobile d-flex justify-content-space-between">
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

                 <div class="tab-pane fade" id="PopularLosAngles-tab-pane" role="tabpanel" aria-labelledby="PopularLosAngles-tab" tabindex="0">
                 <div class="row ">
                 <OwlCarousel className="Best-Hotel-Carousel Flight-Carousel" {...options}>
                 <div class=" custom-mobile d-flex justify-content-space-between">
                  <div className="parent">
                <div class="card card-width ">
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

                 <div class=" custom-mobile d-flex justify-content-space-between">
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

                 <div class=" custom-mobile d-flex justify-content-space-between">
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
  
                 <div class=" custom-mobile d-flex justify-content-space-between">
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
                 
                 <div class="tab-pane fade" id="PopularSingapore-tab-pane" role="tabpanel" aria-labelledby="PopularSingapore-tab" tabindex="0">
                <div class="row ">
                <OwlCarousel className="Best-Hotel-Carousel  Flight-Carousel" {...options}>
                 <div class=" custom-mobile d-flex justify-content-space-between">
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

                 <div class=" custom-mobile d-flex justify-content-space-between">
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

                 <div class=" custom-mobile d-flex justify-content-space-between">
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
  
                 <div class=" custom-mobile d-flex justify-content-space-between">
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

                 <div class="tab-pane fade" id="PopularTokyo-tab-pane" role="tabpanel" aria-labelledby="PopularTokyo-tab" tabindex="0">
                 <div class="row ">
                 <OwlCarousel className="Best-Hotel-Carousel  Flight-Carousel" {...options}>
                 <div class=" custom-mobile d-flex justify-content-space-between">
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

                 <div class=" custom-mobile d-flex justify-content-space-between">
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

                 <div class=" custom-mobile d-flex justify-content-space-between">
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
  
                 <div class=" custom-mobile d-flex justify-content-space-between">
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

                 <div class="tab-pane fade" id="PopularManila-tab-pane" role="tabpanel" aria-labelledby="PopularManila-tab" tabindex="0">
                 <div class="row ">
                 <OwlCarousel className="Best-Hotel-Carousel  Flight-Carousel" {...options}>
                 <div class=" custom-mobile d-flex justify-content-space-between">
                  <div className="parent">
                <div class="card card-width ">
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

                 <div class=" custom-mobile d-flex justify-content-space-between">
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

                 <div class=" custom-mobile d-flex justify-content-space-between">
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
  
                 <div class=" custom-mobile d-flex justify-content-space-between">
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

                 <div class="tab-pane fade" id="PopularNewyork-tab-pane" role="tabpanel" aria-labelledby="PopularNewyork-tab" tabindex="0">
                 <div class="row ">
                 <OwlCarousel className="Best-Hotel-Carousel  Flight-Carousel" {...options}>
                 <div class=" custom-mobile d-flex justify-content-space-between">
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

                 <div class=" custom-mobile d-flex justify-content-space-between">
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

                 <div class=" custom-mobile d-flex justify-content-space-between">
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
  
                 <div class=" custom-mobile d-flex justify-content-space-between">
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
               </div>
                </div>
            </div>
            </div>
    )
}

export default PopularAttractions;