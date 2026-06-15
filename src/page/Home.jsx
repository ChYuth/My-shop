import React from "react";
import { FaSearch } from "react-icons/fa";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="w-full h-full flex items-center justify-center p-2 lg:p-4 ">
        {/* decription home */}
        <div className="w-full h-auto lg:mt-14 md:mt-10 grid grid-cols-1 lg:grid-cols-2 place-items-center p-2 gap-4 px-6 md:px-14 lg:px-16">
          {/* introduct */}
          <div className="w-full h-full">
            {/* caption */}
            <h2 className="text-md p-2 lg:text-start md:text-start  rounded-full  text-center text-gray-600 font-bold ">
              Hey Guys, Welcom To
            </h2>
            <div className="flex flex-col items-center lg:items-start text-center">
              <h1
                className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl
    font-extrabold font-Inter
    text-transparent bg-clip-text bg-gradient-to-r
    from-blue-200 via-blue-400 to-blue-600"
              >
                Digital
              </h1>

              <p
                className="typing text-2xl sm:text-4xl md:text-5xl lg:text-6xl
    font-extrabold font-Inter
    text-transparent bg-clip-text bg-gradient-to-r
    from-blue-200 via-blue-400 to-blue-600
    lg:-mt-4"
              >
                Store Service
              </p>
            </div>

            <p className="text-justify text-gray-400/90">
              Get genuine license keys for Windows, Microsoft Office, Antivirus,
              and more. Instant delivery, secure payment, and trusted service
            </p>
          </div>
          <div className="w-full h-full bg-amber-50/30">123</div>
        </div>
      </div>
    </>
  );
};

export default Home;
