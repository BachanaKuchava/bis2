import { Globe } from "lucide-react";
import { TabletSmartphone } from "lucide-react";
import { Cpu  } from "lucide-react";
import { Gamepad2 } from "lucide-react";
import { PlugZap } from "lucide-react";
import { Fingerprint } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <Globe />,
    text: "Web Development",
    description:
      "We craft high-performance, scalable, and visually stunning websites tailored to your business needs. From e-commerce platforms to corporate websites, we ensure your online presence stands out.",
  },
  {
    icon: <TabletSmartphone />,
    text: "Mobile App Development",
    description:
      "Turn your ideas into powerful mobile applications. We develop user-friendly, iOS and Android apps that deliver seamless experiences and high performance.",
  },
  {
    icon: <Gamepad2 />,
    text: "VR & AR Solutions",
    description:
      "Step into the future of digital interaction with our VR games, virtual tours, and AR experiences. We create immersive environments for entertainment, education, and business applications.",
  },
  {
    icon: <Cpu  />,
    text: "Tech Solutions & Integrations",
    description:
      "Need a custom system, automation, or API integration? We provide tailor-made tech solutions, helping businesses optimize their workflow and enhance efficiency.",
  },
  {
    icon: <PlugZap />,
    text: "Startup & Product Development",
    description:
      "Have a brilliant startup idea but don’t know where to start? We provide end-to-end development, strategy, and tech support to turn your concept into a fully functional product.",
  },
  {
    icon: <Fingerprint />,
    text: "IT Consulting & Support",
    description:
      "Our tech experts analyze, advise, and optimize your digital infrastructure, ensuring your business stays ahead of the competition. We also offer ongoing maintenance and support for existing projects.",
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Basic",
    price: "$1 500",
    features: [
      "5-Page Custom Website",
      "Mobile Responsive Design",
      "SEO Optimized Structure",
      "Google Maps Integration",
      "Contact Form",
      "Social Media Integration",
      "Support & Assistance",
    ],
  },
  {
    title: "Premium",
    price: "$10 000",
    features: [
      "Fully Custom Web or SaaS Solution",
      "(API, CRM, ERP Integrations)",
      "Multi-Language Support",
      "AI Chatbot / Automation ",
      "Enterprise-Level Security",
      "Dedicated DevOps ",
      "Support & Assistance",
    ],
  },
  {
    title: "Business",
    price: "$4 000",
    features: [
      "20-Page Custom Website",
      "UI/UX Design",
      "Advanced SEO",
      "Blog + Admin Dashboard",
      "E-commerce Integration",
      "Google Analytics",
      "Support & Assistance",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
