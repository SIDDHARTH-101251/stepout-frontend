import { useState } from "react";
import "./index.css";

const Search = () => {
  const [start, setStart] = useState("");
  const [destination, setDestination] = useState("");
  const [trains, setTrains] = useState([]);

  const onChangeStart = (event) => {
    setStart(event.target.value);
  };

  const onChangeDestination = (event) => {
    setDestination(event.target.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:1300/trains?source_station=${encodeURIComponent(
          start
        )}&destination_station=${encodeURIComponent(destination)}`
      );
      const data = await response.json();
      setTrains(data);
    } catch (error) {
      console.error("Error fetching trains:", error);
    }
  };

  return (
    <form className="search-train-form" onSubmit={onSubmit}>
      <label htmlFor="start">Start Location</label>
      <input type="text" id="start" value={start} onChange={onChangeStart} />
      <label htmlFor="destination">Destination</label>
      <input
        type="text"
        id="destination"
        value={destination}
        onChange={onChangeDestination}
      />
      <button type="submit">Search</button>
      {trains.length > 0 && (
        <ul>
          {trains.map((train) => (
            <li key={train.id}>
              {train.train_name}, seats : {train.total_seats}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
};

export default Search;
