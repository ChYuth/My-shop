import React from "react";
import { delay, motion } from "framer-motion";
import CardEspacially from "../components/Product/CardEspacially";
import { del, title } from "motion/react-client";
import ListProduct from "../components/Product/ListProduct";
const operate = [
  {
    usage: "500+",
    title: `Product`,
  },
  {
    usage: "10000+",
    title: "Costomers",
  },
  {
    usage: "24/7",
    title: "Support",
  },
];
// animation
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2, // 👈 controls one-by-one speed
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};
const Product = () => {
  return (
    <>
      <div className="w-full h-full flex justify-center ">
        <div className="container mt-8">
          {/* title */}
          <div className="w-full h-auto grid grid-cols-1 lg:grid-cols-2  place-items-center mt-12 ">
            <div className="w-full h-full lg:px-12 mb-2">
              <motion.h3
              initial={{opacity:0, x:-60}}
              whileInView={{opacity:1, x:0}}
              transition={{duration:0.5, delay:0.3}}
              viewport={{once:false, amount:0.3}}
              className="text-sm bg-blue-500/20 max-w-fit text-blue-500 py-1 px-4 rounded-3xl mb-4">
                Trust Digital Markplace
              </motion.h3>
              <motion.h1
               initial={{opacity:0, y:-60}}
              whileInView={{opacity:1, y:0}}
              transition={{duration:0.5, delay:0.3}}
              viewport={{once:false, amount:0.3}}
              className="lg:text-6xl md:text-4xl text-3xl text-center lg:text-start md:text-start font-bold font-Inter text-white flex lg:flex-col">
                Software <span>Solutionss</span>
              </motion.h1>
              <motion.p
               initial={{opacity:0, x:60}}
              whileInView={{opacity:1, x:0}}
              transition={{duration:0.5, delay:0.3}}
              viewport={{once:false, amount:0.3}}
              className="text-gray-500 text-justify text-lg">
                Browse our curated collection of premium software licenses,
                security tools, developer resources, and productivity
                solutions.developer tools.
              </motion.p>
              {/* qty user  service */}
              <motion.div
               className="w-full flex flex-wrap justify-center gap-6 p-2"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.3 }}
              className="w-full h-auto flex items-center justify-start gap-4 mt-4">
                {operate.map((items) => {
                  return (
                    <motion.div
                    variants={cardVariants}
                    className="w-36 h-22  flex flex-col items-center justify-center font-Inter border rounded-2xl bg-auto hover:bg-blue-950 duration-300 ease-in-out hover:-translate-y-[-0.5rem] cursor-pointer">
                      <h1 className="text-3xl font-bold text-center">{items.usage}</h1>
                      <p className="text-gray-400 text-center">{items.title}</p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
            {/* card espacially */}
            <div
            className="w-full h-full flex justify-center items-center ">
              <CardEspacially />
            </div>
          </div>
                {/* Product */}
                <div className="container h-auto mt-3 mb-3">
                  <ListProduct/>
                </div>
        </div>
      </div>
    </>
  );
};

export default Product;
