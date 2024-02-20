import React from "react";
import "./Car.css";
import PlaceIcon from "@mui/icons-material/Place";

const Car = () => {
  return (
    <div className="Cutsom-bg Custom-Hotel">
      <div className="row Second-Input mt-5 mb-5">
        <ul class="Car-HeadingText d-flex nav  ps-3" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home-tab-pane"
              type="button"
              role="tab"
              aria-controls="home-tab-pane"
              aria-selected="true"
            >
              Car Rantels
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile-tab-pane"
              type="button"
              role="tab"
              aria-controls="profile-tab-pane"
              aria-selected="false"
            >
              Airport Transfer
            </button>
          </li>
        </ul>

        <div class="tab-content  car-tab-content " id="myTabContent">
          <div
            class="tab-pane fade show active"
            id="home-tab-pane"
            role="tabpanel"
            aria-labelledby="home-tab"
            tabindex="0"
          >
            <div className="row car-row-padding p-3">
              <div className="Flights-Columns  col-lg-3 col-md-12 Car-Column-CustomWidth">
                <div
                  className="First-Input"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <label className="First-label" htmlFor="">
                    Pick-up Location
                    <input
                      className="Input-Field"
                      type="text"
                      placeholder="Airport,City,Stations,Regions"
                    />
                  </label>
                </div>
                <ul class="dropdown-menu box-size">
                  <li>
                    <button class="dropdown-item button-hover " type="button">
                      <div className="Table-Heading p-2">Top Destinations</div>
                      <div class="table-responsive p-2">
                        <table class="table align-middle ">
                          <tbody>
                            <tr>
                              <td className="Table-Data-Hover">Bangkok</td>
                              <td className="Table-Data-Hover">Los Angles</td>
                              <td className="Table-Data-Hover">London</td>
                              <td className="Table-Data-Hover">Sydney</td>
                              <td className="Table-Data-Hover">Tokyo</td>
                              <td className="Table-Data-Hover">Bangkok</td>
                            </tr>
                            <tr>
                              <td className="Table-Data-Hover">Los Angles</td>
                              <td className="Table-Data-Hover">Sydney</td>
                              <td className="Table-Data-Hover">Tokyo</td>
                              <td className="Table-Data-Hover">Bangkok</td>
                              <td className="Table-Data-Hover">Los Angles</td>
                              <td className="Table-Data-Hover">London</td>
                            </tr>
                            <tr>
                              <td className="Table-Data-Hover">Sydney</td>
                              <td className="Table-Data-Hover">Tokyo</td>
                              <td className="Table-Data-Hover">Sydney</td>
                              <td className="Table-Data-Hover">Tokyo</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </button>
                  </li>
                </ul>
              </div>

              <div className="Flights-Columns  d-flex flex-wrap  col-lg-4 col-md-12 Car-Column-CustomWidth">
                <div className="First-Input d-flex">
                  <label className="First-label" htmlFor="">
                    Pick-up
                    <input className="Input-Field width" type="date" />
                  </label>
                  <label className="First-label ps-3" htmlFor="">
                    Times
                    <input className="Input-Field width" type="time" />
                  </label>
                </div>
              </div>

              <div className="Flights-Columns  d-flex flex-wrap  col-lg-3 col-md-12 Car-Column-CustomWidth">
                <div className="First-Input d-flex">
                  <label className="First-label" htmlFor="">
                    Drop-off
                    <input className="Input-Field width" type="date" />
                  </label>
                  <label className="First-label ps-3" htmlFor="">
                    Times
                    <input className="Input-Field width" type="time" />
                  </label>
                </div>
              </div>

              <div className="Flights-Columns Flight-Button  col-lg-2 col-md-12 Button-Custom-Width Button-display ">
                <button
                  class="btn Search-Button btn-outline-success"
                  type="submit">
                  Search
                </button>
              </div>
            </div>
          </div>

          <div
            class="tab-pane fade"
            id="profile-tab-pane"
            role="tabpanel"
            aria-labelledby="profile-tab"
            tabindex="0"
          >
            <div className="Sub-Tabs Car-HeadingText p-1 pt-3">
              <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active"
                    id="pills-First-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-First"
                    type="button"
                    role="tab"
                    aria-controls="pills-First"
                    aria-selected="true"
                  >
                    Airport Pick-Up
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link"  id="pills-Second-tab"  data-bs-toggle="pill"  data-bs-target="#pills-Second"  type="button" role="tab" aria-controls="pills-Second" aria-selected="false">
                    Airport Drop-Off
                  </button>
                </li>
              </ul>
              <div class="tab-content" id="pills-tabContent">
                <div  class="tab-pane fade show active"  id="pills-First"  role="tabpanel"  aria-labelledby="pills-First-tab"   tabindex="0" >
                  <div className="row Car-Flex p-2">
                    <div className="Flights-Columns col-lg-5 col-md-12 Car-Column-CustomWidth-width ">
                      <div className="d-flex Car-TabBox p-2">
                        <div  className="Car-InputField"  data-bs-toggle="dropdown"  aria-expanded="false" >
                          <label className="First-label" htmlFor="">
                            From
                            <input className="Input-Field" type="text" placeholder="Arrival airport" />
                          </label>
                        </div>
                        <div className=" Car-InputField"  data-bs-toggle="dropdown" aria-expanded="false" >
                          <label className="First-label" htmlFor="">
                            To
                            <input  className="Input-Field" type="text" placeholder="Address or Hotel name" />
                          </label>
                        </div>
                      </div>

                      <ul class="dropdown-menu box-size">
                        <li>
                          <button
                            class="dropdown-item button-hover "
                            type="button"
                          >
                            <div className="Table-Heading p-2">
                              Top Destinations
                            </div>
                            <div class="table-responsive p-2">
                              <table class="table align-middle ">
                                <tbody>
                                  <tr>
                                    <td className="Table-Data-Hover">
                                      Bangkok
                                    </td>
                                    <td className="Table-Data-Hover">
                                      Los Angles
                                    </td>
                                    <td className="Table-Data-Hover">London</td>
                                    <td className="Table-Data-Hover">Sydney</td>
                                    <td className="Table-Data-Hover">Tokyo</td>
                                    <td className="Table-Data-Hover">
                                      Bangkok
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="Table-Data-Hover">
                                      Los Angles
                                    </td>
                                    <td className="Table-Data-Hover">Sydney</td>
                                    <td className="Table-Data-Hover">Tokyo</td>
                                    <td className="Table-Data-Hover">
                                      Bangkok
                                    </td>
                                    <td className="Table-Data-Hover">
                                      Los Angles
                                    </td>
                                    <td className="Table-Data-Hover">London</td>
                                  </tr>
                                  <tr>
                                    <td className="Table-Data-Hover">Sydney</td>
                                    <td className="Table-Data-Hover">Tokyo</td>
                                    <td className="Table-Data-Hover">Sydney</td>
                                    <td className="Table-Data-Hover">Tokyo</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </button>
                        </li>
                      </ul>
                    </div>

                      <div className="Flights-Columns d-flex flex-wrap  col-lg-4 col-md-12 Car-Column-CustomWidth-small">
                        <div class="dropdown Car-Dropdown">
                          <div class="First- Car-padding adult-dropdowns">
                            <button class="btn dropdown-toggle  p-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                              Numbers of passenger
                            </button>
                            <label class="Input-Field" for="">
                              1 Adult, 0 Children (0-11 yrs)
                            </label>
                            <ul class="dropdown-menu Car-Adult-Dropdown Adult-Dropdown mt-4">
                              <li>
                                <span class="Adult-Dropdown ">
                                  <p>
                                    Please select exact numbers of passengers.
                                  </p>
                                </span>
                              </li>
                              <div class="Adult-Container d-flex justify-content-between mb-2">
                                <div>
                                  <p>Adult (12+ yrs)</p>
                                </div>
                                <div class="quantity">
                                  <div class="Counter d-flex align-item-center">
                                    <div class="">
                                      <button class="Counter-Button ">-</button>
                                    </div>
                                    <div class="Counter-Heading pt-1">
                                      <h1>0</h1>
                                    </div>
                                    <div class="">
                                      <button class="Counter-Button">+</button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="Adult-Container d-flex justify-content-between mb-2">
                                <div>
                                  <p>
                                    Childrens (0-11 yrs)
                                  </p>
                                </div>
                                <div class="Counter d-flex align-item-center">
                                  <div class="">
                                    <button class="Counter-Button ">-</button>
                                  </div>
                                  <div class="Counter-Heading pt-1">
                                    <h1>0</h1>
                                  </div>
                                  <div class="">
                                    <button class="Counter-Button">+</button>
                                  </div>
                                </div>
                              </div>
                            </ul>
                          </div>
                        </div>
                      </div>
                    

                      <div className="Flights-Columns Flight-Button  col-lg-3 col-md-12 Button-Custom-Width Button-display">
                <button
                  class="btn Search-Button btn-outline-success"
                  type="submit">
                  Search
                </button>
              </div>
                  </div>
                </div>

                <div class="tab-pane fade" id="pills-Second"   role="tabpanel"  aria-labelledby="pills-Second-tab"   tabindex="0"  >
                  <div className="row p-2">
                    <div className="Flights-Columns col-md-12  Car-Column-CustomWidth">
                      <div className="d-flex Car-TabBox p-2">
                        <div
                          className="Car-InputField ps-2"  data-bs-toggle="dropdown" aria-expanded="false" >
                          <label className="First-label" htmlFor="">
                            From
                            <input className="Input-Field"  type="text"  placeholder="Address or Hotel name"/>
                          </label>
                        </div>
                        <div
                          className=" Car-InputField">
                          <label className="First-label" htmlFor="">
                            To
                            </label>
                            <input  className="Input-Field" data-bs-toggle="dropdown" aria-expanded="false"  type="text"   placeholder="Arrival airport" />
                         
                            <ul class="dropdown-menu box-size">
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
                    </button>
                  </li>
                </ul>
                        </div>
                      </div>
                    </div>

                    <div className="Flights-Columns  d-flex flex-wrap col-md-12 Car-Column-CustomWidth">
                      <div className="First-Input d-flex">
                        <label className="First-label" htmlFor="">
                          Pick-Up Date
                          <input className="Input-Field width" type="date" />
                        </label>
                        <label className="First-label ps-3" htmlFor="">
                          Pick-Up Time
                          <input className="Input-Field width" type="time" />
                        </label>
                      </div>
                    </div>

                    <div className="Flights-Columns  d-flex flex-wrap col-md-12 Car-Column-CustomWidth">
                      <div className="First-Input d-flex">
                        <div class="dropdown Car-Dropdown margin-left ">
                          <div class=" Car-Input-background adult-dropdowns">
                            <button class="btn dropdown-toggle  p-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                              Numbers of passenger
                            </button>
                            <label class="Input-Field" for="">
                              1 Adult, 0 Children (0-11 yrs)
                            </label>
                            <ul class="dropdown-menu Car-Adult-Dropdown Adult-Dropdown mt-4">
                              <li>
                                <span class="Adult-Dropdown ">
                                  <p>
                                    Please select exact numbers of passengers.
                                  </p>
                                </span>
                              </li>
                              <div class="Adult-Container d-flex justify-content-between mb-2">
                                <div>
                                  <p>Adult (12+ yrs)</p>
                                </div>
                                <div class="quantity">
                                  <div class="Counter d-flex align-item-center">
                                    <div class="">
                                      <button class="Counter-Button ">-</button>
                                    </div>
                                    <div class="Counter-Heading pt-1">
                                      <h1>0</h1>
                                    </div>
                                    <div class="">
                                      <button class="Counter-Button">+</button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="Adult-Container d-flex justify-content-between mb-2">
                                <div>
                                  <p>
                                    Childrens (0-11 yrs)
                                  </p>
                                </div>
                                <div class="Counter d-flex align-item-center">
                                  <div class="">
                                    <button class="Counter-Button ">-</button>
                                  </div>
                                  <div class="Counter-Heading pt-1">
                                    <h1>0</h1>
                                  </div>
                                  <div class="">
                                    <button class="Counter-Button">+</button>
                                  </div>
                                </div>
                              </div>
                            </ul>
                          </div>
                        </div>
                      </div>
                      </div>
                      <div className="Flights-Columns Flight-Button col-md-12 Button-Custom-Width Button-display">
                <button
                  class="btn Search-Button btn-outline-success"
                  type="submit">
                  Search
                </button>
              </div>
                    </div>

                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Car;
