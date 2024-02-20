import React from "react"
import "./CarPage.css"
import TopBanner from "../Banner/Banner";
import OwlCarousel from 'react-owl-carousel';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import StarsIcon from '@mui/icons-material/Stars';
import DiamondIcon from '@mui/icons-material/Diamond';
import StyleIcon from '@mui/icons-material/Style';
import TireRepairIcon from '@mui/icons-material/TireRepair';
import CarImage1 from "../CarPage/CarPageImage/Carimage1.jpg"
import CarImage2 from "../CarPage/CarPageImage/Carimage2.jpg"
import CarImage3 from "../CarPage/CarPageImage/Carimage3.jpg"
import CarImage4 from "../CarPage/CarPageImage/Carimage4.jpg"
import CarImage5 from "../CarPage/CarPageImage/Carimage5.jpg"
import CarImage6 from "../CarPage/CarPageImage/Carimage6.jpg"
import ArticlesImage1 from "../CarPage/CarPageImage/Articlesimage1.jpg"
import ArticlesImage2 from "../CarPage/CarPageImage/Articlesimage2.jpg"
import ArticlesImage3 from "../CarPage/CarPageImage/Articlesimage3.jpg"
import CallImage from "../CarPage/CarPageImage/callimage.png"
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import ClientImage1 from "../CarPage/CarPageImage/clientimage3.jpg"
import ClientImage2 from "../CarPage/CarPageImage/clientimage2.jpg"
import ClientImage3 from "../CarPage/CarPageImage/clientimage4.jpg"
import WelcomeImage from "../CarPage//CarPageImage/welcomeimage.jpg"
import Footer from "../Footer/Footer"
import ScrollCounter from "../CarPage/UpDownScroll/UpDownScroll";
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
            items: 4,
        }
    },
  };
  

