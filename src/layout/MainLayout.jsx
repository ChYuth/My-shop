import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Inforonfooter from "../components/footer/Inforonfooter";
import InforUnderFooter from "../components/footer/InforUnderFooter";
const MainLayout = () => {
  return (
    <>
      <div className="w-full min-h-screen flex justify-between flex-col relative">
        <header className="w-full h-auto bg-[#0b111e] text-white flex items-center justify-center  fixed">
          <Navbar />
        </header>
        <main className="w-full h-full flex-1 p-4 mt-16">
          <Outlet />
        </main>
        <footer className="w-full h-auto bg-black/30 text-white flex flex-col items-center justify-center rounded">
          <div className="container ">
            <Inforonfooter />
          </div>
          <hr className="w-full border border-gray-500/40 " />
          <div className="container h-full p-4 ">
         <InforUnderFooter/>
          </div>
        </footer>
      </div>
    </>
  );
};

export default MainLayout;
