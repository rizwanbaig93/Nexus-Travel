import React from "react";
import Logo from "../Assets/Logo/nexuslogo.png"
import "./Banner.css"
import TabsDetails from "../TabsDetails/TabsDetails";

const TopBanner = () => {
    return (
        
            <div className="Header">
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
            </div> 
            </div>
                        <form class="header-button" role="search">
                            <button class="btn btn-outline-success" type="submit">Search Bookings</button>
                            <button class="btn btn-outline-success" type="submit">Sign In / Register</button>
                        </form>
                </div>
            </nav>  

            <div className="Tabs-Button">
                <div className="buttons">

                <a href="/flightpage"><button><p>Flights</p></button></a> 
                   <a href="/hotels"><button><p>Hotels</p></button></a> 
                   <a href="/Cars"><button><p>Cars</p></button></a> 
                   <a href="/Trains"><button><p>Trains</p></button></a> 
                   <a href="/Tours"><button><p>Tours</p></button></a> 
                   <a href="/Umrah"><button><p>Umrah</p></button></a> 
                   <a href="/Hajj"><button><p>Hajj</p></button></a>
                   <a href="/Deals"><button><p>Deals</p></button></a> 
                </div>
            </div>
            <TabsDetails></TabsDetails>
        </div>
    )
}

export default TopBanner;