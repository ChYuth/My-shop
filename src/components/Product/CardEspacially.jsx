import React from "react";
import office from "../../assets/img/computer_office.jpg";
import { delay, motion } from "framer-motion";
import { FaCartShopping } from "react-icons/fa6";
const main = [
  {
    image: office,
    namepro: ` Microsft Office 365`,
    caption: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
            commodi laborum ipsa dicta repellat.`,
    full: `106`,
    less: 100,
    view: "Buy",
  },
];
const CardEspacially = () => {
  return (
    <>
      {main.map((mains) => {
        return (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3,ease:'easeInOut' }}
            viewport={{ once: false, amount: 0.3 }}
            className="w-full lg:w-2/3 h-auto rounded-2xl bg-black/20 flex flex-col shadow shadow-blue-600  gap-2 justify-center items-center 
          hover:-translate-y-2 duration-300 ease-in-out"
          >
            <div className="w-full h-full overflow-hidden  mb-2 flex items-center justify-center  ">
              <img
                src={mains.image}
                alt="Office"
                className="w-full h-auto object-cover rounded-t-2xl "
              />
            </div>
            {/* name product */}
            <div className="w-full h-full px-4 ">
              <h1 className="w-full text-start  font-bold text-xl">
                {mains.caption}
              </h1>
              {/* caption */}
              <p className="text-justify text-gray-500 mt-2 mb-4">
                {mains.caption}
              </p>
              <div>
                <span className="text-gray-600/60">
                  <strike>{mains.full}</strike>
                </span>
                <div className="w-full h-full mb-4 flex justify-between">
                  <h2 className="text-2xl font-extrabold">
                    {mains.less.toFixed(2)}$
                  </h2>
                  <button
                    type="button"
                    className="flex gap-2 items-center justify-center font-bold text-xl bg-blue-500 px-6 py-2 rounded-xl hover:text-gray-400
                 hover:bg-blue-600 active:scale-95 transition-all ease-in-out"
                  >
                    <FaCartShopping /> {mains.view}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </>
  );
};

export default CardEspacially;
