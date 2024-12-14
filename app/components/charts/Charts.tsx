"use client";
import React from "react";
import { UsersChart } from "./UsersChart";
import { BooksChart } from "./BooksChart";
import { motion } from "framer-motion";

const Charts = () => {
  const chartsVariants = {
    initial: {
      opacity: 0,
      x: 100,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
  };
  return (
    <div className="w-full container bg-neutral-100 mt-20 py-10">
      <h2 className="text-3xl md:text-4xl text-primaryColor font-bold  mb-10">
        آمار سایت
      </h2>

      <div className="w-full flex flex-col gap-5 md:flex-row items-center justify-between h-full">
        <motion.div
          variants={chartsVariants}
          initial="initial"
          whileInView="animate"
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{
            once: true,
          }}
          className="flex-1 h-full "
        >
          <UsersChart />
        </motion.div>
        <motion.div
          variants={chartsVariants}
          initial="initial"
          whileInView="animate"
          transition={{ duration: 0.5, delay: 1 }}
          viewport={{
            once: true,
          }}
          className="flex-1 h-full "
        >
          <BooksChart />
        </motion.div>
      </div>
    </div>
  );
};

export default Charts;
