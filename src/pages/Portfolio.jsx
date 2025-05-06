import React, { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import xs        from "../assets/port1.PNG";
import sp        from "../assets/port2.PNG";
import ammo      from "../assets/port3.PNG";
import solar     from "../assets/port4.PNG";
import guda      from "../assets/port5.PNG";
import translate from "../assets/port6.PNG";

const projects = [
  {
    id: 1,
    title: "XS TOYS",
    image: xs,
    description:
      "XS Igrače is a Slovenian toy retailer running a full-featured e-commerce site with automated delivery tracking, an AI-powered admin panel, and Photoshop integration. Payments support Slovenian bank transfers, Google Pay, and PayPal.",
    liveLink: "https://xsigrace.si/en",
    repoLink: "https://github.com/BachanaKuchava/project-one",
  },
  {
    id: 2,
    title: "Space News",
    image: sp,
    description:
      "SP News is a Georgian news portal featuring a robust blog system and live radio streaming, backed by a modern admin interface for seamless content management.",
    liveLink: "https://spnews.io/ge",
    repoLink: "https://github.com/BachanaKuchava/project-two",
  },
  {
    id: 3,
    title: "AMMO Exchange",
    image: ammo,
    description:
      "U.S. Ammo Exchange revolutionizes ammunition trading by connecting top suppliers directly with buyers—no middlemen, full compliance, and secure holding & trading capabilities.",
    liveLink: "https://ammoexchange.com/",
    repoLink: "https://github.com/BachanaKuchava/project-one",
  },
  {
    id: 4,
    title: "Guda Books",
    image: guda,
    description:
      "Gudabooks.ge offers over 200 audiobooks and 1,000 e-books across genres like literature and biographies, accessible via the “Guda” app on Android and iOS.",
    liveLink: "https://gudabooks.ge/",
    repoLink: "https://github.com/BachanaKuchava/project-one",
  },
  {
    id: 5,
    title: "Solar Valley",
    image: solar,
    description:
      "Solar Valley designs, installs, and maintains solar energy systems—photovoltaic panels, inverters, and storage—for residential and commercial clients in Georgia.",
    liveLink: "https://solarvalley.ge/ka/",
    repoLink: "https://github.com/BachanaKuchava/project-two",
  },
  {
    id: 6,
    title: "Translate.ge",
    image: translate,
    description:
      "Translate.ge is a modern, user-friendly translation app that breaks language barriers and facilitates clear communication across multiple languages.",
    liveLink: "https://translate.ge/",
    repoLink: "https://github.com/BachanaKuchava/project-two",
  },
];

const Portfolio = () => {
  const [modalProject, setModalProject] = useState(null);

  return (
    <section className="py-16 bg-neutral-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center text-white mb-12">
          Our Portfolio
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => {
            const hostname = new URL(proj.liveLink).hostname;
            return (
              <div key={proj.id} className="w-full">
                <motion.div
                  onClick={() => setModalProject(proj)}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, type: "spring", stiffness: 200, damping: 15 }}
                  whileHover={{
                    scale: 1.07,
                    rotate: idx % 2 === 0 ? 3 : -3,
                    transition: { duration: 0.15 },
                  }}
                  className="relative cursor-pointer overflow-hidden rounded-xl shadow-lg"
                >
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-56 object-cover transform transition duration-300 ease-in-out hover:scale-105"
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1, transition: { duration: 0.15 } }}
                    className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 opacity-0 transition-opacity duration-200"
                  >
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {proj.title}
                    </h3>
                    <p className="text-neutral-300 text-sm">
                      {proj.description.slice(0, 60)}...
                    </p>
                  </motion.div>
                </motion.div>
                <p
                  onClick={() => setModalProject(proj)}
                  className="mt-2 text-sm text-neutral-400 text-center cursor-pointer transform transition duration-150 hover:text-white hover:scale-105"
                >
                  {hostname}
                </p>
              </div>
            );
          })}
        </div>

        {/* Modal Detail */}
        {modalProject && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center p-4 z-50">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, transition: { duration: 0.2 } }}
              className="bg-neutral-800 rounded-2xl max-w-lg w-full p-6 relative"
            >
              <button
                onClick={() => setModalProject(null)}
                className="absolute top-4 right-4 text-neutral-400 hover:text-white transition duration-150"
              >
                <X size={24} />
              </button>
              <h3 className="text-2xl font-semibold text-white mb-4">
                {modalProject.title}
              </h3>
              <img
                src={modalProject.image}
                alt={modalProject.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <p className="text-neutral-300 mb-6">{modalProject.description}</p>
              <div className="flex space-x-4">
                <a
                  href={modalProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#12556b] text-white px-4 py-2 rounded-md transition duration-150 hover:scale-105 hover:opacity-90"
                >
                  Visit
                </a>
                {/* <a
                  href={modalProject.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#12556b] text-[#12556b] px-4 py-2 rounded-md transition duration-150 hover:scale-105 hover:opacity-90"
                >
                  View Repo
                </a> */}
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
