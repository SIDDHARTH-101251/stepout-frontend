import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";
import "./index.css";

const AdminHeader = () => {
  const navigate = useNavigate();

  const onClickLogout = () => {
    Cookies.remove("token");
    navigate("/");
  };

  const [addTrain, setAddActive] = useState(true);
  const [updateTrain, setUpdateActive] = useState(false);
  const [deleteTrain, setDeleteActive] = useState(false);

  const onClickSearch = () => {
    setAddActive(true);
    setUpdateActive(false);
    setDeleteActive(false);
  };

  const onClickBooking = () => {
    setUpdateActive(true);
    setAddActive(false);
    setDeleteActive(false);
  };

  const onClickStatus = () => {
    setAddActive(false);
    setUpdateActive(false);
    setDeleteActive(true);
  };

  return (
    <div className="header-container">
      <div
        className={`options ${addTrain ? "active-option" : ""}`}
        onClick={onClickSearch}
      >
        <h1>Add Train</h1>
      </div>
      <div
        className={`options ${updateTrain ? "active-option" : ""}`}
        onClick={onClickBooking}
      >
        <h1>Update Train</h1>
      </div>
      <div
        className={`options ${deleteTrain ? "active-option" : ""}`}
        onClick={onClickStatus}
      >
        <h1>Delete Train</h1>
      </div>
      <div className="options">
        <button type="button" onClick={onClickLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminHeader;
