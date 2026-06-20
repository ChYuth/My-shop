import React from "react";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa"; // shop
import { FiArrowRight } from "react-icons/fi"; // right
import { CgOptions } from "react-icons/cg"; // learn more

import "./Home.css";
import Pictureshow from "../components/Home/Pictureshow";
import Categories from "../components/Home/Categories";
import CardLicenses from "../components/Home/CardLicenses";

const Home = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col items-center justify-center p-2 lg:p-4 ">
        {/* decription home */}
        <div className="w-full  h-auto lg:mt-14 md:mt-10 grid grid-cols-1 lg:grid-cols-2 place-items-center p-2 gap-4 px-6 md:px-14 lg:px-16">
          {/* introduct */}
          <div className="w-full h-full">
            {/* caption */}
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: [0.25, 1, 0.5, 1],
              }}
              viewport={{ once: false, amount: 0.8 }}
              className="text-md p-2 lg:text-start md:text-start  rounded-full  text-center text-gray-600 font-bold "
            >
              Hey Guys, Welcom To
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center lg:items-start text-center"
            >
              <motion.h1
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                }}
                className="text-2xl sm:text-*4xl md:text-5xl lg:text-6xl
                font-extrabold font-Inter
                text-transparent bg-clip-text bg-gradient-to-r
                from-blue-200 via-blue-400 to-blue-600"
              >
                Digital
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.4,
                }}
                viewport={{ once: false, amount: 0.3 }}
                className="typing text-2xl sm:text-4xl md:text-5xl lg:text-6xl
                font-extrabold font-Inter
                text-transparent bg-clip-text bg-gradient-to-r
                from-blue-200 via-blue-400 to-blue-600
                lg:-mt-4"
              >
                Store Service
              </motion.p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
              }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-justify text-gray-400/90 mb-4"
            >
              Get genuine license keys for Windows, Microsoft Office, Antivirus,
              and more. Instant delivery, secure payment, and trusted service
            </motion.p>
            {/* btn  */}
            <motion.div
              initial="hidden"
              whileInView="show"
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
              className="w-full grid grid-cols-1 lg:grid-cols-2 place-items-center gap-4 mt-2 "
            >
              <motion.button
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 40,
                  },
                  show: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                type="button"
                className="
                    group flex items-center justify-center gap-3
                    w-full py-4
                    rounded-2xl
                    bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500
                    text-white font-semibold text-lg
                    shadow-md shadow-blue-500/20
                    hover:shadow-blue-500/40
                    hover:-translate-y-1
                    transition-all duration-300
                    active:scale-95
                  "
              >
                <FaShoppingBag className="text-xl" />

                <span>To Product Now</span>

                <FiArrowRight
                  className="
                  opacity-0 -translate-x-2
                  group-hover:opacity-100
                  group-hover:translate-x-0
                  transition-all duration-300
                "
                />
              </motion.button>

              {/* More Options */}
              <motion.button
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 40,
                  },
                  show: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                type="button"
                className="
                  group flex items-center justify-center gap-3
                  w-full py-4
                  rounded-2xl
                  bg-white/5
                  border border-white/10
                  text-white font-semibold text-lg
                  hover:bg-white/10
                  hover:border-blue-400/40
                  hover:-translate-y-1
                  transition-all duration-300
                  shadow-md shadow-white/10
                  hover:shadow-slate-500/40
                  active:scale-95
                "
              >
                <CgOptions />
                <span>Learn more</span>

                <FiArrowRight
                  className="
                  opacity-0 -translate-x-2
                  group-hover:opacity-100
                  group-hover:translate-x-0
                  transition-all duration-300
                "
                />
              </motion.button>
            </motion.div>
          </div>
          {/* slide */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full h-full flex items-center justify-center  p-2"
          >
            {/* picture */}
            <Pictureshow />
          </motion.div>
        </div>
        {/* feature categories */}
        <div
          className="container  h-auto mt-4 grid grid-cols-1 
         place-items-center p-4 gap-4 "
        >
          <Categories />
        </div>
        {/*  Popular Licenses*/}
      </div>
      <div className="w-full h-full flex justify-center items-center bg-slate-500/10 ">
        <CardLicenses />
      </div>
    </>
  );
};

export default Home;
