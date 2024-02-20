import React from "react";
import "./Train.css"


const Train = () => {
    return (
        <div className="Cutsom-bg Trains pt-5">
            <div className="Radio-Button d-flex">
                <div>
                <label class="form-check-label" for="flexRadioDefault1">
             <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" /> Maniland China</label>
                </div>
           <div>
           <label class="form-check-label" for="flexRadioDefault1">
             <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" /> United Kingdom</label>
           </div>
            
           <div>
           <label class="form-check-label" for="flexRadioDefault1">
             <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" /> South Korea</label>
           </div>

            <div>
            <label class="form-check-label" for="flexRadioDefault1">
             <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" /> Europe</label>  
             </div>  
            </div>

        <div className="d-flex justify-content-between custom-train">
            <div className="Train-InputField p-3 mt-4 mb-3">
             <div className="row ">
             <div className="col-lg-4 col-md-12 " data-bs-toggle="dropdown" aria-expanded="false">
                <div className="Train-InputDiv d-flex p-2">
                <div className="">
                    <label class="Train-Label" for="">From</label>
                    <input class="Train-Input" type="text" placeholder="Shanghai" />
                    </div>
                    <div>
                    <label class="Train-Label" for="">To</label>
                    <input class="Train-Input" type="text" placeholder="Shanghai"/>
                    </div>
                    <ul class="dropdown-menu box-size train-dropdown">
                  <li>
                    <button class="dropdown-item button-hover " type="button">

                      <div className="Table-Heading p-2">Popular</div>
                      <div class="table-responsive p-2">
                        <table class="table align-middle ">
                          <tbody>
                            <tr>
                              <td className="Table-Data-Hover pt-2"> Hong Kong</td>
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
                      <div className="Table-Heading p-2">Other Cities</div>
                      <div class="table-responsive p-2">
                        <table class="table align-middle ">
                          <tbody>
                            <tr>
                              <td className="Table-Data-Hover">London</td>
                              <td className="Table-Data-Hover">Paris</td>
                              <td className="Table-Data-Hover">London</td>
                              <td className="Table-Data-Hover">Paris</td>
                              <td className="Table-Data-Hover">London</td>
                              <td className="Table-Data-Hover">London</td>
                            </tr>
                            <tr>
                              <td className="Table-Data-Hover">London</td>
                              <td className="Table-Data-Hover">Paris</td>
                              <td className="Table-Data-Hover">London</td>
                              <td className="Table-Data-Hover">Paris</td>
                              <td className="Table-Data-Hover">Paris</td>
                              <td className="Table-Data-Hover">London</td>
                            </tr>
                            <tr>
                              <td className="Table-Data-Hover">London</td>
                              <td className="Table-Data-Hover">Paris</td>
                              <td className="Table-Data-Hover">London</td>
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
                   

             <div className="col-lg-4 margintop col-md-12 Radio-Button Train-col4-width" >
              <div className="Train-InputDiv  custom-traininput d-flex ps-3 m-0 p-2">
                <div className="custom-labelinput">
                <label className="Train-Label"  htmlFor="">Depature
                <input className="Train-Input" type="date"/></label>
                </div>
                <div className="custom-labelinput   Cutom-margin-right">
                <label className="Train-Label custom-labelinput-ml ps-3"  htmlFor="">Return
                <input className="Train-Input" type="date"/></label>
                </div>
                </div>
             </div>

              <div className="col-lg-2 col-margintop margintop margin-top col-md-12 Radio-Button">
                    <div className="Line-Height  m-0 p-2 Train-InputDiv">
                    <label class="Train-Label" for="">Train No</label>
                    <input class="Train-Input" type="text" placeholder="e.g 102"/>
                </div>
              </div>

              <div className="margintop Button-Custom-Width Button-display Flight-Button col-lg-2 col-md-12">
                <button
                  class="btn Search-Button btn-outline-success"
                  type="submit">
                  Search
                </button>
              </div>
                </div>
            </div>
            </div>
            {/* <div class="Checkbox d-flex ps-3 mb-3">
                <input class="Train-Checkbox" type="checkbox" value="" id="flexCheckDefault"/>
                <label class="Train-CheckboxLabel ps-2" for="flexCheckDefault">
                  Bundle & Save
                </label>
              </div> */}
            </div>
    );
}

export default Train ;