import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
const MainLayout = () => {
  return (
    <>
      <div className="w-full min-h-screen flex justify-between flex-col relative">
        <header className="w-full h-auto bg-[#0b111e] text-white flex items-center justify-center p-2 fixed">
         <Navbar />
        </header>
        <main className="w-full min-h-screen flex-1 p-4 mt-16">
          <Outlet />
        </main>
        <footer className="w-full h-auto bg-gray-800 text-white flex items-center justify-center">
          <p>&copy; 2024 My App</p>
        </footer>
      </div>
    </>
  );
};

export default MainLayout;
