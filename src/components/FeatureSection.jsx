import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { features } from "../constants";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const FeatureSection = () => {
  const [openIdx, setOpenIdx] = useState(null);
  const toggleOpen = (idx) => setOpenIdx(prev => (prev === idx ? null : idx));

  return (
    <div className="relative mt-20 sm:mt-20 border-b border-neutral-800 sm:min-h-[800px]">
      <div className="text-center">
        <span className="bg-neutral-900 text-[#12556b] rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Services
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Services <span className="bg-[#12556b] text-transparent bg-clip-text">We Provide</span>
        </h2>
      </div>

      {/* Desktop grid with animations */}
      <motion.div
        className="hidden sm:flex flex-wrap mt-10 lg:mt-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="w-full sm:w-1/2 lg:w-1/3 p-4"
          >
            <div className="flex items-start cursor-pointer">
              <div className="flex mx-6 h-10 w-10 p-2 bg-[#12556b] justify-center items-center rounded-full transition-colors duration-300 text-white group-hover:bg-white group-hover:text-[#12556b]">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl text-white">{feature.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-400">{feature.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Mobile accordion with animation */}
      <div className="sm:hidden mt-10">
        {features.map((feature, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div key={idx} className="border-b border-neutral-800">
              <button
                className="w-full flex justify-between items-start p-4 text-white text-left"
                onClick={() => toggleOpen(idx)}
              >
                <div className="flex items-center">
                  <div className="h-8 w-8 flex-shrink-0 bg-[#12556b] rounded-full flex items-center justify-center text-white mr-3">
                    {feature.icon}
                  </div>
                  <span className="font-medium">{feature.text}</span>
                </div>
                <span className="text-[#12556b]">
                  {isOpen ? <ChevronUp /> : <ChevronDown />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 pt-0 text-neutral-400">
                      {feature.description}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeatureSection;
