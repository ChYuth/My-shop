import React from "react";
import { MdOutlineSecurity } from "react-icons/md"; // security
import { FaFileSignature } from "react-icons/fa6"; // workflow
import { FaCloudDownloadAlt } from "react-icons/fa"; // claude storage
import { FaLaptopCode } from "react-icons/fa6"; //developer
import { FaStar } from "react-icons/fa"; // star
import { motion } from "framer-motion";

const card = [
  {
    caption: "Limite",
    icon: <MdOutlineSecurity />,
    title: "Defender",
    name: "Anitivirus",
    rate: 4.9,
    qty: 2000,
    price: 49.99,
    btn: "Add",
  },
  {
    caption: "New",
    icon: <FaFileSignature />,
    title: "Offcie",
    name: "Activate",
    rate: 4.9,
    qty: 2000,
    price: 49.99,
    btn: "Add",
  },
  {
    caption: "Null",
    icon: <FaCloudDownloadAlt />,
    title: "Storage",
    name: "Claude",
    rate: 4.9,
    qty: 2050,
    price: 320,
    btn: "Add",
  },
  {
    caption: "Sale",
    icon: <FaLaptopCode />,
    title: "Antivirus",
    name: "AVAST",
    rate: 4.9,
    qty: 2000,
    price: 50,
    btn: "Add",
  },
];
const styecaption = (caption) => {
  switch (caption) {
    case "Limite":
      return ` bg-green-400 text-sky-950`;
    case "New":
      return ` bg-blue-600 text-white`;
    case "Sale":
      return ` bg-red-600 text-white`;
    default:
      return ` bg-white text-black`;
  }
};

const CardLicenses = () => {
  return (
    <>
      <div className="container h-full flex flex-col justify-center items-center mb-2">
        <div className="w-full h-32 flex items-center justify-center flex-col">
          <h1 className="text-4xl font-bold font-Inter text-center mt-2">
            Popular Licenses
          </h1>
          <p className="text-sm text-gray-500">
            Top rate software by our profestional community.
          </p>
        </div>
        <div className="w-full h-full flex flex-wrap gap-6  justify-center p-2">
          {card.map((items, index) => {
            return (
              <motion.div 
            initial={{
              opacity: 0,
              y: 60,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            viewport={{ amount: 0.3 }}
            whileHover={{
              y: -10,
              scale: 1.02,
            }}
              className="w-74 h-84 rounded-lg border border-gray-800 bg-black/50 group hover:translate-y-[-0.5rem] duration-300 ease-In-Out cursor-default">
                <div className="w-full  h-34 p-2 ">
                  {/* picture */}
                  <div
                    className="w-full h-full bg-sky-950/40 text-sky-800 rounded-md
                                             flex relative items-center justify-center"
                  >
                    <span className="text-6xl group-hover:text-blue-600 duration-300 transition-all">
                      {items.icon}
                    </span>
                    <span
                      className={`absolute max-w-fit rounded-md py-1 px-4 h-auto top-2 text-sm left-2 ${styecaption(items.caption)}`}
                    >
                      {items.caption}
                    </span>
                  </div>
                  {/* infor */}
                  <div className="w-full h-full flex flex-col p-2 mt-4">
                    <p className="text-[12px] text-gray-600 font-bold">
                      {items.title}
                    </p>
                    <h1 className="text-md font-bold">{items.name}</h1>
                    <p className="flex items-center gap-1">
                      <FaStar className="text-blue-800" />
                      <span className="font-bold">{items.rate}</span>
                      <span className="text-gray-600 font-bold text-[12px] ">
                        ({items.qty})
                      </span>
                    </p>
                    <div className="w-full h-full flex items-center mt-16">
                      <div className="w-full h-full flex justify-between items-center">
                        <h1 className="text-3xl font-bold">
                          $ {items.price.toFixed(2)}
                        </h1>
                        <button
                          type="button"
                          className=" bg-white text-black px-4 py-1 rounded active:scale-95 duration-300 hover:bg-blue-600 cursor-pointer "
                        >
                          {items.btn}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CardLicenses;
