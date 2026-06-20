import React from "react";
import { motion } from "framer-motion";
import CardEspacially from "../components/Product/CardEspacially";
import { title } from "motion/react-client";
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
const Product = () => {
  return (
    <>
      <div className="w-full h-screen flex justify-center ">
        <div className="container mt-8">
          {/* title */}
          <div className="w-full h-auto grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 place-items-center mt-12 ">
            <div className="w-full h-full lg:px-12 mb-2">
              <h3 className="text-sm bg-blue-500/20 max-w-fit text-blue-500 py-1 px-4 rounded-3xl mb-4">
                Trust Digital Markplace
              </h3>
              <h1 className="lg:text-6xl md:text-4xl text-3xl text-center lg:text-start md:text-start font-bold font-Inter text-white flex lg:flex-col">
                Software <span>Solutionss</span>
              </h1>
              <p className="text-gray-500 text-justify text-lg">
                Browse our curated collection of premium software licenses,
                security tools, developer resources, and productivity
                solutions.developer tools.
              </p>
              {/* qty user  service */}
              <div className="w-full h-74 flex items-center justify-start gap-4">
                {operate.map((items) => {
                  return (
                    <div className="w-36 h-32  flex flex-col items-center justify-center font-Inter">
                      <h1 className="text-3xl font-bold text-center">{items.usage}</h1>
                      <p className="text-gray-400 text-center">{items.title}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* card espacially */}
            <div className="w-full h-full flex justify-center items-center ">
              <CardEspacially />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
