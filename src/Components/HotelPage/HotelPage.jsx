import React from "react";
import "./HotelPage.css"
import TopBanner from "../Banner/Banner";
import CoffeeIcon from '@mui/icons-material/Coffee';
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import HotTubIcon from '@mui/icons-material/HotTub';
import WifiIcon from '@mui/icons-material/Wifi';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import IronIcon from '@mui/icons-material/Iron';
import LockClockIcon from '@mui/icons-material/LockClock';
import OwlCarousel from 'react-owl-carousel';
import ClientImage1 from "../HotelPage/hotel images/clientimage1.jpg"
import ClientImage2 from "../HotelPage/hotel images/clientimage2.jpg"
import ClientImage3 from "../HotelPage/hotel images/clientimage3.jpg"
import ClientImage4 from "../HotelPage/hotel images/clientimage4.jpg"
import StarIcon from '@mui/icons-material/Star';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import WelcomeImage from "../HotelPage/hotel images/welcomeimg1.jpg"
import OfferImage1 from "../HotelPage/hotel images/offerimg1.jpg"
import OfferImage2 from "../HotelPage/hotel images/offerimg2.jpg"
import OfferImage3 from "../HotelPage/hotel images/offerimg3.jpg"
import HotelScroll from "../HotelPage/HotelScroll/HotelScroll";
import Footer from "../Footer/Footer"
import Logo from "../Assets/Logo/nexuslogo.png"
import TabsDetails from "../TabsDetails/TabsDetails";

const Newsoffer = {
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
            items: 3,
        },
        1000: {
            items: 3,
        }
    },
  };
  
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
            items: 3,
        },
        1000: {
            items: 3,
        }
    },
  };

