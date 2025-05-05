// src/App.jsx
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Contact from "./pages/Contacts";
import Faq from "./pages/Faq";
import Offers from "./pages/Offers";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";
import Startup from "./pages/Startup";
import OfferInner from "./pages/OfferInner";

const pageVariants = {
  initial: { y: -50, opacity: 0 },
  in:      { y:   0, opacity: 1 },
  out:     { y:  50, opacity: 0 }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      {/* 'key' ensures AnimatePresence sees route changes */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <Home />
          </motion.div>
        }/>
        <Route path="/contacts" element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <Contact />
          </motion.div>
        }/>
        <Route path="/faq" element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <Faq />
          </motion.div>
        }/>
        <Route path="/portfolio" element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <Portfolio />
          </motion.div>
        }/>
          <Route path="/startup" element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <Startup />
          </motion.div>
        }/>
             <Route path="/offers" element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <Offers />
          </motion.div>
        }/>
                 <Route path="/offer" element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <OfferInner />
          </motion.div>
        }/>
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <AnimatedRoutes />
      </div>
      <Footer />
    </Router>
  );
}
