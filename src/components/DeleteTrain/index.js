import { useState } from "react";
import Cookies from "js-cookie";
import "./index.css";

const DeleteTrain = () => {
  const [trainId, setTrainId] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const onChangeTrainId = (event) => setTrainId(event.target.value);

  const onSubmit = async (event) => {
    event.preventDefault();
    setMessage("");
    setError("");
    const token = Cookies.get("token");
    try {
      const response = await fetch(`http://localhost:1300/trains/${trainId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`, // Adjust based on how you store tokens
        },
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Train deleted successfully");
        setTrainId("");
      } else {
        setError(data.message || "Error deleting train");
      }
    } catch (error) {
      console.error("Error deleting train:", error);
      setError("Internal server error");
    }
  };

  return (
    <form className="delete-train-form" onSubmit={onSubmit}>
      <label htmlFor="trainId">Train ID</label>
      <input
        type="text"
        id="trainId"
        value={trainId}
        onChange={onChangeTrainId}
      />
      <button type="submit">Delete Train</button>
      {message && <p className="message">{message}</p>}
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default DeleteTrain;
