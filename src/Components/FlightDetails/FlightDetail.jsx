import React from "react";
import "./FlightDetail.css"
import AirlinesIcon from '@mui/icons-material/Airlines';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import InventoryIcon from '@mui/icons-material/Inventory';

const FlightDetails = () => {
    return (
        <div className="container-fluid Container-bg pb-4">
            <div className="container">
            <div className="row pt-5 ">
                <div className="col-lg-4 col-sm-12 col-md-12 Flight-Heading text-center" data-aos="fade-down">
                    <div className="d-flex justify-content-center">
                    <div className="d-flex justify-content-center mb-2 social-icon"><AirlinesIcon className="Flight-Details-Icon"></AirlinesIcon></div>
                    </div>
                   <div>
                    <h2 className="Top-Airline-Heading">Top Airlines</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit esse dolorum veniam facilis necessitatibus laboriosam laudantium dolorem accusamus praesentium fuga eum ab eaque, quidem, consequatur veritatis exercitationem nemo aliquid tempora?</p>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12 col-md-12 Flight-Heading text-center" data-aos="zoom-in">
                    <div className="d-flex justify-content-center">
                    <div className="d-flex justify-content-center mb-2 social-icon"><WorkspacePremiumIcon className="Flight-Details-Icon"></WorkspacePremiumIcon></div>

                    </div>
                    <h2 className="Top-Airline-Heading">Best Price Guarantee</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit esse dolorum veniam facilis necessitatibus laboriosam laudantium dolorem accusamus praesentium fuga eum ab eaque, quidem, consequatur veritatis exercitationem nemo aliquid tempora?</p>
                </div>
                <div className="col-lg-4 col-sm-12 col-md-12 Flight-Heading text-center" data-aos="fade-up">
                    <div className="d-flex justify-content-center">
                    <div className="d-flex justify-content-center mb-2 social-icon"><InventoryIcon className="Flight-Details-Icon"></InventoryIcon></div>
                    </div>
                    <h2 className="Top-Airline-Heading">Amazing Packages Deals</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit esse dolorum veniam facilis necessitatibus laboriosam laudantium dolorem accusamus praesentium fuga eum ab eaque, quidem, consequatur veritatis exercitationem nemo aliquid tempora?</p>
                </div>
            </div>
            </div>
        </div>
    )
}
export default FlightDetails;