import React, { useState, useEffect } from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  // Typing effect states for heading only
  const beforeSpan = "BI Solutions";
  const afterSpan = " for Your Business";

  const [typedBefore, setTypedBefore] = useState("");
  const [typedAfter, setTypedAfter] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const fullText = `At BI Solutions, we don’t just develop software we build the future. our company is a powerhouse of innovation, offering cutting-edge solutions across the tech industry. From startups to large enterprises, we help businesses bring ideas to life with custom-built websites, mobile apps, VR games, immersive virtual tours, and much more. With a fully assembled team of industry experts, we’ve successfully delivered numerous projects, setting new standards in design, development, and technology integration. Whether you need a brand-new digital solution or improvements to an existing project, BI Solutions is your ultimate tech partner.`;

  // Determine truncated text
  const truncated = fullText.length > 200 ? fullText.slice(0, 200) + '...' : fullText;

  useEffect(() => {
    const timeouts = [];

    const typeText = (text, setter, speed, onComplete) => {
      text.split(""
      ).forEach((char, idx) => {
        const t = setTimeout(() => {
          setter(prev => prev + char);
          if (idx === text.length - 1 && onComplete) onComplete();
        }, speed * (idx + 1));
        timeouts.push(t);
      });
    };

    // Chain heading typing: beforeSpan → afterSpan
    typeText(beforeSpan, setTypedBefore, 100, () => {
      setTimeout(() => {
        typeText(afterSpan, setTypedAfter, 100);
      }, 300);
    });

    // Check mobile
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
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        {typedBefore}
        <span className="bg-[#12556b] text-transparent bg-clip-text">
          {typedAfter}
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        {isMobile && !expanded ? truncated : fullText}
        {isMobile && fullText.length > 200 && (
          <span
            onClick={() => setExpanded(!expanded)}
            className="text-[#12556b] cursor-pointer ml-1"
          >
            {expanded ? 'Show less' : 'Read more'}
          </span>
        )}
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-[#12556b] py-3 px-4 mx-3 rounded-md transform transition duration-300 ease-in-out hover:scale-105 hover:opacity-90 cursor-pointer"
        >
          Start for free
        </a>
        <a
          href="#"
          className="py-3 px-4 mx-3 rounded-md border transform transition duration-300 ease-in-out hover:scale-105 hover:opacity-90 cursor-pointer"
        >
          Documentation
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-[#12556b] shadow-sm shadow-[#12556b] mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-[#12556b] shadow-sm shadow-[#12556b] mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
