import Counter from "./JsCounter";
import React from "react";
import "./Flight.css"
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import PersonIcon from "@mui/icons-material/Person";
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import ClearIcon from "@mui/icons-material/Clear";
import PlaceIcon from "@mui/icons-material/Place";

const Hotel = () => {
    return (
<div className="Cutsom-bg ">
            <div className="Dropdown-Modal pt-4">
              <div className="d-flex flight-padding p-3">
                <div class="dropdown margin-left">
                  <button
                    class="btn dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <AirplanemodeActiveIcon className="Icons-size"></AirplanemodeActiveIcon>{" "}
                    One-Way
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <button class="btn dropdown-item" type="button">
                        <></>Round-Trip
                      </button>
                    </li>
                    <li>
                      <button class="btn dropdown-item" type="button">
                        Multi-City
                      </button>
                    </li>
                  </ul>
                </div>

                <div class="dropdown margin-left">
                  <button
                    class="btn dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <PersonIcon className="Icons-size"></PersonIcon> 1 Adult
                  </button>
                  <ul class="dropdown-menu Adult-Dropdown">
                    <li>
                      <span class="">
                        <span className="Adult-Dropdown ">
                          <p>
                            {" "}
                            Please select exact numbers of passengers to view
                            the best prices.
                          </p>
                        </span>
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

                <div class="dropdown">
                  <button
                    class="btn Dropdown-Button dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <AirlineSeatReclineNormalIcon className="Icons-size"></AirlineSeatReclineNormalIcon>{" "}
                    Economy
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <button class="dropdown-item" type="button">
                        Economy
                      </button>
                    </li>
                    <li>
                      <button class="dropdown-item" type="button">
                        Economy/Premium Economy
                      </button>
                    </li>
                    <li>
                      <button class="dropdown-item" type="button">
                        Premium Economy
                      </button>
                    </li>
                    <li>
                      <button class="dropdown-item" type="button">
                        Business/First
                      </button>
                    </li>
                    <li>
                      <button class="dropdown-item" type="button">
                        Business
                      </button>
                    </li>
                    <li>
                      <button class="dropdown-item" type="button">
                        First
                      </button>
                    </li>
                  </ul>
                </div>
              </div>

              {/* <div className="text p-4">
                <p>
                  Save more when you book togther{" "}
                  <ClearIcon className="Cross-Icon"></ClearIcon>
                </p>
              </div>
              <div class="form-check p-4">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Bundle & Save
                </label>
              </div> */}
            </div>

            <div className="row Selection-Dropdown pt-1 mb-4">
              <div className="Flights-Columns col-lg-3 col-md-12">
                <input  type="text"  placeholder="City or Airport"  data-bs-toggle="dropdown"  aria-expanded="false"  />
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

              <div className="Flights-Columns col-lg-3 col-md-12">
                <input
                  type="text"
                  placeholder="City or Airport"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                />
                <ul class="dropdown-menu box-size">
                  <li>
                    <button class="dropdown-item button-hover" type="button">
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

              <div className="Flights-Columns col-lg-4 d-flex flex-wrap col-md-12">
              <div className="First-Input input-hover d-flex ">
                <label className="First-label " htmlFor="">Check-in
                <input className="Input-Field width" type="date"/></label>
                <label className="First-label ps-3"  htmlFor="">Check-out
                <input className="Input-Field width" type="date"/></label>
                </div>
                </div>
              
              <div className="Flights-Columns col-lg-2 Flight-Button col-lg-2 col-md-12">
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

export default Hotel;