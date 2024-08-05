import { useState } from "react";
import Cookies from "js-cookie";
import "./index.css";

const UpdateTrain = () => {
  const [trainId, setTrainId] = useState("");
  const [trainName, setTrainName] = useState("");
  const [sourceStation, setSourceStation] = useState("");
  const [destinationStation, setDestinationStation] = useState("");
  const [totalSeats, setTotalSeats] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const onChangeTrainId = (event) => setTrainId(event.target.value);
  const onChangeTrainName = (event) => setTrainName(event.target.value);
  const onChangeSourceStation = (event) => setSourceStation(event.target.value);
  const onChangeDestinationStation = (event) =>
    setDestinationStation(event.target.value);
  const onChangeTotalSeats = (event) => setTotalSeats(event.target.value);

  const onSubmit = async (event) => {
    event.preventDefault();
    setMessage("");
    setError("");
    const token = Cookies.get("token");
    try {
      const response = await fetch(`http://localhost:1300/trains/${trainId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Adjust based on how you store tokens
        },
        body: JSON.stringify({
          train_name: trainName,
          source_station: sourceStation,
          destination_station: destinationStation,
          total_seats: parseInt(totalSeats),
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Train updated successfully");
        setTrainId("");
        setTrainName("");
        setSourceStation("");
        setDestinationStation("");
        setTotalSeats("");
      } else {
        setError(data.message || "Error updating train");
      }
    } catch (error) {
      console.error("Error updating train:", error);
      setError("Internal server error");
    }
  };

  return (
    <form className="update-train-form" onSubmit={onSubmit}>
      <label htmlFor="trainId">Train ID</label>
      <input
        type="text"
        id="trainId"
        value={trainId}
        onChange={onChangeTrainId}
      />
      <label htmlFor="trainName">Train Name</label>
      <input
        type="text"
        id="trainName"
        value={trainName}
        onChange={onChangeTrainName}
      />
      <label htmlFor="sourceStation">Source Station</label>
      <input
        type="text"
        id="sourceStation"
        value={sourceStation}
        onChange={onChangeSourceStation}
      />
      <label htmlFor="destinationStation">Destination Station</label>
      <input
        type="text"
        id="destinationStation"
        value={destinationStation}
        onChange={onChangeDestinationStation}
      />
      <label htmlFor="totalSeats">Total Seats</label>
      <input
        type="number"
        id="totalSeats"
        value={totalSeats}
        onChange={onChangeTotalSeats}
      />
      <button type="submit">Update Train</button>
      {message && <p className="message">{message}</p>}
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default UpdateTrain;
