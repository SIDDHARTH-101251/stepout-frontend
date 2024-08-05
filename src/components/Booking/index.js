import { useState } from "react";
import "./index.css";

const Booking = () => {
  const [userId, setUserId] = useState("");
  const [trainId, setTrainId] = useState("");
  const [seatsBooked, setSeatsBooked] = useState("");
  const [message, setMessage] = useState("");

  const onChangeUserId = (event) => {
    setUserId(event.target.value);
  };

  const onChangeTrainId = (event) => {
    setTrainId(event.target.value);
  };

  const onChangeSeatsBooked = (event) => {
    setSeatsBooked(event.target.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token"); // Adjust this based on how you're storing the JWT token

    try {
      const response = await fetch("http://localhost:1300/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          user_id: userId,
          train_id: trainId,
          seats_booked: seatsBooked,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Booking successful!");
      } else {
        setMessage(data.error || "Booking failed");
      }
    } catch (error) {
      console.error("Error creating booking:", error);
      setMessage("Internal server error");
    }
  };

  return (
    <form className="booking-form" onSubmit={onSubmit}>
      <label htmlFor="userId">User ID</label>
      <input type="text" id="userId" value={userId} onChange={onChangeUserId} />
      <label htmlFor="trainId">Train ID</label>
      <input
        type="text"
        id="trainId"
        value={trainId}
        onChange={onChangeTrainId}
      />
      <label htmlFor="seatsBooked">Seats to Book</label>
      <input
        type="number"
        id="seatsBooked"
        value={seatsBooked}
        onChange={onChangeSeatsBooked}
      />
      <button type="submit">Book Train</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default Booking;
