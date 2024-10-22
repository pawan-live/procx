import NavbarData from "@/app/Utils/data/navbarData.json";
import SidebarData from "@/app/Utils/data/sidebarData.json";
import { ToastContainer } from "react-toastify";

import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex flex-row h-screen">
      <ToastContainer />
      <Sidebar sidebarItmes={SidebarData} />
      <div className="w-full">
        <Navbar navbarItems={NavbarData} />
        {children}
      </div>
    </div>
  );
}
