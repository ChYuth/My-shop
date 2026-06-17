import React, { useState, useEffect } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

import office2024 from "../../assets/img/office2024.png";
import Security from "../../assets/img/Security.png";
import Support from "../../assets/img/support.png";

const slides = [
  {
    pic: office2024,
    title: "Microsoft Office",
    caption:
      "Access Microsoft Word, Excel, PowerPoint and manage your documents efficiently.",
    btn: "Open Microsoft Office",
    link: "/office",
  },
  {
    pic: Security,
    title: "Security",
    caption:
      "Protect your devices with advanced security solutions and real-time monitoring.",
    btn: "Learn More",
    link: "/security",
  },
  {
    pic: Support,
    title: "Support",
    caption:
      "Professional IT support, installation and system maintenance services.",
    btn: "View Services",
    link: "/support",
  },
];

const Pictureshow = () => {
  const [current, setCurrent] = useState(0);

  // ================= AUTO SLIDE =================
  // FIX: slide auto move from RIGHT → LEFT
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // ================= NEXT SLIDE =================
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  // ================= PREVIOUS SLIDE =================
  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="w-full lg:w-5/6 h-[460px] rounded-xl relative overflow-hidden  group">
      <div className="w-full h-full overflow-hidden">
        {/* FIX: X-axis slide system (RIGHT → LEFT movement) */}
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${current * 100}%)`, // ⭐ FIXED PATH
          }}
        >
          {slides.map((slide, index) => (
            <div
              // FIX: each slide full width (important for X slide)
              className="min-w-full h-full bg-cover bg-center relative group"
              style={{
                backgroundImage: `url(${slide.pic})`,
              }}
            >
              {/* jak blur bg-black */}
              <div className="absolute inset-0  bg-black/0 group-hover:bg-black/50
               group-hover:backdrop-blur-sm transition-all duration-500" />

              {/* slide word row */}
              <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 
              group-hover:opacity-100 transition-all text-sky-950">
                <button
                  onClick={prevSlide}
                  className="bg-white p-3 rounded-full shadow-lg hover:scale-110 active:scale-90 duration-300 cursor-pointer"
                >
                  <FaArrowLeftLong />
                </button>

                <button
                  onClick={nextSlide}
                  className="bg-white p-3 rounded-full shadow-lg hover:scale-110 active:scale-90 duration-300 cursor-pointer"
                >
                  <FaArrowRightLong />
                </button>
              </div>

              {/* content */}
              <div className="h-full flex flex-col justify-center px-16 gap-4">
                <h1 className="text-4xl font-bold text-sky-950 opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 transition-all duration-500">
                  {slide.title}
                </h1>

                <p className="text-white max-w-2xl opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 transition-all duration-700">
                  {slide.caption}
                </p>

                <button className="w-fit bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 active:scale-95 opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 transition-all duration-700">
                  {slide.btn}
                </button>
              </div>

              {/* point */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3">
                {slides.map((_, i) => (
                  <button
                    onClick={() => setCurrent(i)}
                    className={`w-4 h-4 rounded-full transition hover:bg-blue-500 ${
                      current === i ? "bg-blue-500 scale-125" : "bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pictureshow;
