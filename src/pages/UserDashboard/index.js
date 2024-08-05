import "./index.css";
import UserHeader from "../../components/UserHeader";
import { useState } from "react";
import Search from "../../components/Search";
import Booking from "../../components/Booking";
import CheckStatus from "../../components/CheckStatus";

const UserDashboard = () => {
  const [activeComponent, setActiveComponent] = useState("search");

  const onActiveSearch = () => {
    setActiveComponent("search");
  };

  const onActiveBooking = () => {
    setActiveComponent("booking");
  };

  const onActiveStatus = () => {
    setActiveComponent("status");
  };

  return (
    <div className="user-dashboard-main-container">
      <UserHeader
        onActiveSearch={onActiveSearch}
        onActiveBooking={onActiveBooking}
        onActiveStatus={onActiveStatus}
      />
      {activeComponent === "search" && <Search />}
      {activeComponent === "booking" && <Booking />}
      {activeComponent === "status" && <CheckStatus />}
    </div>
  );
};

export default UserDashboard;
