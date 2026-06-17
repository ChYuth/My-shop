import React from "react";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";//right
import { Link } from "react-router-dom";
import Product from '../../page/Product'
import Items from "./ItemofCategories/Items";
const Categories = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col ">
        {/* title */}
        <div className="w-full h-auto p-2 mb-12">
            <h1 className="font-Inter font-bold text-2xl mb-2">Feature Categories</h1>
            <nav className=" w-full flex justify-between gap-2">
                <span className="max-w-fit text-sm text-slate-600">Browse our most popular software suites and tools.</span>
                <Link to={"/products"} 
                 className="max-w-fit text-sky-700 font-bold text-sm flex items-center gap-1.5 cursor-pointer hover:underline">View All Product 
                <FaArrowRightLong/>
                </Link>
            </nav>
        </div>
        {/* items */}
        <div className="w-full h-full">
            <Items/>
        </div>
      </div>
    </>
  );
};

export default Categories;
