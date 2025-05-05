import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, MapPin, Phone, Mail } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const startupImages = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSivttn57Dxwzw1a9GcQLed3TJoKaAP7B9Htw&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSivttn57Dxwzw1a9GcQLed3TJoKaAP7B9Htw&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSivttn57Dxwzw1a9GcQLed3TJoKaAP7B9Htw&s',
];

const extras = [
  { title: 'Our Services', desc: 'Discover the full range of services we offer to accelerate your business growth.', link: '/services' },
  { title: 'Case Studies', desc: 'See real-world examples of how we transformed businesses across industries.', link: '/case-studies' },
  { title: 'Support', desc: 'We’re here for you 24/7—get dedicated support whenever you need it.', link: '/support' },
];

const Startup = () => {
  const [modal, setModal] = useState(null);

  return (
    <section className="py-16 bg-neutral-900">
      <div className="max-w-5xl mx-auto px-6 space-y-16">

        {/* Hero Slider & Contact Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-neutral-300">
          <div className="lg:col-span-2 space-y-4">
            <motion.h3
              className="text-2xl font-bold text-white"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Startup
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
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-xl font-semibold text-white">Get in Touch</h4>
            <div
              className="group flex items-center space-x-2 hover:text-white cursor-pointer text-neutral-300 transition"
              title="Click to copy address"
              onClick={() => navigator.clipboard.writeText('25 Ave Chavchavadze, Tbilisi, Georgia')}
            >
              <MapPin className="text-[#12556b] group-hover:text-white transition flex-shrink-0" />
              <span>25 Ave Chavchavadze, Tbilisi, Georgia</span>
            </div>
            <div
              className="group flex items-center space-x-2 hover:text-white cursor-pointer text-neutral-300 transition"
              title="Click to copy phone number"
              onClick={() => navigator.clipboard.writeText('+995 571 740 110')}
            >
              <Phone className="text-[#12556b] group-hover:text-white transition flex-shrink-0" />
              <span>+995 571 740 110</span>
            </div>
            <div
              className="group flex items-center space-x-2 hover:text-white cursor-pointer text-neutral-300 transition"
              title="Click to copy email"
              onClick={() => navigator.clipboard.writeText('bisolutionsbis@gmail.com')}
            >
              <Mail className="text-[#12556b] group-hover:text-white transition flex-shrink-0" />
              <span>bisolutionsbis@gmail.com</span>
            </div>
          </motion.div>
        </div>

        {/* Our Vision Combined */}
        <motion.div
          className="text-neutral-300 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h4 className="text-xl font-semibold text-white mb-2">Our Vision</h4>
          <p>
            We began as a tight-knit crew of visionaries dedicated to architecting solutions
            that reshape industries. Our vision is to ignite transformation through technology,
            empowering businesses to scale fearlessly and break barriers in an ever-evolving digital world.
            We began as a tight-knit crew of visionaries dedicated to architecting solutions
            that reshape industries. Our vision is to ignite transformation through technology,
            empowering businesses to scale fearlessly and break barriers in an ever-evolving digital world.
          </p>
        </motion.div>

        {/* Explore More 3D Coverflow Cards */}
        <div className="space-y-6">
          <h4 className="text-2xl font-semibold text-white text-center">Explore More</h4>
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
                    <h5 className="text-lg text-white font-semibold mb-2">{card.title}</h5>
                    <p className="text-neutral-400 text-sm mb-4">{card.desc}</p>
                  </div>
                  <a
                    href={card.link}
                    className="text-[#12556b] font-medium hover:underline"
                  >
                    See More →
                  </a>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Startup;
