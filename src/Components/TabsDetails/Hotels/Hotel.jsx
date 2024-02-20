import React from "react";
import "./Hotel.css"
import Counter from "../Flights/JsCounter";
import PlaceIcon from "@mui/icons-material/Place";
import PersonIcon from "@mui/icons-material/Person";


const Hotel = () => {
    return (
        <div className="Cutsom-bg Custom-Hotel">
             <div className="row Second-Input pt-4 mt-5 mb-5">
            
                <div className="Flights-Columns col-sm-12 col-lg-2 col-md-12 Column-Custom-Width">
                <div className="First-Input"  data-bs-toggle="dropdown" aria-expanded="false">
                <label className="First-label"  htmlFor="">Destination or prperty name
                <input className="Input-Field" type="text" placeholder="City, airport, region"/></label>
                </div>
                
                <ul class="dropdown-menu ">
                  <li>
                    <button class="dropdown-item button-hover " type="button">
                      <div className="Table-Heading p-2">Current Location</div>
                      <div class="table-responsive p-2">
                        <table class="table ">
                          <tbody>
                            <tr>
                              <td className="Map-Icon">
                                <PlaceIcon className="MapIcon"></PlaceIcon>
                                Islamabad
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <div className="Table-Heading p-2">Asia</div>
                      <div class="table-responsive p-2">
                        <table class="table align-middle ">
                          <tbody>
                            <tr>
                              <td className="Table-Data-Hover pt-2">
                                Hong Kong
                              </td>
                              <td className="Table-Data-Hover">Hong Kong</td>
                              <td className="Table-Data-Hover">Hong Kong</td>
                              <td className="Table-Data-Hover">Hong Kong</td>
                              <td className="Table-Data-Hover">Hong Kong</td>
                            </tr>
                            <tr>
                              <td className="Table-Data-Hover">Hong Kong</td>
                              <td className="Table-Data-Hover">Hong Kong</td>
                              <td className="Table-Data-Hover">Hong Kong</td>
                              <td className="Table-Data-Hover">Hong Kong</td>
                              <td className="Table-Data-Hover">Hong Kong</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="Table-Heading p-2">Europe</div>
                      <div class="table-responsive p-2">
                        <table class="table align-middle ">
                          <tbody>
                            <tr>
                              <td className="Table-Data-Hover">London</td>
                              <td className="Table-Data-Hover">Paris</td>
                              <td className="Table-Data-Hover">London</td>
                              <td className="Table-Data-Hover">Paris</td>
                              <td className="Table-Data-Hover">London</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="Table-Heading p-2">North America</div>
                      <div class="table-responsive p-2">
                        <table class="table align-middle ">
                          <tbody>
                            <tr>
                              <td className="Table-Data-Hover">New York</td>
                              <td className="Table-Data-Hover">New York</td>
                              <td className="Table-Data-Hover">New York</td>
                              <td className="Table-Data-Hover">New York</td>
                              <td className="Table-Data-Hover">New York</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </button>
                  </li>
                </ul>
              </div>

              <div className="Flights-Columns  col-sm-12  col-lg-3 col-md-12 Column-Custom-Width">
              <div className="First-Input d-flex" >
                <label className="First-label"  htmlFor="">Check-in
                <input className="Input-Field  hotel-input width" type="date"/></label>
                <div className="Input-span hotel--span pt-1  pt-1"><p>1 Night</p></div>
                <label className="First-label Check-Out ps-3"  htmlFor="">Check-out
                <input className="Input-Field  hotel-input width" type="date"/></label>
                </div>
                </div>

                <div className=" col-lg-2  col-sm-12 col-md-12 Column-Custom-Width Custom-PT">
                <div className="Flights-Columns">
               <div class="dropdown">
               
                <div className="First-Input adult-dropdowns">
                  <button class="btn dropdown-toggle  p-0" type="button" data-bs-toggle="dropdown"aria-expanded="false" >
                  Rooms & Guests  
                  </button>
                  <label className="Input-Field" htmlFor=""> 1 Room 2 Adults</label>
                  <ul class="dropdown-menu Adult-Dropdown ">
                    <li>
                        <span className="Adult-Dropdown ">
                          <p>
                            {" "}
                            Please select exact numbers of passengers to view
                            the best prices.
                          </p>
                      </span>
                    </li>

                    <div className="Adult-Container d-flex justify-content-between mb-2">
                      <div>
                        <p>Adult</p>
                      </div>
                      <div class="quantity">
                        <Counter></Counter>
                      </div>
                    </div>
                    <div className="Adult-Container d-flex justify-content-between mb-2">
                      <div>
                        <p>
                          Childrens <span className="Span-text"> 2-11 yrs</span>
                        </p>{" "}
                      </div>
                      <Counter></Counter>
                    </div>
                    <div className="Adult-Container d-flex justify-content-between mb-2">
                      <div>
                        <p>
                          Infants (Lap){" "}
                          <span className="Span-text"> 14 days-1 yr</span>
                        </p>
                      </div>
                      <Counter></Counter>
                    </div>
                  </ul>
                  </div>
                  
                </div>
              </div>
                </div>

               <div className=" col-lg-3  col-sm-12 col-md-12 Column-Custom-Width Custom-PT">
    <div className="Flights-Columns">
    <div class="First-Input" data-bs-toggle="dropdown" aria-expanded="false">
      <label class="First-label" for="">
        Destination or prperty name
        <input class="Input-Field" type="text" placeholder="City, airport, region" />
        </label>
        </div>
         </div>
               </div>
          
                <div className="Flights-Columns Flight-Button Button-Custom-Width Button-display  col-lg-2 col-md-12">
                <button
                  class="btn Search-Button btn-outline-success"
                  type="submit">
                  Search
                </button>
              </div>
            </div>
            </div>
    );
}

export default Hotel ;