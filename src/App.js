import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,  Routes, Route,} from "react-router-dom";
import Header from "../src/Components/Header/Header"
import FlightPage from "../src/Components/FlightPage/FlightPage";
import HotelPage from "../src/Components/HotelPage/HotelPage"
import CarPage from "../src/Components/CarPage/CarPage"
import TrainPage from "../src/Components/TrainPage/TrainPage"
import TourPage from "../src/Components/ToursPage/TourPage"
import UmrahPage from "../src/Components/UmrahPage/UmrahPage"


function App() {
  return (
    <div>
      

      <BrowserRouter>
        <Routes>
         
        <Route index element={<Header />} />
          <Route path="/flightpage" element={<FlightPage />} />
          <Route path="hotels"  element={<HotelPage />} />
          <Route path="cars"  element={<CarPage />} />
          <Route path="trains"  element={<TrainPage />} />
          <Route path="tours"  element={<TourPage />} />
          <Route path="umrah"  element={<UmrahPage />} />
          <Route/>
          

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
