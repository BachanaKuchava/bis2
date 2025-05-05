import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const faqData = [
  {
    question: "How long does it take to build a website or app?",
    answer:
      "Development time depends on project scope. A simple site takes 2-4 weeks, while complex apps can take several months. We provide a detailed timeline after discussing your requirements.",
  },
  {
    question: "How much does it cost to develop a website or mobile app?",
    answer:
      "Cost varies based on features, design complexity, and integrations. Contact us for a free consultation and personalized quote.",
  },
  {
    question: "Do you provide maintenance and support?",
    answer:
      "Yes—we offer ongoing maintenance, security updates, bug fixes, and support to keep your digital products running smoothly.",
  },
  {
    question: "Can you build e-commerce platforms?",
    answer:
      "Absolutely! We develop high-performance e-commerce sites with secure payments, product management, and order tracking.",
  },
  {
    question: "Do you integrate third-party services?",
    answer:
      "Yes! We integrate payment gateways (Stripe, PayPal), CRM systems, ERP software, and various APIs to enhance your business operations.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleIndex = (idx) => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <section className="py-16 bg-neutral-900 min-h-screen">
      <motion.div
        className="max-w-4xl mx-auto px-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } }
        }}
      >
        <motion.h2
          className="text-4xl font-semibold text-center text-white mb-6"
          variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.p
          className="text-center text-neutral-400 mb-12"
          variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}
        >
          Everything you need to know about working with us.
        </motion.p>

        <div className="space-y-4">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                layout
                initial={{ borderColor: "#374151" }}
                animate={{ borderColor: isOpen ? "#12556b" : "#374151" }}
                className="rounded-lg overflow-hidden border bg-neutral-800"
              >
                <motion.button
                  layout
                  className="w-full flex justify-between items-center p-4 focus:outline-none"
                  onClick={() => toggleIndex(idx)}
                >
                  <motion.span
                    layout
                    className={`text-lg font-medium transition-colors ${
                      isOpen ? "text-[#12556b]" : "text-white"
                    }`}
                  >
                    {item.question}
                  </motion.span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    className="text-[#12556b]"
                  >
                    <ChevronDown />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-4 bg-neutral-900"
                    >
                      <motion.p className="text-neutral-300 py-4">
                        {item.answer}
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="mt-12 text-center"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        >
          <p className="text-neutral-300 mb-4">Still have questions?</p>
          <Link
            to="/contacts"
            className="inline-block bg-[#12556b] text-white py-2 px-6 rounded-lg transform transition hover:scale-105 hover:opacity-90"
          >
            Contact Us
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Faq;
