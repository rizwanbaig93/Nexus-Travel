import React from "react";
import { Link } from 'react-router-dom'
import "./Header.css"
import Logo from "../Assets/Logo/nexuslogo.png"
import TabsDetails from "../TabsDetails/TabsDetails";
import Card from "../Cards/FeaturedCard/Featured";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import TrainIcon from "@mui/icons-material/Train";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import PhotoAlbumIcon from "@mui/icons-material/PhotoAlbum";
import GppGoodIcon from "@mui/icons-material/GppGood";
import RecommendIcon from "@mui/icons-material/Recommend";
const Header = () => {
    return (
        <>
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

        <Card></Card>
        </>
        
 );
}

   
  export default Header;