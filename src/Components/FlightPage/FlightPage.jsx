import React from "react";
import "./FlightPage.css"
import TopBanner from "../Banner/Banner";
import Carousel from "../OwlCarousel/Carousel";
import FlightDetails from "../FlightDetails/FlightDetail"
import Accordion from "../Accordion/Accordion"
import Footer from "../Footer/Footer"
import Logo from "../Assets/Logo/nexuslogo.png"
import TabsDetails from "../TabsDetails/TabsDetails";

const FlightPage = () => {

        return (
        <div>
           {/* <TopBanner></TopBanner> */}
           <div className="Header flight-bg">
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

           <Carousel></Carousel>
           <FlightDetails></FlightDetails>
           <Accordion></Accordion>
          <Footer></Footer>
        </div>
    );
    
}

export default FlightPage;