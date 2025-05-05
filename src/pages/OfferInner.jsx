// src/pages/OfferInner.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Static example for the "Education" segment
const services = [
  {
    feature: 'LMS & e-Learning',
    desc: 'Custom course creation, adaptive quizzes, and progress dashboards to boost student engagement and retention.',
  },
  {
    feature: 'Student CRM',
    desc: 'Manage applications, automate follow-ups with prospects, and build lasting relationships with parents and alumni.',
  },
  {
    feature: 'Virtual Classrooms',
    desc: 'Integrated video conferencing, chat, and digital whiteboards so instructors and students can collaborate remotely.',
  },
  {
    feature: 'Reporting & Analytics',
    desc: 'Real-time attendance, performance analytics, and data exports to help you track outcomes and make data-driven decisions.',
  },
];

const OfferInner = () => {
  const navigate = useNavigate();
  const [openIdx, setOpenIdx] = useState(null);
  const toggleOpen = (idx) => setOpenIdx(prev => (prev === idx ? null : idx));

  return (
    <motion.div
      className="py-16 bg-neutral-900 min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-5xl mx-auto px-6 space-y-8 text-white">
        {/* Back Button */}
        <button
          onClick={() => navigate('/offers')}
          className="text-[#12556b] hover:underline"
        >
          ← Back
        </button>

        {/* Title */}
        <motion.h1
          className="text-3xl font-bold text-center"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Education Services
        </motion.h1>

        {/* Mobile Accordion */}
        <div className="sm:hidden">
          {services.map((svc, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={idx}
                className="border-b border-neutral-700"
                initial={{ borderColor: '#374151' }}
                animate={{ borderColor: isOpen ? '#12556b' : '#374151' }}
              >
                <motion.button
                  layout
                  className="w-full flex justify-between items-center p-4 text-left text-white"
                  onClick={() => toggleOpen(idx)}
                >
                  <span className={isOpen ? 'text-[#12556b]' : 'text-white'}>
                    {svc.feature}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    className="text-[#12556b]"
                  >
                    {isOpen ? <ChevronUp /> : <ChevronDown />}
                  </motion.span>
                </motion.button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden bg-neutral-800"
                    >
                      <p className="p-4 pt-0 text-neutral-300">
                        {svc.desc}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Desktop Table */}
        <div className="hidden sm:block">
          <motion.table
            className="w-full table-auto border-collapse bg-neutral-800 rounded-lg overflow-hidden"
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <thead>
              <tr className="bg-neutral-700">
                <th className="p-4 text-left">Feature</th>
                <th className="p-4 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              {services.map((svc, idx) => (
                <motion.tr
                  key={idx}
                  className={idx % 2 === 0 ? 'bg-neutral-800' : 'bg-neutral-700'}
                  variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                >
                  <td className="p-4 text-neutral-200 font-medium">{svc.feature}</td>
                  <td className="p-4 text-neutral-300">{svc.desc}</td>
                </motion.tr>
              ))}
            </tbody>
          </motion.table>
        </div>
      </div>
    </motion.div>
  );
};

export default OfferInner;
