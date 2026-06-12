import React from 'react'
import { motion } from "framer-motion";
// Usage: <MdVerified />
import { MdVerified } from "react-icons/md";
// Usage: <IoIosFlash />
import { IoIosFlash } from "react-icons/io";
// Usage: <MdHeadsetMic />
import { MdHeadsetMic } from "react-icons/md";
const infor = [
  {
    icon: <MdVerified />,
    title: "100% Genuine Licenses",
    des: "All products are sourced directly from authorized distributors and developers.",
  },
  {
        icon:<IoIosFlash />,
        title:'Fast Delivery',
        des:'Receive your license keys via email and dashboard instantly after purchase.'
    },
    {
        icon:<MdHeadsetMic />,
        title:'Expert Support',
        des:'Receive your license keys via email and dashboard instantly after purchase.'
    },
]
const Inforfooter = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 place-items-center gap-4 p-2 overflow-hidden">
        {infor.map((items, index) => (
          <motion.div
           initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  whileHover={{ y: -10 }} // Subtle float effect on hover
  transition={{ 
    type: "spring", 
    stiffness: 100, 
    damping: 10,
    duration: 0.5 
  }}
  viewport={{ amount: 0.3, once: false }}
          className=" w-full h-44 flex flex-col gap-2 p-4 cursor-pointer  ">
            <header className=" text-3xl text-blue-600 mb-2">{items.icon}</header>
            <h1 className="text-lg font-extrabold">{items.title}</h1>
            <p className="text-sm text-zinc-500 text-justify">{items.des}</p>
          </motion.div>
        ))}
    </div>
  )
}

export default Inforfooter