const CarPage = () => {
    return (
       <>
       {/* <TopBanner></TopBanner>      */}

       <div className="Header car-bg">
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

            <div className="Car-Welcome-Section pb-5" >
            <div className="container">
                <div className="row" >
                        <h5 className="pt-5">HELPS YOU TO FIND YOUR NEXT CAR EASILY</h5>
                        <h2>Welcome To <span className="CarPage-Span CallSpan-Text"> Nexus</span></h2>
                        <p>Winged, good, male fourth abundantly dominion second it tree over thing that may tree. Signs fish made tree you days seas heaven. Called seas, shall isn’t.</p>
                       
                       <div className="Car-Welcome-Icons">
                       </div>
                        <div className="Car-Welcome-Img mt-4">
                            <img src={WelcomeImage} alt="" />
                        </div>
                </div>
            </div>
        </div>

        <ScrollCounter></ScrollCounter>

       <div className="Offer-Section CarPage-Offer-section pb-5">
            <div className="container">
                <div className="row">
                    <div className="Hotel-Heading CarPage-Heading  text-center">
                    <h5 className="pt-5">HELPS YOU TO FIND YOUR NEXT CAR EASILY</h5>
                            <h2>Services We<span className="CarPage-Span"> Offers </span></h2>
                            <p className="Hotel-Heading-Ptag">Pitchfork selfies master cleanse Kickstarter seitan retro. Drinking vinegar stumptown yr pop-up artisan sunt.</p>
                    </div>
                    <div className="col-lg-4 col-sm-12 col-md-12">
                        <div className="Hotel-Content text-center pt-4">
                      <CleaningServicesIcon className="Hotel-Social-Icons"></CleaningServicesIcon>
                        <h4 className="pt-3">Quality Srvices</h4>
                        <p>All our cars come from main dealers and go through rigorous checks and tests before they arrive at your door.</p>
                        </div>

                    </div>
                    
                     <div className="col-lg-4 col-sm-12 col-md-12">
                        <div className="Hotel-Content text-center pt-4">
                       <ManageAccountsIcon className="Hotel-Social-Icons"></ManageAccountsIcon>
                        <h4 className="pt-3">Exclusive Service</h4>
                        <p>All our cars come from main dealers and go through rigorous checks and tests before they arrive at your door.</p>
                        </div>

                    </div> 
                    
                    <div className="col-lg-4 col-sm-12 col-md-12" >
                        <div className="Hotel-Content text-center pt-4">
                        <StarsIcon className="Hotel-Social-Icons"></StarsIcon>
                        <h4 className="pt-3">Fast & Save</h4>
                        <p>All our cars come from main dealers and go through rigorous checks and tests before they arrive at your door.</p>
                        </div>
                    </div> 

                    <div className="col-lg-4 col-sm-12 col-md-12" >
                        <div className="Hotel-Content text-center pt-4">
                        <DiamondIcon className="Hotel-Social-Icons"></DiamondIcon>
                        <h4 className="pt-3">Peace Of Mind</h4>
                        <p>All our cars come from main dealers and go through rigorous checks and tests before they arrive at your door.</p>
                        </div>
                    </div> 

                    <div className="col-lg-4 col-sm-12 col-md-12" >
                        <div className="Hotel-Content text-center pt-4">
                        <StyleIcon className="Hotel-Social-Icons"></StyleIcon>
                        <h4 className="pt-3">very Best Prices</h4>
                        <p>All our cars come from main dealers and go through rigorous checks and tests before they arrive at your door.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-12 col-md-12" >
                        <div className="Hotel-Content text-center pt-4">
                       <TireRepairIcon className="Hotel-Social-Icons"></TireRepairIcon>
                        <h4 className="pt-3">Free Vehicle Valuation</h4>
                        <p>All our cars come from main dealers and go through rigorous checks and tests before they arrive at your door.</p>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
            </div>

            <div className="CardPage-Section pb-5">
            <div className="overlay">
            <div className="container">
                <div className="row">
                    <h5 className="text-center Card-Page-Heading mt-5">HELPS YOU TO FIND PERFECT CAR</h5>
                        <h2 className=" text-center mb-2">Our Vehicles <span className="CarPage-Span"> Listing</span></h2>
                        <p className="NewsOffer-ptag text-center">There are many variations of passages of Lorem Ipsum available, but the majority have suffered words look even slightly believable.</p>
                        
                        <OwlCarousel className='owl-theme Items-Owl Vehicles-Listing  mt-3' loop margin={10} nav {...Newsoffer}>
                        <div className="" >
                            <div className="CarPage-cardImage mt-4">
                                <div>
                                <img src={CarImage2} alt="" />
                                </div>
                            <div className="Cardpage-Background">
                            <h3>Telsa Model Y</h3>
                            <span className="carPage-Spantext pt-1"> $450 </span>
                            <div className="CarPage-MainDiv pt-3 d-flex">
                                <div>
                                    <ul>
                                        <h5>Registration</h5>
                                        <li>MA67NNL</li>
                                        <li>Mileage 4,015</li>
                                        <li>miles</li>
                                        <li>Engine Size 1 L</li>
                                    </ul>
                                </div>
                                 <div className="ps-4">
                                    <ul>
                                        <h5>Transmission</h5>
                                        <li>Automatic</li>
                                        <li>Fuel Type Petrol</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="CardPage-Button"> 
                                <button class="btn ">Book Now</button>
                            </div>
                           
                            </div>
                           
                        </div>
                        </div>

                        <div className="">
                            <div className="CarPage-cardImage mt-4">
                                <div>
                                <img src={CarImage1} alt="" />
                                </div>
                            <div className=" Cardpage-Background">
                            <h3>Audi S5 Sportback</h3>
                            <span className="carPage-Spantext pt-1"> $450 </span>
                            <div className="CarPage-MainDiv pt-3 d-flex">
                                <div>
                                    <ul>
                                        <h5>Registration</h5>
                                        <li>MA67NNL</li>
                                        <li>Mileage 4,015</li>
                                        <li>miles</li>
                                        <li>Engine Size 1 L</li>
                                    </ul>
                                </div>
                                 <div className="ps-4">
                                    <ul>
                                        <h5>Transmission</h5>
                                        <li>Automatic</li>
                                        <li>Fuel Type Petrol</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="CardPage-Button"> 
                                <button class="btn ">Book Now</button>
                            </div>
                           
                            </div>
                           
                        </div>
                        </div>

                        <div className="" >
                            <div className="CarPage-cardImage mt-4">
                                <div>
                                <img src={CarImage3} alt="" />
                                </div>
                            <div className="Cardpage-Background">
                            <h3>BMW 7 Series</h3>
                            <span className="carPage-Spantext pt-1"> $450 </span>
                            <div className="CarPage-MainDiv pt-3 d-flex">
                                <div>
                                    <ul>
                                        <h5>Registration</h5>
                                        <li>MA67NNL</li>
                                        <li>Mileage 4,015</li>
                                        <li>miles</li>
                                        <li>Engine Size 1 L</li>
                                    </ul>
                                </div>
                                  <div className="ps-4">
                                    <ul>
                                        <h5>Transmission</h5>
                                        <li>Automatic</li>
                                        <li>Fuel Type Petrol</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="CardPage-Button"> 
                                  <button class="btn ">Book Now</button>
                            </div>
                           
                            </div>
                           
                        </div>
                        </div> 
                        
                        <div className="" >
                            <div className="CarPage-cardImage mt-4">
                                <div>
                                <img src={CarImage6} alt="" />
                                </div>
                            <div className="Cardpage-Background">
                            <h3>Ford Focus ST</h3>
                            <span className="carPage-Spantext pt-1"> $450 </span>
                            <div className="CarPage-MainDiv pt-3 d-flex">
                                <div>
                                    <ul>
                                        <h5>Registration</h5>
                                        <li>MA67NNL</li>
                                        <li>Mileage 4,015</li>
                                        <li>miles</li>
                                        <li>Engine Size 1 L</li>
                                    </ul>
                                </div>
                                  <div className="ps-4">
                                    <ul>
                                        <h5>Transmission</h5>
                                        <li>Automatic</li>
                                        <li>Fuel Type Petrol</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="CardPage-Button"> 
                                <button class="btn ">Book Now</button>
                            </div>
                            </div>
                        </div>
                        </div>
                        
                        <div className="" >
                            <div className="CarPage-cardImage mt-4">
                                <div>
                                <img src={CarImage4} alt="" />
                                </div>
                            <div className="Cardpage-Background">
                            <h3>BMW 7 Series</h3>
                            <span className="carPage-Spantext pt-1"> $450 </span>
                            <div className="CarPage-MainDiv pt-3 d-flex">
                                <div>
                                    <ul>
                                        <h5>Registration</h5>
                                        <li>MA67NNL</li>
                                        <li>Mileage 4,015</li>
                                        <li>miles</li>
                                        <li>Engine Size 1 L</li>
                                    </ul>
                                </div>
                                  <div className="ps-4">
                                    <ul>
                                        <h5>Transmission</h5>
                                        <li>Automatic</li>
                                        <li>Fuel Type Petrol</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="CardPage-Button"> 
                                <button class="btn ">Book Now</button>
                            </div>
                            </div>
                        </div>
                        </div>

                        <div className="" >
                            <div className="CarPage-cardImage mt-4">
                                <div>
                                <img src={CarImage5} alt="" />
                                </div>
                            <div className="Cardpage-Background">
                            <h3>Mercedes AMG</h3>
                            <span className="carPage-Spantext pt-1"> $450 </span>
                            <div className="CarPage-MainDiv pt-3 d-flex">
                                <div>
                                    <ul>
                                        <h5>Registration</h5>
                                        <li>MA67NNL</li>
                                        <li>Mileage 4,015</li>
                                        <li>miles</li>
                                        <li>Engine Size 1 L</li>
                                    </ul>
                                </div>
                                 <div className="ps-4">
                                    <ul>
                                        <h5>Transmission</h5>
                                        <li>Automatic</li>
                                        <li>Fuel Type Petrol</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="CardPage-Button"> 
                                 <button class="btn ">Book Now</button>
                            </div>
                            </div>
                           
                        </div>
                        </div> 
                        
                        <div className="" >
                            <div className="CarPage-cardImage mt-4">
                                <div>
                                <img src={CarImage6} alt="" />
                                </div>
                            <div className="Cardpage-Background">
                            <h3>Ferrari F8 Tributo</h3>
                            <span className="carPage-Spantext pt-1"> $450 </span>
                            <div className="CarPage-MainDiv pt-3 d-flex">
                                <div>
                                    <ul>
                                        <h5>Registration</h5>
                                        <li>MA67NNL</li>
                                        <li>Mileage 4,015</li>
                                        <li>miles</li>
                                        <li>Engine Size 1 L</li>
                                    </ul>
                                </div>
                                 <div className="ps-4">
                                    <ul>
                                        <h5>Transmission</h5>
                                        <li>Automatic</li>
                                        <li>Fuel Type Petrol</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="CardPage-Button"> 
                                 <button class="btn ">Book Now</button>
                            </div>
                            </div>
                        </div>
                        </div>

                        <div className="" >
                            <div className="CarPage-cardImage mt-4">
                                <div>
                                <img src={CarImage1} alt="" />
                                </div>
                            <div className="Cardpage-Background">
                            <h3>Jaguar XJ50</h3>
                            <span className="carPage-Spantext pt1"> $450 </span>
                            <div className="CarPage-MainDiv pt-3 d-flex">
                                <div>
                                    <ul>
                                        <h5>Registration</h5>
                                        <li>MA67NNL</li>
                                        <li>Mileage 4,015</li>
                                        <li>miles</li>
                                        <li>Engine Size 1 L</li>
                                    </ul>
                                </div>
                                  <div className="ps-4">
                                    <ul>
                                        <h5>Transmission</h5>
                                        <li>Automatic</li>
                                        <li>Fuel Type Petrol</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="CardPage-Button"> 
                                  <button class="btn ">Book Now</button>
                            </div>
                            </div>
                           
                        </div>
                        </div>
                        </OwlCarousel>
                    </div>
                </div>
                </div>
                </div>

            <div className="Articles pb-5">
                <div className="">
            <div className="container">
                <div className="row">
                        <h1 className="text-center mt-5 mb-2">Articles & <span  className="CarPage-Span CallSpan-Text">  News</span></h1>
                        <p className="text-center Article-Ptag">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                        <div className="col-lg-4 col-sm-12 col-md-4">
                            <div className="Articles-Card mt-4">
                                <div>
                                <img src={ArticlesImage1} alt="" />
                                </div>
                                <div className="Articles-Middle-Content pt-3">
                                   <img src={ClientImage1} alt="" /> <span className="ps-2">By John Willliam</span> <span className="ps-2 Articles-Middle-ps">October 14, 2019</span> 
                                </div>
                            <div className="Articles-Content mt-3">
                            <h2>Work Hard, Party Hard in a Luxury Chalet in the Alps</h2>
                            <p className="pb-3 Articles-Content-PTag">Ski resorts are evolving. Last summer we had a meeting with one of the main officers for French tourism in the Alps and he explained that they ski resort.</p>
                            </div>
                        </div>
                        </div>
                        
                        <div className="col-lg-4 col-sm-12 col-md-4">
                            <div className="Articles-Card mt-4" >
                                <div>
                                <img src={ArticlesImage2} alt="" />
                                </div>
                                <div className="Articles-Middle-Content pt-3">
                                   <img src={ClientImage2} alt="" /> <span className="ps-2">By John Willliam</span> <span className="ps-2">October 14, 2019</span> 
                                </div>
                            <div className="Articles-Content mt-3">
                            <h2>Work Hard, Party Hard in a Luxury Chalet in the Alps</h2>
                            <p className="pb-3 Articles-Content-PTag">Ski resorts are evolving. Last summer we had a meeting with one of the main officers for French tourism in the Alps and he explained that they ski resort.</p>
                            </div>
                        </div>
                        </div>

                        <div className="col-lg-4 col-sm-12 col-md-4">
                            <div className="Articles-Card mt-4" >
                                <div>
                                <img src={ArticlesImage3} alt="" />
                                </div>
                                <div className="Articles-Middle-Content pt-3">
                                   <img src={ClientImage3} alt="" /> <span className="ps-2">By John Willliam</span> <span className="ps-2">October 14, 2019</span> 
                                </div>
                            <div className="Articles-Content mt-3">
                            <h2>Work Hard, Party Hard in a Luxury Chalet in the Alps</h2>
                            <p className="pb-3 Articles-Content-PTag">Ski resorts are evolving. Last summer we had a meeting with one of the main officers for French tourism in the Alps and he explained that they ski resort.</p>
                            </div>
                        </div>
                        </div>
                        
                        
                    </div>
                </div>
                </div>
            </div>
       
       
            <div className="Jumbotron CallPage-Section">
                <div className="overlay">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-sm-12 col-md-6 d-flex justify-content-cente align-items-center">
                        <div className="CallPage-Heading pt-5">
                    <h2>Call Us Now <span  className="CarPage-Span CallSpan-Text"> Book Your Car </span></h2>
                    <h2>For Your Next Ride!</h2>
                    <p>We successfully cope with tasks of varying complexity, guarantees and regularly master new technologies.</p>
                    <WifiCalling3Icon className="Call-Icon"></WifiCalling3Icon> <a href="tel:+4733378901">+47 333 78 901</a>
                </div>
                 </div>

                 <div className="col-lg-6 col-sm-12 col-md-6">
                    <div className="CallPage-Image text-center ps-3">
                    <img src={CallImage} alt="" className="img-fluid" />
                    </div>
                 </div>
               
            </div>
            </div>
                </div>
            </div>

          <Footer></Footer>
        </>
    );
}

export default CarPage;