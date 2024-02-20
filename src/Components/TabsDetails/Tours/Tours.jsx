import React from "react";
import "./Tours.css";
import PlaceIcon from "@mui/icons-material/Place";

const Tours = () => {
  return (
    <div className="Cutsom-bg Custom-Hotel Tours">
      <div className="row Second-Input mt-5 mb-5">
       
        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane fade show active"
            id="home-tab-pane"
            role="tabpanel"
            aria-labelledby="home-tab"
            tabindex="0"
          >
            <div className="row custom-tour p-3">
              <div className="Flights-Columns col-lg-4 col-md-12 Tour-Column-CustomWidth ">
                <div
                  className="First-Input"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <label className="First-label" htmlFor="">
                  London
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
                      <div className="Table-Heading p-2">Popular Cities</div>
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
                    <button class="dropdown-item button-hover " type="button">
                      <div className="Table-Heading p-2">Thailand</div>
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

              <div className="Flights-Columns col-lg-5 col-md-12 Tour-Column-CustomWidth">
                <div
                  className="First-Input"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <label className="First-label" htmlFor="">
                  Keywords (Optional)
                    <input
                      className="Input-Field"
                      type="text"
                      placeholder="Search activities or attractions "/>
                  </label>
                </div>
                <ul class="dropdown-menu box-size">
                  <li>
                    <button class="dropdown-item button-hover " type="button">
                      <div className="Table-Heading p-2">Top Attractions</div>
                      <div class="table-responsive TourTickets p-2">
                        <table class="table align-middle ">
                          <tbody>
                            <tr>
                              <td className="Table-Data-Hover">Bangkok</td>
                            </tr>
                            <tr>
                              <td className="Table-Data-Hover">Los Angles</td>
                            </tr>
                            <tr>
                              <td className="Table-Data-Hover">Sydney</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </button>
                  </li>
                </ul>
              </div>

              <div className="Flights-Columns Flight-Button col-md-12 col-lg-3 Tour-Button button-tablet-width Button-Column-CustomWidth ">
                <button
                  class="btn Tour-Button Search-Button btn-outline-success"
                  type="submit">
                  Search
                </button>
              </div>
            </div>
          </div>

  
          </div>
        </div>
      </div>
  );
};

export default Tours;
