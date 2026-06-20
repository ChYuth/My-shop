import React from "react";
import { FlatTree, motion } from "framer-motion";
import { IoDocumentTextOutline } from "react-icons/io5"; //document
import { FaArrowRightLong } from "react-icons/fa6"; //right
import { MdComputer } from "react-icons/md"; //laptop
import { FaCode } from "react-icons/fa6"; //coding
import computer from "../../../assets/img/Computer.png";

const Items = () => {
  return (
    <>
      <div className="w-full h-full lg:h-[70vh] grid grid-cols-1 lg:grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full h-full border border-gray-800 shadow-md  shadow-black/30 
        rounded-2xl flex overflow-hidden group relative "
        >
          <img
            src={computer}
            alt="item"
            className="w-full h-full opacity-70 group-hover:scale-105 duration-300
          ease-in-out transition-all"
          />
          <div className="absolute bg-black/50 h-full w-full p-2 px-4 flex items-end ">
            <div className="w-full h-54 ">
              <h2 className="max-w-fit px-4 rounded bg-[#468571] font-bold py-1 cursor-pointer">
                Security Expert
              </h2>
              <h1
                className="text-2xl lg:text-4xl font-Inter cursor-pointer
              hover:translate-y-[-2px] duration-100 ease-in-out"
              >
                Antivirus & Security
              </h1>
              <p
                className="text-slate-400 cursor-pointer 
              hover:translate-y-[-2px] duration-100 ease-in-out"
              >
                Protect your endpoint with industry-leading threat detection.
              </p>
              <div className="w-full h-full py-8">
                <button
                  type="button"
                  className="max-w-fit bg-white text-slate-950 font-bold border-0 p-2 px-6 rounded-xl
                  duration-100 hover:bg-transparent hover:border border-white/20 hover:text-gray-300
                   transition-all ease-in-out cursor-pointer"
                >
                  Browse Security
                </button>
              </div>
            </div>
          </div>
        </motion.div>
        {/* right */}
        <div className="w-full h-full  flex flex-col gap-4 ">
          <motion.div
            initial={{ opacity: 0, x:100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full h-auto  flex flex-col  border px-4 py-1   border-gray-800 shadow-md  shadow-black/30 rounded-2xl "
          >
            <motion.article className="w-full flex justify-between p-4">
              <span className="max-w-fit p-2 rounded-2xl hover:bg-blue-700 text-5xl bg-blue-600">
                <IoDocumentTextOutline />
              </span>
              <span className=" flex items-center text-xl text-sky-700 px-4 hover:-translate-x-[-1rem] duration-500 ease-in-out transition-all">
                <FaArrowRightLong />
              </span>
            </motion.article>
            <div className="w-full h-full flex flex-col items-start justify-end mb-6">
              <h1 className="text-4xl font-bold">Office Suites</h1>
              <p>Boost productivity with profestionale document tools.</p>
            </div>
            {/* menu */}
          </motion.div>
          <div className="w-full h-full mt- grid grid-cols-1 lg:grid-cols-2 place-items-center mb-2 gap-2 mt-[4rem]">
            {/* 1 */}
            <motion.div
            initial={{opacity:0, y:-60}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.5, delay:0.3}}
            viewport={{amount:0.3, once:false}}
              className=" border-gray-800 shadow-md border shadow-black/30 rounded-2xl w-full h-full
             px-4 py-6 flex flex-col justify-between"
            >
              <h1 className="max-w-fit h-auto text-4xl bg-sky-950/40 rounded p-2">
                <MdComputer />
              </h1>
              <div>
                <h1 className="font-bold text-lg">Operationg Systems</h1>
                <p className="text-slate-700">Genuine OS Keys.</p>
              </div>
            </motion.div>
            {/* 2 */}
            <motion.div
            initial={{opacity:0, y:60}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.7, delay:0.5}}
            viewport={{amount:0.3, once:false}}
              className=" border-gray-800 shadow-md border shadow-black/30 rounded-2xl w-full h-full
             px-4 py-6 flex flex-col justify-between"
            >
              <h1 className="max-w-fit h-auto text-4xl bg-sky-950/40 rounded p-2">
                <FaCode />
              </h1>
              <div>
                <h1 className="font-bold text-lg">Developer Tools</h1>
                <p className="text-slate-700">IDE and Framworks.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Items;
