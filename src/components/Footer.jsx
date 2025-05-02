import React from "react";
import { MapPin, Phone, Mail, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <footer className="mt-20 border-t border-neutral-700 bg-transparent py-10">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 px-4">
        {/* Contact block */}
        <div className="flex flex-col space-y-4 text-neutral-300">
          <button
            onClick={() => handleCopy("Random City")}
            className="group flex items-center space-x-2 transition hover:text-white cursor-pointer text-left"
            title="Click to copy address"
          >
            <MapPin className="text-[#12556b] group-hover:text-white flex-shrink-0 transition" />
            <span>Random City</span>
          </button>
          <button
            onClick={() => handleCopy("+995 571 740 110")}
            className="group flex items-center space-x-2 transition hover:text-white cursor-pointer text-left"
            title="Click to copy phone number"
          >
            <Phone className="text-[#12556b] group-hover:text-white flex-shrink-0 transition" />
            <span>+995 571 740 110</span>
          </button>
          <button
            onClick={() => handleCopy("bisolutionsbis@gmail.com")}
            className="group flex items-center space-x-2 transition hover:text-white cursor-pointer text-left"
            title="Click to copy email"
          >
            <Mail className="text-[#12556b] group-hover:text-white flex-shrink-0 transition" />
            <span>bisolutionsbis@gmail.com</span>
          </button>
          <div className="flex space-x-6 mt-4">
            <a
              href="https://facebook.com/YourPage"
              target="_blank"
              rel="noopener noreferrer"
              className="group hover:text-white transition transform hover:scale-110"
              title="Facebook"
            >
              <Facebook className="text-[#12556b] group-hover:text-white transition" />
            </a>
            <a
              href="https://linkedin.com/company/YourCompany"
              target="_blank"
              rel="noopener noreferrer"
              className="group hover:text-white transition transform hover:scale-110"
              title="LinkedIn"
            >
              <Linkedin className="text-[#12556b] group-hover:text-white transition" />
            </a>
          </div>
        </div>

        {/* Map embed */}
        <div className="w-full lg:w-1/2 h-64">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d190677.96385808965!2d44.8271!3d41.7151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sge!4v1610000000000"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            className="rounded-md border border-neutral-700"
          ></iframe>
        </div>
      </div>
      <div className="text-center mt-8 text-sm text-neutral-400">
        © {new Date().getFullYear()} BI Solutions. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
