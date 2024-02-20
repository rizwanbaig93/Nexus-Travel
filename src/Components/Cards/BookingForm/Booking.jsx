import React from "react";
import "./Booking.css"

const BookingForm = () => {
    return (
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="text-end border-0 m-2">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body Booking-body">
        
      <h1 className="text-center">Booking Online Now</h1>
  <p className="text-center booking-ptag">Please fill out this form with the required information</p>
  <form action="">
    

      <div className="row">
        <div className="col-sm-12">
      <label>First Name 
        <input type="text" name="firstname" required className="inline"/></label>
        </div>
        <div className="col-sm-12">
      <label>Last Name 
      <input type="text" name="lastname" required  className="inline"/>
      </label>
      </div>
    

     
        <div className="col-sm-12">
      <label>Email
      <input type="email" name="email" required  className="inline"/>
      </label>
      </div>
      <div className="col-sm-12">
      <label>Phone Number 
      <input type="text" name="phone" required  className="inline"/>
      </label>
      </div>
      
        <div className="col-sm-12">
      <label>Check-in Date
      <input type="date" name="check-in-date" required  className="inline"/>
      </label>
      </div>
      <div className="col-sm-12">
      <label>Check-out Date
      <input type="date" name="check-out-date" required  className="inline"/>
      </label>
      </div>
    
   
   
        <div className="col-sm-12">
      <label> Accomodation Type
      <select name="accomodation">
            <option value="">(select one)</option>
            <option value="1">Hotel</option>
            <option value="2">Self-Catered</option>
            <option value="3">Hostel</option>
            <option value="4">Guesthouse</option>
          </select>
      </label>
      </div>
   
    <div className="col-sm-12">
      <label >Number of room <input type="number" name="age" min="1" max="120" className="room Number-Label inline"/></label>
      </div>
     
        <label  className="mt-2">Room Type
            <div className="Booking-Radio-Button">
            <div><label className="Room-Label"><input type="radio" name="room-type" class=""/> Single Room</label></div>
            <div><label className="Room-Label"><input type="radio" name="room-type" class=""/> Double Room</label></div>
            <div><label className="Room-Label"><input type="radio" name="room-type" class=""/> Triple Room</label></div>
            <div><label className="Room-Label"><input type="radio" name="room-type" class=""/> Quad Bedroom</label></div>
            </div>
       
        </label>
      

      <label  className="mt-2">Additional Requests
      <textarea name="additional" rows="5" cols="30" placeholder="Your message ..."></textarea>
      </label>
   
    <input type="submit" value="Submit" className="Submit-Button"/>
    </div>
  </form>
        
      </div>
    </div>
  </div>
  
</div>
    );
}

export default BookingForm;