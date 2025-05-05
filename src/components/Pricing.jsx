import React, { useState } from "react";
import { CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { pricingOptions } from "../constants";

const Pricing = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const toggleExpand = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Pricing
      </h2>
      <p className="text-center text-neutral-500 mb-8 max-w-2xl mx-auto">
        Our pricing adapts to your timeline and requirements — every project is custom-priced to deliver optimal value and flexibility.
      </p>
      <div className="flex flex-wrap">
        {pricingOptions.map((option, index) => {
          const isExpanded = expandedIndex === index;
          const initialX = index % 2 === 0 ? -100 : 100;

          return (
            <motion.div
              key={index}
              className="w-full sm:w-1/2 lg:w-1/3 p-2"
              initial={{ opacity: 0, x: initialX }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="border border-[#12556b] rounded-xl">
                {/* Header always visible */}
                <div
                  className="p-6 flex justify-between items-center cursor-pointer"
                  onClick={() => toggleExpand(index)}
                >
                  <div>
                    <p className="text-4xl inline-flex items-center">
                      {option.title}
                      {option.title === "Premium" && (
                        <span className="bg-[#12556b] text-transparent bg-clip-text block text-sm sm:inline sm:text-xl sm:ml-2 mt-1 sm:mt-0">
                          (Popular)
                        </span>
                      )}
                    </p>
                    <p className="mt-2">
                      {/* Price visible only on sm+ */}
                      <span className="text-5xl mr-2 hidden sm:inline-block">
                        {option.price}
                      </span>
                    </p>
                  </div>
                  {/* Arrow only on small screens */}
                  <div className="sm:hidden text-[#12556b]">
                    {isExpanded ? <ChevronUp /> : <ChevronDown />}
                  </div>
                </div>

                {/* Mobile collapsible content */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="sm:hidden overflow-hidden"
                    >
                      <div className="p-6 pt-0">
                        <p className="mt-2 sm:hidden">
                          <span className="text-5xl mr-2">{option.price}</span>
                        </p>
                        <ul>
                          {option.features.map((feature, fidx) => (
                            <li key={fidx} className="mt-4 flex items-center">
                              <CheckCircle2 className="flex-shrink-0" />
                              <span className="ml-2">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <a
                          href="#"
                          className="inline-flex justify-center items-center w-full h-12 p-5 mt-6 tracking-tight text-xl hover:bg-[#12556b] border border-[#12556b] rounded-lg transition duration-200"
                        >
                          See Details
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Desktop static content */}
                <div className="hidden sm:block">
                  <div className="p-6 pt-0">
                    <p className="mt-2 sm:hidden">
                      <span className="text-5xl mr-2">{option.price}</span>
                    </p>
                    <ul>
                      {option.features.map((feature, fidx) => (
                        <li key={fidx} className="mt-4 flex items-center">
                          <CheckCircle2 className="flex-shrink-0" />
                          <span className="ml-2">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#"
                      className="inline-flex justify-center items-center w-full h-12 p-5 mt-6 tracking-tight text-xl hover:bg-[#12556b] border border-[#12556b] rounded-lg transition duration-200"
                    >
                      See Details
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
