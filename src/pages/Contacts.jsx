import React, { useState } from 'react';
import { MapPin, Phone, Mail, Linkedin, Facebook } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [files, setFiles] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: implement form submission (e.g. API call or email service)
    console.log({ ...formData, files });
  };

  return (
    <div className="mt-10 max-w-5xl mx-auto flex flex-col lg:flex-row gap-10">
      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="flex-1 bg-neutral-800/backdrop-blur p-6 rounded-2xl border border-[#12556b] space-y-6">
        <h2 className="text-3xl text-center text-white mb-4">Send Us a Message</h2>

        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-[#12556b] rounded-lg bg-transparent text-white placeholder-neutral-500 focus:outline-none focus:border-[#12556b]"
            placeholder="Your Name"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-[#12556b] rounded-lg bg-transparent text-white placeholder-neutral-500 focus:outline-none focus:border-[#12556b]"
            placeholder="you@example.com"
          />
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-neutral-300 mb-2">Subject</label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-[#12556b] rounded-lg bg-transparent text-white placeholder-neutral-500 focus:outline-none focus:border-[#12556b]"
            placeholder="Subject"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-[#12556b] rounded-lg bg-transparent text-white placeholder-neutral-500 focus:outline-none focus:border-[#12556b]"
            placeholder="Your message..."
          />
        </div>

        {/* File Upload */}
        <div>
          <label htmlFor="file" className="block text-sm font-medium text-neutral-300 mb-2">Attach Files</label>
          <input
            id="file"
            name="file"
            type="file"
            multiple
            onChange={handleFileChange}
            className="w-full text-neutral-300"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-[#12556b] text-white rounded-lg transform transition duration-300 hover:scale-105 hover:opacity-90"
        >
          Send Message
        </button>
      </form>

      {/* Sidebar Contact Details - hidden on mobile */}
      <div className="hidden sm:block w-full lg:w-1/3 flex-shrink-0 bg-neutral-800/backdrop-blur p-6 rounded-2xl border border-[#12556b] space-y-6">
        <h3 className="text-2xl font-semibold text-white mb-4">Contact Info</h3>
        <div className="flex items-center space-x-2 text-neutral-300 hover:text-white transition cursor-pointer">
          <MapPin className="text-[#12556b] flex-shrink-0" />
          <span>Tbilisi, Davit Gamrekeli STR.10</span>
        </div>
        <div className="flex items-center space-x-2 text-neutral-300 hover:text-white transition cursor-pointer">
          <Phone className="text-[#12556b] flex-shrink-0" />
          <span>+995 571 740 110</span>
        </div>
        <div className="flex items-center space-x-2 text-neutral-300 hover:text-white transition cursor-pointer">
          <Mail className="text-[#12556b] flex-shrink-0" />
          <span>bisolutionsbis@gmail.com</span>
        </div>
        <div className="flex space-x-6 mt-4">
          <a href="https://facebook.com/YourPage" target="_blank" rel="noopener noreferrer" className="group hover:text-white transition transform hover:scale-110" title="Facebook">
            <Facebook className="text-[#12556b] group-hover:text-white transition" />
          </a>
          <a href="https://linkedin.com/company/YourCompany" target="_blank" rel="noopener noreferrer" className="group hover:text-white transition transform hover:scale-110" title="LinkedIn">
            <Linkedin className="text-[#12556b] group-hover:text-white transition" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

