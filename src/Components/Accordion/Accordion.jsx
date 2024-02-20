import React from "react";
import "./Accordion.css"

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion() {
  return (
   
        <div className="Accordion-Heading pb-5">
           <div className="container" data-aos="zoom-in">
        <Typography className="Heading pt-5">FAQ</Typography>
    

      <Accordion className="mt-5 box-shadow Accordion-marginTop Accordion-Margin">
        <AccordionSummary className="Border-Top" expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography className="Typography-Heading">How do I find the best flight deals on Nexus.com?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="Accordion-Paragraph">
          Nexus.com offers different flight deals. Please refer to our deals page for details.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className="mt-2 box-shadow">
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
          <Typography className="Typography-Heading">How to find get cheap flights?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="Accordion-Paragraph">
          To book the cheapest flights, we suggest you to book your flights 6-8 weeks in advance, book flights from budget airlines, buy with Trip Coins and from flights sale, book indirect flights and avoid high traveling in peak tourist seasons. If you would like to know more tips about booking the cheapest flights, remember to check out our "Frequently Asked Questions" section on our flight pages!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className="mt-2 box-shadow">
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
          <Typography className="Typography-Heading">When are flight tickets cheapest?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="Accordion-Paragraph">
          Best days to book flights are Tuesday, Wednesday and Saturday. However, prices may fluctuate due to different factors. Remember to check out Trip.com's price graph for the best flight deals!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className="mt-2 box-shadow">
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
          <Typography className="Typography-Heading">Low Cost Flight Deals with Nexus.com in Asia</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="Accordion-Paragraph">
         Nexus.com works closely with major airlines across Asia, so whether you’re jetting off for pleasure or traveling for business, we offer cheap flight deals to the best destinations in Asia. Looking for the cheapest airline tickets to Beijing, Shanghai, Hong Kong, Seoul, Tokyo, Okinawa, Jeju, or Taipei? Or budget flights to Kuala Lumpur, Jakarta, Bali, Bangkok, Phuket, or Singapore? Getting your tickets is easy with Trip.com.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className="mb-5 mt-2 box-shadow Accordion-mb">
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
          <Typography className="Typography-Heading">Explore the World by Booking Cheap Flights with Nexus.com</Typography>
        </AccordionSummary>
        <AccordionDetails >
          <Typography className="Accordion-Paragraph pb-5">
          Nexus.com goes the extra mile to help you find the best choice of flight tickets and discount airfares to destinations all around the world. Our search results provide you with the most up-to-date prices for flights worldwide, along with real-time flight statuses, durations, and departure and arrival times to help you find cheap flight tickets quickly. We take data security seriously and employ the latest in online security methods so that you can book low-cost flights with confidence using a credit and debit card, PayPal, or UnionPay.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
    </div>
  );
}
