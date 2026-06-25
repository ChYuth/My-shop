import React from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// props card
import CardProduct from "./CardProduct";
// img antivirus
import ant1 from "../../assets/img/antivirus/security4.png";
import ant2 from "../../assets/img/antivirus/security1.png";
import ant3 from "../../assets/img/antivirus/security2.png";
import ant4 from "../../assets/img/antivirus/security3.png";
// office
import office1 from "../../assets/img/Office/wps.png";
import office2 from "../../assets/img/Office/LTSC.png";
import office3 from "../../assets/img/Office/office365.png";
import office4 from "../../assets/img/Office/office2021.png";
// service
import s from "../../assets/img/service/image.png";
import s1 from "../../assets/img/service/image1.png";
import s2 from "../../assets/img/service/image2.png";
import s3 from "../../assets/img/service/image3.png";
// support
import image from "../../assets/img/Computer.png";
import image1 from "../../assets/img/support/image1.png";
import image2 from "../../assets/img/support/image2.png";
import image3 from "../../assets/img/support/image3.png";
// List Category
const list = [
  {
    namepro: "Antivirus",
    card: [
      {
        images: ant1,
        title: "New",
        captions: "For clean virus",
        name: "Norton",
        rating: 5,
        qty: 120,
        full: 100,
        pay: 95,
      },
      {
        images: ant2,
        title: "Hot",
        captions: "Best protection",
        name: "Kaspersky",
        rating: 4,
        qty: 80,
        full: 90,
        pay: 85,
      },
      {
        images: ant3,
        title: "Sole",
        captions: "Internet security",
        name: "Avast",
        rating: 5,
        qty: 150,
        full: 120,
        pay: 99,
      },
      {
        images: ant4,
        title: "Popular",
        captions: "Smadav security",
        name: "Smadav",
        rating: 4,
        qty: 60,
        full: 110,
        pay: 89,
      },
    ],
  },

  {
    namepro: "Office",
    card: [
      {
        images: office4,
        title: "New",
        captions: "Office productivity",
        name: "Microsoft Office 2021",
        rating: 5,
        qty: 100,
        full: 150,
        pay: 129,
      },
      {
        images: office3,
        title: "Popular",
        captions: "Business suite",
        name: "Microsoft 365",
        rating: 5,
        qty: 200,
        full: 180,
        pay: 149,
      },
      {
        images: office1,
        title: "Sole",
        captions: "Document editing",
        name: "WPS Office",
        rating: 4,
        qty: 90,
        full: 50,
        pay: 39,
      },
      {
        images: office2,
        title: "Hot",
        captions: "Professional tools",
        name: "Office LTSC",
        rating: 4,
        qty: 70,
        full: 170,
        pay: 140,
      },
    ],
  },

  {
    namepro: "Service",
    card: [
      {
        images: s,
        title: "New",
        captions: "PC Maintenance",
        name: "Computer Service",
        rating: 5,
        qty: 40,
        full: 30,
        pay: 25,
      },
      {
        images: s1,
        title: "Popular",
        captions: "Windows Install",
        name: "OS Installation",
        rating: 5,
        qty: 120,
        full: 20,
        pay: 15,
      },
      {
        images: s2,
        title: "Hot",
        captions: "Data Recovery",
        name: "Recovery Service",
        rating: 4,
        qty: 50,
        full: 50,
        pay: 45,
      },
      {
        images: s3,
        title: "Sole",
        captions: "System Upgrade",
        name: "Hardware Upgrade",
        rating: 4,
        qty: 35,
        full: 60,
        pay: 49,
      },
    ],
  },

  {
    namepro: "Support",
    card: [
      {
        images: image,
        title: "New",
        captions: "Remote assistance",
        name: "Online Support",
        rating: 5,
        qty: 90,
        full: 25,
        pay: 20,
      },
      {
        images: image1,
        title: "Popular",
        captions: "24/7 help",
        name: "Premium Support",
        rating: 5,
        qty: 130,
        full: 40,
        pay: 35,
      },
      {
        images: image2,
        title: "Hot",
        captions: "Technical support",
        name: "IT Help Desk",
        rating: 4,
        qty: 70,
        full: 35,
        pay: 30,
      },
      {
        images: image3,
        title: "Sole",
        captions: "Device troubleshooting",
        name: "Tech Support",
        rating: 4,
        qty: 60,
        full: 30,
        pay: 25,
      },
    ],
  },
];
// animation
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08, // ⚡ fast one-by-one
      delayChildren: 0.05,
    },
  },
};
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 25,
    scale: 0.98,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.35, // ⚡ fast animation
      ease: [0.25, 0.1, 0.25, 1], // smooth professional easing
    },
  },
};
const ListProduct = () => {
  return (
    <div className="w-full h-full p-2 lg:px-12">
      {/* Title */}
      <h1
        className="
          font-bold text-3xl mb-2 px-2 max-w-fit
          hover:underline hover:text-blue-400
          cursor-default duration-200
        "
      >
        Product
      </h1>

      {/* Category List */}
      <div className="w-full h-full">
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="w-full flex flex-wrap justify-center gap-4 mb-2"
        >
          {list.map((item, index) => (
            <motion.li
              variants={cardVariants}
              className="
                max-w-fit px-3 py-1 text-xl font-semibold
                bg-transparent border-b-2 rounded-xl
                cursor-pointer
                hover:bg-gray-600/20
                hover:border-blue-600
                duration-300
              "
            >
              <a href={`#${item.namepro}`} className="w-full h-full">
                {item.namepro}
              </a>
            </motion.li>
          ))}
        </motion.ul>

        <hr className="text-gray-300/20 mt-8 mb-4" />
        <div className="w-full h-full flex flex-col gap-4">
          {list.map((items, index) => {
            return (
              <>
                <div
                  id={items.namepro}
                  className="w-full h-full flex flex-col "
                >
                  {/* // header */}
                  <div className="w-full flex flex-col gap-8 p-2 ">
                    <h1
                      className="
                max-w-fit px-5 py-2
                bg-amber-900/10 border-b-2
                rounded-md font-bold text-xl cursor-pointer hover:border-blue-600
                mb-4
              "
                    >
                      {items.namepro}
                    </h1>
                  </div>
                  {/* // card  */}
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="w-full h-full flex flex-wrap items-center justify-center gap-4"
                  >
                    {items.card.map((item, index) => (
                      <CardProduct
                        // item = and cardVariants= there are props
                        item={item}
                        cardVariants={cardVariants}
                      />
                    ))}
                  </motion.div>
                  {/* end card */}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default ListProduct;
