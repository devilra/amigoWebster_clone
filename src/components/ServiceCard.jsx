import React from "react";
import { motion } from "framer-motion";

const ServiceCard = ({ title, desc, image }) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="relative h-[460px] w-full md:w-[360px] shadow-md rounded-xl overflow-hidden group  md:mb-8">
      <div
        className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-125 px-3"
        style={{ backgroundImage: `url(${image})` }}>
        <div className="absolute inset-0 hover:bg-opacity-60 bg-black bg-opacity-50" />
      </div>
      <div className="absolute bottom-10  text-white px-3  z-10 ">
        <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
        <p className="text-sm mt-1 text-gray-300">{desc}</p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
