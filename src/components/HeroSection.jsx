import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  const navigate = useNavigate();
  const beforeSpan = "BI Solutions";
  const afterSpan = " for Your Business";

  const [typedBefore, setTypedBefore] = useState("");
  const [typedAfter, setTypedAfter] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const fullText = `At BI Solutions, we don’t just develop software we build the future. our company is a powerhouse of innovation, offering cutting-edge solutions across the tech industry. From startups to large enterprises, we help businesses bring ideas to life with custom-built websites, mobile apps, VR games, immersive virtual tours, and much more. With a fully assembled team of industry experts, we’ve successfully delivered numerous projects, setting new standards in design, development, and technology integration. Whether you need a brand-new digital solution or improvements to an existing project, BI Solutions is your ultimate tech partner.`;
  const truncated = fullText.length > 200 ? fullText.slice(0, 200) + '...' : fullText;

  const controls = useAnimation();
  useEffect(() => {
    const timeouts = [];
    const typeText = (text, setter, speed, onComplete) => {
      text.split("").forEach((char, idx) => {
        const t = setTimeout(() => {
          setter(prev => prev + char);
          if (idx === text.length - 1 && onComplete) onComplete();
        }, speed * (idx + 1));
        timeouts.push(t);
      });
    };
    typeText(beforeSpan, setTypedBefore, 80, () => {
      setTimeout(() => typeText(afterSpan, setTypedAfter, 80), 300);
    });
    controls.start(i => ({ opacity: 1, y: 0, transition: { delay: i * 0.3 } }));

    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      timeouts.forEach(t => clearTimeout(t));
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col items-center mt-6">
      <motion.h1
        className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide"
        initial={{ opacity: 0, y: -20 }}
        animate={controls}
        custom={0}
      >
        {typedBefore}
        <span className="bg-[#12556b] text-transparent bg-clip-text">{typedAfter}</span>
      </motion.h1>

      <motion.p
        className="mt-10 text-lg text-center text-neutral-500 max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        custom={1}
      >
        {isMobile && !expanded ? truncated : fullText}
        {isMobile && fullText.length > 200 && (
          <span onClick={() => setExpanded(!expanded)} className="text-[#12556b] cursor-pointer ml-1 inline-block">
            {expanded ? 'Show less' : 'Read more'}
          </span>
        )}
      </motion.p>

      <motion.div
        className="flex flex-wrap sm:flex-nowrap justify-center gap-4 my-10"
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        custom={2}
      >
        <motion.a
          href="#"
          onClick={e => { e.preventDefault(); navigate('/startup'); }}
          className="bg-[#12556b] py-3 px-4 rounded-md transform transition duration-300 ease-in-out hover:scale-105 hover:opacity-90 cursor-pointer text-white"
        >
          Our Startup
        </motion.a>
        <motion.a
          href="#"
          onClick={e => { e.preventDefault(); navigate('/portfolio'); }}
          className="border border-neutral-700 py-3 px-4 rounded-md transform transition duration-300 ease-in-out hover:scale-105 hover:opacity-90 cursor-pointer text-white"
        >
          Check Our Projects
        </motion.a>
      </motion.div>

      {isMobile ? (
        <div className="w-full max-w-md">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop
            slidesPerView={1}
            className="rounded-lg overflow-hidden"
          >
            {[video1, video2].map((src, i) => (
              <SwiperSlide key={i}>
                <motion.video
                  src={src}
                  autoPlay
                  loop
                  muted
                  className="w-full object-cover rounded-lg border border-[#12556b]"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.3 }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <div className="flex mt-10 justify-center space-x-4">
          {[video1, video2].map((src, i) => (
            <motion.video
              key={i}
              src={src}
              autoPlay
              loop
              muted
              className="rounded-lg w-1/2 border border-[#12556b] shadow-sm shadow-[#12556b] mx-2 my-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.3 }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HeroSection;
