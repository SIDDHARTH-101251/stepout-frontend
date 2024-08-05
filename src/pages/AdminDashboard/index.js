import { useState } from "react";
import AdminHeader from "../../components/AdminHeader";
import AddTrain from "../../components/AddTrain";
import UpdateTrain from "../../components/UpdateTrain";
import DeleteTrain from "../../components/DeleteTrain";
import "./index.css";

const AdminDashboard = () => {
  const [activeComponent, setActiveComponent] = useState("addTrain");

  const onActiveAddTrain = () => {
    setActiveComponent("addTrain");
  };

  const onActiveUpdateTrain = () => {
    setActiveComponent("updateTrain");
  };

  const onActiveDeleteTrain = () => {
    setActiveComponent("deleteTrain");
  };

  return (
    <div className="admin-dashboard-main-container">
      <AdminHeader
        onActiveAddTrain={onActiveAddTrain}
        onActiveUpdateTrain={onActiveUpdateTrain}
        onActiveDeleteTrain={onActiveDeleteTrain}
      />
      {activeComponent === "addTrain" && <AddTrain />}
      {activeComponent === "updateTrain" && <UpdateTrain />}
      {activeComponent === "deleteTrain" && <DeleteTrain />}
    </div>
  );
};

export default AdminDashboard;
