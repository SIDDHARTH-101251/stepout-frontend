import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./index.css";

const UserHeader = () => {
  const navigate = useNavigate();

  const onClickLogout = () => {
    Cookies.remove("token");
    navigate("/");
  };

  return (
    <div className="header-container">
      <div>Search</div>
      <div>Booking</div>
      <div>Status</div>
      <button type="button" onClick={onClickLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserHeader;