const HotelPage = () => {

        return (
           <>
           <div className="Header hotel-bg">
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
    
                <div className="Welcome-Section pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-sm-12 col-md-12" >
                            <div className="Welcome-Section-img">
                            <img src={WelcomeImage} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12 col-md-12 ps-5 Welcome-Section-Heading" >
                            <h5 className="pt-5 mt-5">WELCOME TO NEXUS</h5>
                            <h2>Our Hotels Is The Best</h2>
                            <p>Pitchfork selfies master cleanse Kickstarter seitan retro. Drinking vinegar stumptown yr pop-up artisan sunt.</p>
                            <span className="text-muted">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="SaveCash-Jumbotron Jumbotron ">
                <div className="overlay">
                <div className="container">
                <div className="Jumbotron-Heading mt-3" >
                    <div className="Jumbotron-Content">
                    <h2>SAVE CASH FOR FUN</h2>
                    <p>With our hostel, you can save a lot of money on accommodation throughout the year to enjoy your stay at our city.</p>
                    <button className="btn ">Read More</button>
                    </div>
                </div>
            </div>
                </div>
            </div>

          
            <div className="Offer-Section pb-5">
            <div className="container">
                <div className="row">
                    <div className="Hotel-Heading text-center mt-5">
                        <h1>What We Offer</h1>
                    </div>
                    <div className="row d-flex">
                    <div className="col-lg-3 col-sm-12 col-md-12">
                        <div className="Hotel-Content text-center pt-4">
                        <CoffeeIcon className="Hotel-Social-Icons"/>
                        <h4 className="pt-3">Tea & Coffee</h4>
                        <p>You can always have some hot coffee & tea in our kitchen, available to all our clients.</p>
                        </div>

                    </div>
                    
                    <div className="col-lg-3 col-sm-12 col-md-12">
                        <div className="Hotel-Content text-center pt-4">
                        <DryCleaningIcon  className="Hotel-Social-Icons"/>
                        <h4 className="pt-3">Laundry</h4>
                        <p>Visit Hostel is famous for clean and hot showers that you can have at any time of the day.</p>
                        </div>

                    </div>
                    
                    <div className="col-lg-3 col-sm-12 col-md-12">
                        <div className="Hotel-Content text-center pt-4">
                        <AcUnitIcon  className="Hotel-Social-Icons"/>
                        <h4 className="pt-3">Air Conditioning</h4>
                        <p>All rooms at our hostel are equipped with reliable air conditioner systems.</p>
                        </div>
                    </div> 

                    <div className="col-lg-3 col-sm-12 col-md-12">
                        <div className="Hotel-Content text-center pt-4">
                        <HotTubIcon  className="Hotel-Social-Icons"/>
                        <h4 className="pt-3">Hot Showers</h4>
                        <p>You can always have some hot coffee & tea in our kitchen, available to all our clients.</p>
                        </div>
                    </div> 
                    </div>

                    <div  className="d-flex row">
                    <div className="col-lg-3 col-sm-12 col-md-12">
                        <div className="Hotel-Content text-center pt-4">
                        <WifiIcon  className="Hotel-Social-Icons"/>
                        <h4 className="pt-3">Free Wifi</h4>
                        <p>Our hostel is equipped with free high-speed Wi-Fi that is available 24/7 in all rooms.</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-12 col-md-12">
                        <div className="Hotel-Content text-center pt-4">
                        <RestaurantIcon  className="Hotel-Social-Icons"/>
                        <h4 className="pt-3">KITCHEN</h4>
                        <p>Our kitchen provides a wide range of daily fresh and tasty meals to our clients.</p>
                        </div>
                    </div>
                    
                    <div className="col-lg-3 col-sm-12 col-md-12">
                        <div className="Hotel-Content text-center pt-4">
                        <IronIcon  className="Hotel-Social-Icons"/>
                        <h4 className="pt-3">IRONING</h4>
                        <p>Use our ironing services to quickly made your clothes look splendid after laundry.</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-12 col-md-12">
                        <div className="Hotel-Content text-center pt-4">
                        <LockClockIcon  className="Hotel-Social-Icons"/>
                        <h4 className="pt-3">LOCKERS</h4>
                        <p>If you carry any valuable items, feel free to store them in our hostel’s lockers.</p>
                        </div>
                    </div>
                    </div>

                    
                </div>
            </div>
            </div>

            <div className="News-Offers Jumbotron">
                <div className="Offer-overlay">
            <div className="container">
                <div className="row">
                        <h1 className="text-center mt-5 mb-2">News & Offers</h1>
                        <p className="row NewsOffer-ptag text-center">There are many variations of passages of Lorem Ipsum available, but the majority have suffered words look even slightly believable.</p>
                      
                        <OwlCarousel className='News-Offers-Carousel slider-items owl-theme Items-Owl NewsOffer-Caeousel mt-3' loop margin={10} nav {...Newsoffer}>
                        <div className="Newsoffer-Card mt-3" >
                            <div className="Offer-Card mt-4">
                                <div>
                                <img src={OfferImage1} alt="" />
                                </div>
                            <div className="Offer-Content">
                            <h2>Work Hard, Party Hard in a Luxury Chalet in the Alps</h2>
                            <span className="Offer-Span">21, March, 2023</span>
                            <p className="pt-3">Ski resorts are evolving. Last summer we had a meeting with one of the main officers for French tourism in the Alps and he explained that they had carried out a lot of research and found that people need more than piste in a ski resort.</p>
                            </div>
                        </div>
                        </div> 

                        <div className="Newsoffer-Card mt-3">
                            <div className="Offer-Card mt-4">
                                <div>
                                <img src={OfferImage1} alt="" />
                                </div>
                            <div className="Offer-Content">
                            <h2>Work Hard, Party Hard in a Luxury Chalet in the Alps</h2>
                            <span className="Offer-Span">21, March, 2023</span>
                            <p className="pt-3">Ski resorts are evolving. Last summer we had a meeting with one of the main officers for French tourism in the Alps and he explained that they had carried out a lot of research and found that people need more than piste in a ski resort.</p>
                            </div>
                        </div>
                        </div> 

                        <div className="Newsoffer-Card mt-3" >
                            <div className="Offer-Card mt-4">
                                <div>
                                <img src={OfferImage1} alt="" />
                                </div>
                            <div className="Offer-Content">
                            <h2>Work Hard, Party Hard in a Luxury Chalet in the Alps</h2>
                            <span className="Offer-Span">21, March, 2023</span>
                            <p className="pt-3">Ski resorts are evolving. Last summer we had a meeting with one of the main officers for French tourism in the Alps and he explained that they had carried out a lot of research and found that people need more than piste in a ski resort.</p>
                            </div>
                        </div>
                        </div> 
                         </OwlCarousel>
                    </div>
                </div>
                </div>
                
            </div>

            
                <div className="Client-Review-Page ">
                <div className="container">
                <div className='Carousel-Heading Carousel-Heading-mb text-center'>
            <h1 className="pt-5 pb-3">What We Say Our Clients ?</h1>
        </div>
                <OwlCarousel className='slider-items owl-theme Items-Owl Client-Review-Carousel mt-3' loop margin={10} nav {...options}>

<div class='items Client-Review-Card mt-3' >
<div class="Client-Card ">
<div class="card-body pt-4">
    <div className="client-image mb-2">
    <img src={ClientImage2} alt="" />
    </div>
 <p class="Client-card-text pt-1">"luxury tristique usto duision vitae on diamen neque nivamus aesta atene artines arinianu ateli finibus viverra nec lacus usto duision vitae on diamen neque nivamus aesta atene artines. Nedana dinoz setlie and suscipe none misster."</p>
 <h2 className="Client-name pt-2">"Leslie Alexdander"</h2>
 <div className="Client-Social-Icon-Star">
 <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/>
 </div>

 <div className="client-Card-icon pt-2">
 <div className="Opicity">
 <a href="https://facebook.com/.com" target={"_blank"} rel="noreferrer"><FacebookIcon></FacebookIcon></a>
 </div>
 <div  className="Opicity">
 <a href="https://linkedin.com/.com" target={"_blank"} rel="noreferrer"><LinkedInIcon></LinkedInIcon></a>
 </div>
 <div  className="Opicity">
 <a href="https://twitter.com/.com" target={"_blank"} rel="noreferrer"><TwitterIcon></TwitterIcon></a>
 </div>
 </div>

</div>
</div>
</div>

<div class='items Client-Review-Card mt-3'>
<div class="Client-Card ">
<div class="card-body pt-4">
    <div className="client-image mb-2">
    <img src={ClientImage3} alt="" />
    </div>
    <p class="Client-card-text pt-1">"luxury tristique usto duision vitae on diamen neque nivamus aesta atene artines arinianu ateli finibus viverra nec lacus usto duision vitae on diamen neque nivamus aesta atene artines. Nedana dinoz setlie and suscipe none misster."</p>
 <h2 className="Client-name pt-3">"Jessica UK"</h2>
 <div className="Client-Social-Icon-Star">
 <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon className="text-white"/>
 </div>
 <div className="client-Card-icon pt-2">
 <div className="Opicity">
 <a href="https://facebook.com/.com" target={"_blank"} rel="noreferrer"><FacebookIcon></FacebookIcon></a>
 </div>
 <div  className="Opicity">
 <a href="https://linkedin.com/.com" target={"_blank"} rel="noreferrer"><LinkedInIcon></LinkedInIcon></a>
 </div>
 <div  className="Opicity">
 <a href="https://twitter.com/.com" target={"_blank"} rel="noreferrer"><TwitterIcon></TwitterIcon></a>
 </div>
 </div>
</div>
</div>
</div>

<div class='items Client-Review-Card mt-3' >
<div class="Client-Card ">
<div class="card-body pt-4">
    <div className="client-image mb-2">
    <img src={ClientImage4} alt="" />
    </div>
    <p class="Client-card-text pt-1">"luxury tristique usto duision vitae on diamen neque nivamus aesta atene artines arinianu ateli finibus viverra nec lacus usto duision vitae on diamen neque nivamus aesta atene artines. Nedana dinoz setlie and suscipe none misster."</p>
 <h2 className="Client-name pt-3">"Anas Iqbal"</h2>
 <div className="Client-Social-Icon-Star">
 <StarIcon/><StarIcon/><StarIcon/><StarIcon className="text-white"/><StarIcon className="text-white"/>
 </div>
 <div className="client-Card-icon pt-2">
 <div className="Opicity">
 <a href="https://facebook.com/.com" target={"_blank"} rel="noreferrer"><FacebookIcon></FacebookIcon></a>
 </div>
 <div  className="Opicity">
 <a href="https://linkedin.com/.com" target={"_blank"} rel="noreferrer"><LinkedInIcon></LinkedInIcon></a>
 </div>
 <div  className="Opicity">
 <a href="https://twitter.com/.com" target={"_blank"} rel="noreferrer"><TwitterIcon></TwitterIcon></a>
 </div>
 </div>
</div>
</div>
</div>

<div class='items Client-Review-Card mt-3'>
<div class="Client-Card ">
<div class="card-body pt-4">
    <div className="client-image mb-2">
    <img src={ClientImage1} alt="" />
    </div>
    <p class="Client-card-text pt-1">"luxury tristique usto duision vitae on diamen neque nivamus aesta atene artines arinianu ateli finibus viverra nec lacus usto duision vitae on diamen neque nivamus aesta atene artines. Nedana dinoz setlie and suscipe none misster."</p>
 <h2 className="Client-name pt-3">"Anas Iqbal"</h2>
 <div className="Client-Social-Icon-Star">
 <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/>
 </div>
 <div className="client-Card-icon pt-2">
 <div className="Opicity">
 <a href="https://facebook.com/.com" target={"_blank"} rel="noreferrer"><FacebookIcon></FacebookIcon></a>
 </div>
 <div  className="Opicity">
 <a href="https://linkedin.com/.com" target={"_blank"} rel="noreferrer"><LinkedInIcon></LinkedInIcon></a>
 </div>
 <div  className="Opicity">
 <a href="https://twitter.com/.com" target={"_blank"} rel="noreferrer"><TwitterIcon></TwitterIcon></a>
 </div>
 </div>
</div>
</div>
</div>

             </OwlCarousel>
                </div>
            </div>

     <HotelScroll></HotelScroll>


           
          <Footer></Footer>
      
            </>
    );
    
}

export default HotelPage;