import React from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const titlecolor = (e) => {
  switch (e) {
    case "New":
      return "bg-blue-600/80 text-white border-0";
    case "Hot":
       return "bg-yellow-900/80 text-white";
    case "Sole":
      return "bg-red-600/80 text-white border-0";
    case "Popular":
      return "bg-green-600/80 text-sky-950 border-0";
    default:
      return " border text-white rounded-lg";
  }
};
const CardProduct = ({ item, cardVariants }) => {
  return (
    <motion.div
      variants={cardVariants}
      className="
        w-72 h-94
        rounded-lg
        border border-gray-800
        bg-black/50
        group
        cursor-default
        duration-300
        ease-in-out hover:-translate-y-4
      "
    >
      {/* Image Section */}
      <div className="w-full h-40 p-2">
        <div className="w-full h-full bg-sky-950/40 rounded-md flex items-center justify-center relative">
          <img
            src={item.images}
            alt={item.name}
            className="w-full h-36 object-cover rounded-2xl"
          />

          <span 
          className={
            `absolute top-2 left-1 px-2 py-1 rounded-md text-sm  text-white font-bold ${titlecolor(item.title)}`
          }>    
            {item.title}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="w-full flex flex-col p-2 mt-4">
        <p className="text-[12px] text-gray-600 font-bold">{item.captions}</p>

        <h1 className="text-md font-bold">{item.name}</h1>

        {/* Rating */}
        <div className="flex justify-between items-center gap-1">
          <div className="max-w-fit flex items-center gap-2">
            <span className="flex">
              {[...Array(item.rating)].map((_, i) => (
                <FaStar className="text-amber-400" />
              ))}
            </span>
            <span className="font-bold">{item.rating}</span>
          </div>
          <span className="text-gray-600 font-bold text-[12px]">
            ({item.qty} Reviews)
          </span>
        </div>
        {/* Price */}
        <div className="w-full flex items-center mt-16">
          <div className="w-full flex justify-between items-center">
            <h1 className="text-3xl font-bold">${item.full.toFixed(2)}</h1>

            <button
              type="button"
              className="
                px-4 py-1
                bg-white text-black
                rounded
                cursor-pointer
                duration-300
                active:scale-95
                hover:bg-blue-600
                hover:text-white
              "
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CardProduct;
