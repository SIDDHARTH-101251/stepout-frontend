import { useState } from "react";
import "./index.css";

const CheckStatus = () => {
  const [bookingId, setBookingId] = useState("");
  const [bookingDetails, setBookingDetails] = useState(null);
  const [error, setError] = useState("");

  const onChangeBookingId = (event) => {
    setBookingId(event.target.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setError("");
    try {
      const response = await fetch(
        `http://localhost:1300/bookings/${bookingId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Adjust based on how you store tokens
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setBookingDetails(data);
      } else {
        const data = await response.json();
        setError(data.message || "Error fetching booking details");
        setBookingDetails(null);
      }
    } catch (error) {
      console.error("Error fetching booking details:", error);
      setError("Internal server error");
      setBookingDetails(null);
    }
  };

  return (
    <form className="check-status-form" onSubmit={onSubmit}>
      <label htmlFor="bookingId">Booking ID</label>
      <input
        type="text"
        id="bookingId"
        value={bookingId}
        onChange={onChangeBookingId}
      />
      <button type="submit">Check Status</button>
      {error && <p className="error">{error}</p>}
      {bookingDetails && (
        <div className="booking-details">
          <h3>Booking Details</h3>
          <p>
            <strong>Booking ID:</strong> {bookingDetails.id}
          </p>
          <p>
            <strong>User ID:</strong> {bookingDetails.user_id}
          </p>
          <p>
            <strong>Username:</strong> {bookingDetails.username}
          </p>
          <p>
            <strong>Train ID:</strong> {bookingDetails.train_id}
          </p>
          <p>
            <strong>Train Name:</strong> {bookingDetails.train_name}
          </p>
          <p>
            <strong>Source Station:</strong> {bookingDetails.source_station}
          </p>
          <p>
            <strong>Destination Station:</strong>{" "}
            {bookingDetails.destination_station}
          </p>
          <p>
            <strong>Seats Booked:</strong> {bookingDetails.seats_booked}
          </p>
          <p>
            <strong>Booking Time:</strong>{" "}
            {new Date(bookingDetails.booking_time).toLocaleString()}
          </p>
        </div>
      )}
    </form>
  );
};

export default CheckStatus;
