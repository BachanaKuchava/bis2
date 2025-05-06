// src/pages/Startup.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Phone, Mail } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

// Import your images so bundler includes them
import vr1 from '../assets/vr1.jpg';
import vr2 from '../assets/vr2.jpg';
import vr3 from '../assets/vr3.jpg';
import vr4 from '../assets/vr4.jpg';
import vr5 from '../assets/vr5.jpg';

const startupImages = [vr1, vr2, vr3, vr4, vr5];

// Public files for download
const investorFiles = [
  { name: 'Investment Proposal', path: '/Investment Proposal - VR MALL (1).pdf' },
  { name: 'Business Plan', path: '/VR MALL - BUSINESS PLAN (1).docx' },
  { name: 'Investment Pitch Deck', path: '/VR MALL - Investment Pitch Deck (1).pptx' },
  { name: 'Start-Up Valuation', path: '/VR MALL - Start-Up Valuation updated (1).xlsx' },
];

// Explore More sections
const extras = [
  {
    key: 'benefits',
    title: 'Benefits',
    shortDesc:
      'Shop from anywhere in the world—see furniture, tech, and more in your space via AR.',
    fullDesc:
      'With VR Mall’s AR integration, you can browse global catalogs—furniture, electronics, fashion—and place 3D previews in your home instantly. No guesswork, just seamless “try before you buy.” This immersive shopping cuts returns by up to 40% and boosts customer confidence.',
  },
  {
    key: 'market',
    title: 'Market',
    shortDesc:
      'VR headset adoption is skyrocketing—especially in Asia after mass launches in China.',
    fullDesc:
      'Over the last two years, VR headset sales have tripled in Asia, led by affordable, locally produced models. China alone sold 15 million units last quarter. VR Mall taps into this boom, positioning you at the forefront of a new global retail frontier.',
  },
  {
    key: 'technologies',
    title: 'Technologies',
    shortDesc:
      'Cutting-edge engines, AI-driven recommendations, and real-time analytics power your store.',
    fullDesc:
      'Our platform uses Unreal Engine for photorealistic environments, AI to personalize product suggestions, and live analytics dashboards for visitor tracking. Seamless API integrations with Shopify, SAP, and major payment gateways mean plug-and-play deployment.',
  },
];

