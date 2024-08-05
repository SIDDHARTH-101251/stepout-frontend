import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./index.css";
import { useState } from "react";

const UserHeader = (props) => {
  const navigate = useNavigate();
  const { onActiveSearch, onActiveBooking, onActiveStatus } = props;

  const onClickLogout = () => {
    Cookies.remove("token");
    navigate("/");
  };

  const [activeOption, setActiveOption] = useState("search");

  const onClickSearch = () => {
    onActiveSearch();
    setActiveOption("search");
  };

  const onClickBooking = () => {
    onActiveBooking();
    setActiveOption("booking");
  };

  const onClickStatus = () => {
    onActiveStatus();
    setActiveOption("status");
    // Assuming you have a similar function to setActiveStatus
  };

  return (
    <div className="header-container">
      <div
        className={`options ${
          activeOption === "search" ? "active-option" : ""
        }`}
        onClick={onClickSearch}
      >
        <h1>Search</h1>
      </div>
      <div
        className={`options ${
          activeOption === "booking" ? "active-option" : ""
        }`}
        onClick={onClickBooking}
      >
        <h1>Booking</h1>
      </div>
      <div
        className={`options ${
          activeOption === "status" ? "active-option" : ""
        }`}
        onClick={onClickStatus}
      >
        <h1>Status</h1>
      </div>
      <div className="options">
        <button type="button" onClick={onClickLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserHeader;
