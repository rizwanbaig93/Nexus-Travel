

import { isVisible } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
import "./UpDownScroll.css"
import PersonIcon from '@mui/icons-material/Person';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import UnarchiveIcon from '@mui/icons-material/Unarchive';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

function Counter({ className, ...rest }) {
  const [viewPortEntered, setViewPortEntered] = useState(false);

  return (
    <>
      <section className="counter">
        <div className="overlay">
        <div className="title text-center pt-5">
          <h1 className="mt-5">Our Achievements</h1>
          <p className="pt-1">Winged, good, male fourth abundantly dominion second it tree over thing that may tree. Signs fish made tree you days seas heaven. Called seas, shall isn’t.</p>
        </div>

        <div className="count-row  pt-3">
          <div className="container Counter-margin mt-5">
            <div className="ScrollCounter pt-5">

           <div data-aos="zoom-in-down">
           <div className="counter-column mb-2" >
        <PersonIcon className="Counter-Social-Icons"></PersonIcon>
        <strong data-number="1020">
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
             </div>
            <h4 className="Counter-Mainheading mb-5"> Tweets </h4>
             </div>
                 
         
              <div data-aos="zoom-in-up">
              <div className="counter-column mb-2" >
<DirectionsCarIcon className="Counter-Social-Icons"></DirectionsCarIcon>
            <strong data-number="1250">
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
               </div>
               <h4 className="Counter-Mainheading mb-5"> Followers </h4>
              </div>
         
              <div data-aos="zoom-in-down">
              <div className="counter-column mb-2" >
<UnarchiveIcon className="Counter-Social-Icons"></UnarchiveIcon>
            <strong data-number="1350">
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
               </div>
               <h4 className="Counter-Mainheading mb-5"> Likes </h4>
              </div>
          
              <div data-aos="zoom-in-up">
              <div className="counter-column mb-2" >
<SentimentSatisfiedAltIcon className="Counter-Social-Icons"></SentimentSatisfiedAltIcon>
            <strong data-number="970">
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
               </div>
               <h4 className="Counter-Mainheading mb-5"> Following </h4>
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
