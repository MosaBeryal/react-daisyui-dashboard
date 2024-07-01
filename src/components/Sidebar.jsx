import React from "react";
import Table from "./Table";
import {
  LayoutDashboard,
  BarChartBig,
  NotepadText,
  WalletCards,
  MessageCircleMore,
  MessageSquareWarning,
} from "lucide-react";
import ProfilePicture from "../assets/profile.jpg";
import Card from "./Card";
import SalesChart from "./SalesChart";
import Navbar from "./Navbar";

const Sidebar = ({ pageContent }) => {
  return (
    <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
    <ul className="menu bg-[#0E0522] text-white min-h-full w-72 gap-4 p-4 md:p-3s">
      {/* Sidebar content here */}
      <li>
        <div className="flex items-center gap-3">
          <img
            src={ProfilePicture}
            alt="logo"
            className="w-10 h-10 rounded-full"
          />
          <p className="font-bold text-2xl">Logoipsum</p>
        </div>
      </li>
      <li className="">
        <label className="input input-bordered hover:bg-blue-950 bg-blue-950 input-sm flex items-center gap-2 rounded-full">
          <input
            type="text"
            className="grow bg-transparent text-white placeholder-white"
            placeholder="Search"
          />
          <kbd className="kbd kbd-sm bg-blue-950 text-white">⌘</kbd>
          <kbd className="kbd kbd-sm bg-blue-950 text-white">K</kbd>
        </label>
      </li>
      <li>
        <a className="flex items-center gap-2 hover:bg-[#653EFE] rounded-full p-2">
          <LayoutDashboard /> Dashboard
        </a>
      </li>
      <li>
        <a className="flex items-center gap-2 hover:bg-[#653EFE] rounded-full p-2">
          <BarChartBig /> Analytics
        </a>
      </li>
      <li>
        <a className="flex items-center gap-2 hover:bg-[#653EFE] rounded-full p-2">
          <NotepadText /> Orders
        </a>
      </li>
      <li>
        <a className="flex items-center gap-2 hover:bg-[#653EFE] rounded-full p-2">
          <WalletCards /> Payments
        </a>
      </li>
      <li>
        <a className="flex items-center gap-2 hover:bg-[#653EFE] rounded-full p-2">
          <MessageCircleMore /> Messages
        </a>
      </li>
      <li>
        <a className="flex items-center gap-2 hover:bg-[#653EFE] rounded-full p-2">
          <MessageSquareWarning /> Feedback
        </a>
      </li>
    </ul>
  </div>
  );
};

export default Sidebar;
