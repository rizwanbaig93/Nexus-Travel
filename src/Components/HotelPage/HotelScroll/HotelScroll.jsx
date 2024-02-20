

import { isVisible } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
import "./HotelScroll.css"
import PersonIcon from '@mui/icons-material/Person';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import UnarchiveIcon from '@mui/icons-material/Unarchive';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

function Counter({ className, ...rest }) {
  const [viewPortEntered, setViewPortEntered] = useState(false);

  return (
    <>
      <section className="hotel-counter">
        <div className="container">
        {/* <div className=" text-center pt-5">
          <h1 className="mt-5">Our Achievements</h1>
          <p className="pt-1">Winged, good, male fourth abundantly dominion second it tree over thing that may tree. Signs fish made tree you days seas heaven. Called seas, shall isn’t.</p>
        </div> */}

        <div className="count-row pt-5">
          <div className="container counter-container mt-4">
            <div className="hotel-ScrollCounter pt-5"  >
           
           <div>
           <div className="hotel-counter-column mb-2">
           <PersonIcon className="HotelCounter-Icons"></PersonIcon>
      </div>

      <strong className="HoterlScroll-number" >
          <CountUp {...rest} start={viewPortEntered ? null : 0} end={1020}>
            {({ countUpRef }) => {
              return (
                <ReactVisibilitySensor
                  active={!viewPortEntered}
                  onChange={(isVisible) => {
                    if (isVisible) {
                      setViewPortEntered(true);
                    }
                  }}
                  delayedCall
                >
                  <span className="number" ref={countUpRef} />
                </ReactVisibilitySensor>
              );
            }}
          </CountUp>
        </strong>
      <h4 className="hotel-Mainheading mb-5"> CUSTOMERS </h4>
           </div>
             
          <div>

<div className="hotel-counter-column mb-2">
<DirectionsCarIcon className="HotelCounter-Icons"></DirectionsCarIcon>  
          </div>

          <strong className="HoterlScroll-number" data-number="1250">
              <CountUp {...rest} start={viewPortEntered ? null : 0} end={1250}>
                {({ countUpRef }) => {
                  return (
                    <ReactVisibilitySensor
                      active={!viewPortEntered}
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setViewPortEntered(true);
                        }
                      }}
                      delayedCall
                    >
                      <span className="number" ref={countUpRef} />
                    </ReactVisibilitySensor>
                  );
                }}
              </CountUp>
            </strong>
          <h4 className="hotel-Mainheading mb-5"> Followers </h4>
          </div>
       
          <div>
<div className="hotel-counter-column mb-2">
<UnarchiveIcon className="HotelCounter-Icons"></UnarchiveIcon>
          </div>
          <strong className="HoterlScroll-number" data-number="1350">
              <CountUp {...rest} start={viewPortEntered ? null : 0} end={1350}>
                {({ countUpRef }) => {
                  return (
                    <ReactVisibilitySensor
                      active={!viewPortEntered}
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setViewPortEntered(true);
                        }
                      }}
                      delayedCall
                    >
                      <span className="number" ref={countUpRef} />
                    </ReactVisibilitySensor>
                  );
                }}
              </CountUp>
            </strong>
          <h4 className="hotel-Mainheading mb-5"> Likes </h4>
          </div>
          
          <div>
<div className="hotel-counter-column mb-2"> 
<SentimentSatisfiedAltIcon className="HotelCounter-Icons"></SentimentSatisfiedAltIcon>
          </div>
          <strong className="HoterlScroll-number HoterlScroll-number-mr " data-number="970">
              <CountUp {...rest} start={viewPortEntered ? null : 0} end={970}>
                {({ countUpRef }) => {
                  return (
                    <ReactVisibilitySensor
                      active={!viewPortEntered}
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setViewPortEntered(true);
                        }
                      }}
                      delayedCall
                    >
                      <span className="number" ref={countUpRef} />
                    </ReactVisibilitySensor>
                  );
                }}
              </CountUp>
            </strong>
          <h4 className="hotel-Mainheading mb-5"> HAPPY CLIENTS </h4>
          </div>
      
          </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}

export default Counter;
