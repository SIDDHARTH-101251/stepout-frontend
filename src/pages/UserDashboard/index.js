import "./index.css";
import UserHeader from "../../components/UserHeader";
import { useState } from "react";
import Search from "../../components/Search";
import Booking from "../../components/Booking";

const UserDashboard = () => {
  const [activeComponent, setActiveComponent] = useState("search");

  const onActiveSearch = () => {
    setActiveComponent("search");
  };

  const onActiveBooking = () => {
    setActiveComponent("booking");
  };

  return (
    <div className="user-dashboard-main-container">
      <UserHeader
        onActiveSearch={onActiveSearch}
        onActiveBooking={onActiveBooking}
      />
      {activeComponent === "search" && <Search />}
      {activeComponent === "booking" && <Booking />}
    </div>
  );
};

export default UserDashboard;
