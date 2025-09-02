import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdLocationPin } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import { FiUsers } from "react-icons/fi";
import "./SearchBar.css";

const ReservationForm: React.FC = () => {
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  // const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [guests, setGuests] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ destination, checkIn,  guests });
  };

  return (
    <form className="reservation-form" onSubmit={handleSubmit}>
      {/* Destination */}
      <div className="form-group">
        <MdLocationPin className="icon1" />
        <span className="bookspan">
          <h2 className="checkin">Location</h2>
          <input
            type="text"
            placeholder="Where are you going?"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="destination-input"
          />
        </span>
      </div>

      {/* Check-in */}
      <div className="form-group">
        <CiCalendar className="icon1" />
        <span className="bookspan">
          <h2 className="checkin">Check in</h2>
          <DatePicker
            selected={checkIn}
            onChange={(date: Date | null) => setCheckIn(date)}
            className="destination-input"
            dateFormat="yyyy-MM-dd"
            placeholderText="Select check-in date"
          />
        </span>
      </div>

      {/* Check-out */}
      {/* <div className="form-group">
        <CiCalendar className="icon1" />
        <span className="bookspan">
          <h2 className="checkin">Check out</h2>
          <DatePicker
            selected={checkOut}
            onChange={(date: Date | null) => setCheckOut(date)}
            className="destination-input"
            dateFormat="yyyy-MM-dd"
            placeholderText="Select check-out date"
          />
        </span>
      </div> */}

      {/* Guests */}
      <div className="form-group">
        <FiUsers className="icon1" />
        <span className="bookspan">
          <h2 className="checkin">Guests</h2>
          <input
            type="number"
            min="1"
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            className="destination-input"
          />
        </span>
      </div>

      {/* Submit Button */}
      <button type="submit" className="btn-submit">
        Search
      </button>
    </form>
  );
};

export default ReservationForm;
