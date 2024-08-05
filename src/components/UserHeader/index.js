import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";
import "./index.css";

const UserHeader = () => {
  const navigate = useNavigate();

  const onClickLogout = () => {
    Cookies.remove("token");
    navigate("/");
  };

  const [search, setSearchActive] = useState(true);
  const [booking, setBookingActive] = useState(false);
  const [status, setStatusActive] = useState(false);

  const onClickSearch = () => {
    setSearchActive(true);
    setBookingActive(false);
    setStatusActive(false);
  };

  const onClickBooking = () => {
    setBookingActive(true);
    setSearchActive(false);
    setStatusActive(false);
  };

  const onClickStatus = () => {
    setSearchActive(false);
    setBookingActive(false);
    setStatusActive(true);
  };

  return (
    <div className="header-container">
      <div
        className={`options ${search ? "active-option" : ""}`}
        onClick={onClickSearch}
      >
        <h1>Search</h1>
      </div>
      <div
        className={`options ${booking ? "active-option" : ""}`}
        onClick={onClickBooking}
      >
        <h1>Booking</h1>
      </div>
      <div
        className={`options ${status ? "active-option" : ""}`}
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
