import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Flightcardimg1 from "./Carousel Images/flightcard1.png"
import Flightcardimg2 from "./Carousel Images/flightcard2.png"
import Flightcardimg3 from "./Carousel Images/flightcard3.png"
import Flightcardimg4 from "./Carousel Images/flightcard4.png"
import "./Carousel.css"
//Owl Carousel Settings
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
          items: 1,
      },
      700: {
          items: 2,
      },
      1000: {
          items: 3,
      }
  },
};
class Carousel extends React.Component {
  render() {
   
    return (
      <div id="grow">
      <div className='Carousel-Heading zoom-able pb-5'>
         <div className='container '>
          <h1 className='pt-5'>Popular Destination</h1>
  
                <OwlCarousel className="slider-items Flight-Page-Carousel owl-carousel Flight-Carousel" {...options}>
                      <div class="item">
                      <div class="post-module flight-card" data-aos="fade-right">
                 <div class="thumbnail">
                   <div className="Flight-Img">
                   <img src={Flightcardimg3}/>
                   </div>
                 </div>
                 <div class="post-content">
                   <h2 class="sub_title">Dubai</h2>
                   <p class="Rental-card-content">
                   Dubai is famous for contemporary sightseeing attractions such as the Burj Khalifa (the world's tallest building) and shopping malls that come complete with mammoth aquariums and indoor ski slopes.
                    </p>
                    <div className="d-flex align-items-baseline justify-content-between">
          <div className="Rental-Card-Icons">
        </div>
        <div className="Card-Reviews">
          <p>354 reviews </p>
        </div>
        </div>
        <div className="d-flex Card-Rating">
        <div className="Flight-Rating-Point">
          <p>4.3 <span>/5</span></p>
        </div>
        </div>
        <div className="Card-price mt-1">
          <div><span>From</span></div>
          <div className="ps-1"><h5>US$192</h5></div>
        </div>
        <div className="Rental-Card-Button fligt-card-button">
            <button type="button" class="btn"  data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button>
     </div>
                 </div>
               </div>

                      </div>

                      <div class="item">
                      <div class="post-module flight-card" data-aos="fade-down">
                 <div class="thumbnail">
                   <div className="Card-Img Flight-Img">
                   <img src={Flightcardimg4}/>
                   </div>
                 </div>
                 <div class="post-content">
                   <h2 class="sub_title">Saudia</h2>
                   <p class="Rental-card-content">
                   Saudia is famous for contemporary sightseeing attractions such as the Burj Khalifa (the world's tallest building) and shopping malls that come complete with mammoth aquariums and indoor ski slopes.
                    </p>
                    <div className="d-flex align-items-baseline justify-content-between">
          <div className="Rental-Card-Icons">
        </div>
        <div className="Card-Reviews">
          <p>354 reviews </p>
        </div>
        </div>
        <div className="d-flex Card-Rating">
        <div className="Flight-Rating-Point">
          <p>4.3 <span>/5</span></p>
        </div>
        </div>
        <div className="Card-price mt-1">
          <div><span>From</span></div>
          <div className="ps-1"><h5>US$192</h5></div>
        </div>
        <div className="Rental-Card-Button fligt-card-button">
            <button type="button" class="btn"  data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button>
     </div>
                 </div>
               </div>
                      </div>

                      <div class="item">
                      <div class="post-module flight-card" data-aos="fade-left">
                 <div class="thumbnail">
                   <div className="Card-Img Flight-Img">
                   <img src={Flightcardimg1}/>
                   </div>
                 </div>
                 <div class="post-content">
                   <h2 class="sub_title">Canda</h2>
                   <p class="Rental-card-content">
                   Canda is famous for contemporary sightseeing attractions such as the Burj Khalifa (the world's tallest building) and shopping malls that come complete with mammoth aquariums and indoor ski slopes.
                    </p>
                    <div className="d-flex align-items-baseline justify-content-between">
          <div className="Rental-Card-Icons">
        </div>
        <div className="Card-Reviews">
          <p>354 reviews </p>
        </div>
        </div>
        <div className="d-flex Card-Rating">
        <div className="Flight-Rating-Point">
          <p>4.3 <span>/5</span></p>
        </div>
        </div>
        <div className="Card-price mt-1">
          <div><span>From</span></div>
          <div className="ps-1"><h5>US$192</h5></div>
        </div>
        <div className="Rental-Card-Button fligt-card-button">
            <button type="button" class="btn"  data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button>
     </div>
                 </div>
               </div>

                      </div>

                      <div class="item">
                      <div class="post-module flight-card">
                 <div class="thumbnail">
                   <div className="Card-Img Flight-Img">
                   <img src={Flightcardimg2}/>
                   </div>
                 </div>
                 <div class="post-content">
                   <h2 class="sub_title">Iran</h2>
                   <p class="Rental-card-content">
                   Iran is famous for contemporary sightseeing attractions such as the Burj Khalifa (the world's tallest building) and shopping malls that come complete with mammoth aquariums and indoor ski slopes.
                    </p>
                    <div className="d-flex align-items-baseline justify-content-between">
          <div className="Rental-Card-Icons">
        </div>
        <div className="Card-Reviews">
          <p>354 reviews </p>
        </div>
        </div>
        <div className="d-flex Card-Rating">
        <div className="Flight-Rating-Point">
          <p>4.3 <span>/5</span></p>
        </div>
        </div>
        <div className="Card-price mt-1">
          <div><span>From</span></div>
          <div className="ps-1"><h5>US$192</h5></div>
        </div>
        <div className="Rental-Card-Button fligt-card-button">
            <button type="button" class="btn"  data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button>
     </div>
                 </div>
               </div>
                      </div>

                  </OwlCarousel>
                  </div>
            </div>
            </div>
)
};
}
export default Carousel;
