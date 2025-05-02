import React, { useState } from "react";
import { CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
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
      <div className="flex flex-wrap">
        {pricingOptions.map((option, index) => {
          const isExpanded = expandedIndex === index;
          return (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
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
                        <span className="bg-[#12556b] text-transparent bg-clip-text text-xl ml-2">
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

                {/* Collapsible content: hidden on small until expanded; always visible on sm+ */}
                <div
                  className={`transition-max-h duration-300 overflow-hidden ${
                    isExpanded ? 'max-h-screen' : 'max-h-0'
                  } sm:max-h-none sm:overflow-visible`}
                >
                  <div className="p-6 pt-0">
                    {/* Price for small screens inside collapsible */}
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
