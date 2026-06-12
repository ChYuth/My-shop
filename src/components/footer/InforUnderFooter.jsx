import React from "react";
import { motion } from "framer-motion";
import { IoShieldOutline } from "react-icons/io5";
import { span } from "motion/react-client";
const menu = [
  {
    name: "Privacy Policy",
  },
  {
    name: "Terms of service",
  },
  {
    name: "Refunds",
  },
  {
    name: "Contact Support",
  },
];
const InforUnderFooter = () => {
  return (
    <div className=" w-full h-full grid grid-cols-1 gap-2 lg:grid-cols-2 md:grid-cols-2 p-2 mt-6">
      <div className="w-full h-full flex flex-col gap-2 ">
        <h1 className="text-3xl font-extrabold flex items-center gap-2">
          <IoShieldOutline className="text-blue-500" />
          LicenseHub
        </h1>
        <h2 className="text-sm text-gray-400 text-justify">
          &copy; 2026 LicenseHub Marketplace. Secure & Verified Software
          Licenses.
        </h2>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } }, // លោតម្ដងមួយៗ
        }}
        className="flex flex-wrap gap-6 mt-6"
      >
        {menu.map((item, index) => (
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-gray-500 hover:text-white hover:underline cursor-pointer transition-colors"
          >
            {item.name}
          </motion.p>
        ))}
      </motion.div>
    </div>
  );
};

export default InforUnderFooter;