const Startup = () => {
  const [visionOpen, setVisionOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeExtra, setActiveExtra] = useState(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const fullVision =
    'We envision a future where every consumer experiences commerce in fully immersive 3D environments, exploring and interacting with products as if they were right in front of them. Powered by AI-driven recommendations and social shopping features, VR Mall will bridge global markets—empowering retailers of every size with virtual storefronts, real-time analytics, and unparalleled reach. Through our subscription-and-advertising model, we aim to redefine e-commerce, setting a new standard for engagement, personalization, and growth worldwide.';
  const truncatedVision = fullVision.slice(0, 100) + '...';

  return (
    <section className="py-16 bg-neutral-900">
      <div className="max-w-5xl mx-auto px-6 space-y-16">

        {/* Hero Slider & Contact Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-neutral-300">
          <div className="lg:col-span-2 space-y-4">
            <motion.h3
              className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 via-purple-500"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              VR MALL
            </motion.h3>
            <Swiper
              modules={[Autoplay, Pagination]}
              pagination={{ clickable: true, dynamicBullets: true }}
              autoplay={{ delay: 6000, disableOnInteraction: false }}
              loop
              slidesPerView={1}
              className="rounded-xl overflow-hidden"
            >
              {startupImages.map((src, idx) => (
                <SwiperSlide key={idx}>
                  <motion.img
                    src={src}
                    alt={`Slide ${idx + 1}`}
                    className="w-full h-64 object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: idx * 0.2 }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Get in Touch - hidden on mobile */}
          <div className="hidden sm:block space-y-4">
            <motion.h4
              className="text-xl font-semibold text-white"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              Get in Touch
            </motion.h4>
            <div
              className="group flex items-center space-x-2 hover:text-white cursor-pointer text-neutral-300"
              onClick={() =>
                navigator.clipboard.writeText(
                  'Tbilisi, Davit Gamrekeli STR.10'
                )
              }
            >
              <MapPin className="text-[#12556b] group-hover:text-white" />
              <span>Tbilisi, Davit Gamrekeli STR.10</span>
            </div>
            <div
              className="group flex items-center space-x-2 hover:text-white cursor-pointer text-neutral-300"
              onClick={() => navigator.clipboard.writeText('+995 571 740 110')}
            >
              <Phone className="text-[#12556b] group-hover:text-white" />
              <span>+995 571 740 110</span>
            </div>
            <div
              className="group flex items-center space-x-2 hover:text-white cursor-pointer text-neutral-300"
              onClick={() =>
                navigator.clipboard.writeText('bisolutionsbis@gmail.com')
              }
            >
              <Mail className="text-[#12556b] group-hover:text-white" />
              <span>bisolutionsbis@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Our Vision Combined */}
        <motion.div
          className="text-neutral-300 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h4 className="text-xl font-semibold text-white mb-2">Our Vision</h4>
          <p className="hidden sm:block">{fullVision}</p>
          <p className="sm:hidden">
            {visionOpen ? fullVision : truncatedVision}
          </p>
          {isMobile && !visionOpen && (
            <button
              onClick={() => setVisionOpen(true)}
              className="text-[#12556b] underline mt-2"
            >
              Read more
            </button>
          )}
        </motion.div>

        {/* Vision Modal */}
        <AnimatePresence>
          {visionOpen && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-neutral-800 rounded-lg p-6 max-w-lg w-full relative"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <button
                  className="absolute top-4 right-4 text-neutral-400 hover:text-white"
                  onClick={() => setVisionOpen(false)}
                >
                  <X size={24} />
                </button>
                <h4 className="text-2xl font-semibold text-white mb-4">
                  Our Vision
                </h4>
                <p className="text-neutral-300">{fullVision}</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Investor Documents */}
        <div className="space-y-6">
          <h4 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 via-purple-500 text-center">
            Investor Documents
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {investorFiles.map((file, idx) => (
              <a
                key={idx}
                href={file.path}
                download
                className="p-4 bg-neutral-800 rounded-lg cursor-pointer transform transition hover:scale-105 hover:bg-[#12556b]/20"
              >
                <div className="text-white font-medium mb-2 text-center">
                  {file.name}
                </div>
                <div className="text-neutral-400 text-sm text-center">
                  Click to download
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Explore More 3D Coverflow Cards */}
        <div className="space-y-6">
          <h4 className="text-2xl font-semibold text-white text-center">
            Explore More
          </h4>
          <Swiper
            modules={[EffectCoverflow, Pagination, Autoplay]}
            effect="coverflow"
            grabCursor
            centeredSlides
            slidesPerView="auto"
            coverflowEffect={{ rotate: 30, stretch: 0, depth: 150, modifier: 1.5 }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            className="py-10"
          >
            {extras.map((card, idx) => (
              <SwiperSlide key={idx} className="w-64">
                <motion.div
                  className="bg-neutral-800 rounded-xl p-6 text-center h-full flex flex-col justify-between"
                  whileHover={{ scale: 1.05 }}
                >
                  <div>
                    <h5 className="text-lg text-white font-semibold mb-2">
                      {card.title}
                    </h5>
                    <p className="text-neutral-400 text-sm mb-4">
                      {card.shortDesc}
                    </p>
                  </div>
                  <button
                    onClick={() => setActiveExtra(card.key)}
                    className="text-[#12556b] font-medium hover:underline"
                  >
                    See More →
                  </button>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Extras Popup */}
        <AnimatePresence>
          {activeExtra && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-neutral-800 rounded-lg p-6 max-w-md w-full relative"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <button
                  className="absolute top-4 right-4 text-neutral-400 hover:text-white"
                  onClick={() => setActiveExtra(null)}
                >
                  <X size={24} />
                </button>
                {extras
                  .filter(e => e.key === activeExtra)
                  .map(e => (
                    <div key={e.key}>
                      <h4 className="text-2xl font-semibold text-white mb-4">
                        {e.title}
                      </h4>
                      <p className="text-neutral-300">{e.fullDesc}</p>
                    </div>
                  ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Startup;
