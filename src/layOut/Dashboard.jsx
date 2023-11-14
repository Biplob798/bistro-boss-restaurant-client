import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="w-64 min-h-screen bg-amber-600"></div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
