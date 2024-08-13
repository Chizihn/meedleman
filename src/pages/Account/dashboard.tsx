import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar";

const Dashboard = () => {
  return (
    <div className="h-screen flex overflow-y-hidden">
      <Sidebar />
      <div className="h-screen flex-grow overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
