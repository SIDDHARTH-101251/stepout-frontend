import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";
import "./index.css";

const AdminHeader = ({
  onActiveAddTrain,
  onActiveUpdateTrain,
  onActiveDeleteTrain,
}) => {
  const navigate = useNavigate();

  const onClickLogout = () => {
    Cookies.remove("token");
    navigate("/");
  };

  const [activeOption, setActiveOption] = useState("addTrain");

  const onClickAddTrain = () => {
    onActiveAddTrain();
    setActiveOption("addTrain");
  };

  const onClickUpdateTrain = () => {
    onActiveUpdateTrain();
    setActiveOption("updateTrain");
  };

  const onClickDeleteTrain = () => {
    onActiveDeleteTrain();
    setActiveOption("deleteTrain");
  };

  return (
    <div className="header-container">
      <div
        className={`options ${
          activeOption === "addTrain" ? "active-option" : ""
        }`}
        onClick={onClickAddTrain}
      >
        <h1>Add Train</h1>
      </div>
      <div
        className={`options ${
          activeOption === "updateTrain" ? "active-option" : ""
        }`}
        onClick={onClickUpdateTrain}
      >
        <h1>Update Train</h1>
      </div>
      <div
        className={`options ${
          activeOption === "deleteTrain" ? "active-option" : ""
        }`}
        onClick={onClickDeleteTrain}
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
