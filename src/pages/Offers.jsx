// src/pages/Offers.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const segments = [
  { name: 'Construction', desc: 'Premium software for managing construction projects from blueprint to build.', image: 'https://parsadi.com/wp-content/uploads/2022/05/Company.jpg' },
  { name: 'Education', desc: 'Engage and educate with our modern e-learning platforms and tools.', image: 'https://parsadi.com/wp-content/uploads/2022/05/Company.jpg' },
  { name: 'E-Commerce', desc: 'Powerful online storefronts to scale your retail business.', image: 'https://parsadi.com/wp-content/uploads/2022/05/Company.jpg' },
  { name: 'Healthcare', desc: 'Secure and compliant healthcare management systems.', image: 'https://parsadi.com/wp-content/uploads/2022/05/Company.jpg' },
  { name: 'Finance', desc: 'Robust financial software to streamline your operations.', image: 'https://parsadi.com/wp-content/uploads/2022/05/Company.jpg' },
  { name: 'Real Estate', desc: 'Innovative platforms to showcase and manage properties.', image: 'https://parsadi.com/wp-content/uploads/2022/05/Company.jpg' },
  { name: 'Hospitality', desc: 'Seamless booking and guest management solutions.', image: 'https://parsadi.com/wp-content/uploads/2022/05/Company.jpg' },
  { name: 'About Us', desc: 'Learn more about BI Solutions and our journey.', image: 'https://parsadi.com/wp-content/uploads/2022/05/Company.jpg' },
];

const Offers = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const perPage = 4;
  const endIndex = page * perPage;
  const visibleSegments = isMobile ? segments.slice(0, endIndex) : segments;

  return (
    <section className="relative py-20 bg-neutral-900 overflow-hidden">
      <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 h-40 bg-[#12556b] opacity-20" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 space-y-12">
        <motion.div
          className="text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold">Industry Segments</h2>
          <p className="mt-2 text-sm sm:text-lg text-neutral-300">
            Tailored solutions crafted for your business sector.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {visibleSegments.map((seg, idx) => (
            <Link to="/offer" key={idx} className="block rounded-xl overflow-hidden">
              <motion.div
                className="bg-white flex flex-col h-full cursor-pointer"
                whileHover={{
                  scale: 1.05,
                  rotateX: 5,
                  rotateY: -5,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                  transition: { type: 'spring', stiffness: 300, damping: 20 },
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <img src={seg.image} alt={seg.name} className="h-40 w-full object-cover" />
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-neutral-800">{seg.name}</h3>
                  <p className="mt-2 text-neutral-600 flex-1">{seg.desc}</p>
                  <motion.button
                    className="mt-4 text-[#12556b] font-medium self-start"
                    whileHover={{ scale: 1.1, color: '#11474f' }}
                    transition={{ duration: 0.3 }}
                  >
                    More →
                  </motion.button>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {isMobile && endIndex < segments.length && (
          <div className="text-center">
            <button
              onClick={() => setPage(prev => prev + 1)}
              className="px-6 py-3 border border-[#12556b] text-[#12556b] rounded-lg"
            >
              See More
            </button>
          </div>
        )}

        {!isMobile && (
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.button
              className="px-8 py-3 border border-white text-white rounded-full"
              whileHover={{ backgroundColor: '#12556b', color: '#f0f0f0', scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              View More
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Offers;
