import React from "react";
import "./TabsDetails.css";
import Flights from "./Flights/Flight";
import Hotel from "./Hotels/Hotel";
import Train from "./Trains/Train";
import Car from "./Cars/Car"
import Tours from "./Tours/Tours";
import Umrah from "./Umrah/Umrah"
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import TrainIcon from "@mui/icons-material/Train";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import PhotoAlbumIcon from "@mui/icons-material/PhotoAlbum";
import GppGoodIcon from "@mui/icons-material/GppGood";
import RecommendIcon from "@mui/icons-material/Recommend";


const TabsDetails = () => {
  return (
    <>
    <div id="TabsDetails">
      <div className="Heading pt-5">
        <h1>Welcome To Nexus Travel</h1>
      </div>
      <div className="Para pt-2 mb-4 d-flex justify-content-center">
        <GppGoodIcon className="Para-Icons "></GppGoodIcon>
        <p> Secure Payment</p>
        <RecommendIcon className="Para-Icons margin-right"></RecommendIcon>
        <p> Support In Approx. 30s</p>
      </div>

      <div className="Tabs">
        <ul class="nav nav-pills Nav-Scroll mb-3" id="pills-tab" role="tablist">

        <li class="nav-item margin d-flex" role="presentation">
            <button class="nav-link active" id="pills-home-tab"  data-bs-toggle="pill"  data-bs-target="#pills-home" type="button"  role="tab" aria-controls="pills-home"    aria-selected="true" >
              <FlightTakeoffIcon  className="Social-Icons"></FlightTakeoffIcon>Flights
            </button>
          </li>

        <li class="nav-item margin" role="presentation">
            <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"  >
              <MeetingRoomIcon className="Social-Icons"></MeetingRoomIcon>
              Hotels
            </button>
          </li>
        
          <li class="nav-item margin" role="presentation">
            <button class="nav-link" id="pills-Cars-tab" data-bs-toggle="pill" data-bs-target="#pills-Cars" type="button" role="tab" aria-controls="pills-Cars" aria-selected="false">
              <DriveEtaIcon className="Social-Icons"></DriveEtaIcon>Cars
            </button>
          </li>

          <li class="nav-item margin" role="presentation">
            <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab"aria-controls="pills-contact"aria-selected="false" >
              <TrainIcon className="Social-Icons"></TrainIcon>Trains
            </button>
          </li>
        
          <li class="nav-item margin" role="presentation">
            <button class="nav-link"id="pills-ToursTickets-tab"data-bs-toggle="pill"data-bs-target="#pills-ToursTickets"type="button"role="tab"aria-controls="pills-ToursTickets"aria-selected="false">
              <Diversity2Icon className="Social-Icons"></Diversity2Icon>Tours
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-BundleSave-tab"data-bs-toggle="pill" data-bs-target="#pills-BundleSave" type="button" role="tab" aria-controls="pills-BundleSave" aria-selected="false ">
              <PhotoAlbumIcon className="Social-Icons"></PhotoAlbumIcon>Umrah</button>
          </li>
        </ul>
      </div>

      <div class="tab-content" id="pills-tabContent">
        <div class="tab-pane fade active show Tab-Pane-width" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
          <Flights class="show"></Flights>
        </div>

        <div class="tab-pane fade Tab-Pane-width" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
          <Hotel></Hotel>
        </div>

        <div class="tab-pane fade Tab-Pane-width" id="pills-Cars" role="tabpanel" aria-labelledby="pills-Cars-tab" tabindex="0 ">
        <Car></Car>
        </div>

        <div  class="tab-pane fade Tab-Pane-width"  id="pills-contact" role="tabpanel"  aria-labelledby="pills-contact-tab"  tabindex="0">
          <Train></Train>
        </div>

       
        <div class="tab-pane fade Tab-Pane-width" id="pills-ToursTickets" role="tabpanel" aria-labelledby="pills-ToursTickets-tab" tabindex="0 ">
          <Tours></Tours>
        </div>

        <div class="tab-pane fade Tab-Pane-width" id="pills-BundleSave" role="tabpanel" aria-labelledby="pills-BundleSave-tab" tabindex="0 ">
          <Umrah></Umrah>
        </div>
      </div>

    </div>
    </>

  );
};

export default TabsDetails;
