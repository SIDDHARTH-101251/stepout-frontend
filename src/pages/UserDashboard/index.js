import "./index.css";
import UserHeader from "../../components/UserHeader";
import { useState } from "react";
import Search from "../../components/Search";
import Booking from "../../components/Booking";

const UserDashboard = () => {
  const [search, setSearchActive] = useState(true);
  const [booking, setBookingActive] = useState(false);

  const onActiveSearch = () => {
    setSearchActive(true);
  };

  const onActiveBooking = () => {
    setBookingActive(true);
  };

  return search ? (
    <div className="user-dashboard-main-container">
      <UserHeader
        onActiveSearch={onActiveSearch}
        onActiveBooking={onActiveBooking}
      />
      <Search />
    </div>
  ) : booking ? (
    <div className="user-dashboard-main-container">
      <UserHeader
        onActiveSearch={onActiveSearch}
        onActiveBooking={onActiveBooking}
      />
      <Booking />
    </div>
  ) : (
    <div className="user-dashboard-main-container">
      <UserHeader
        onActiveSearch={onActiveSearch}
        onActiveBooking={onActiveBooking}
      />
    </div>
  );
};

export default UserDashboard;
