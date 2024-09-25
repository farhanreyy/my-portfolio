import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const socialLinks = [
  { href: 'https://www.instagram.com/farhanreyy', icon: <FaInstagram />, label: 'Instagram' },
  { href: 'https://www.linkedin.com/in/farhanrey/', icon: <FaLinkedin />, label: 'LinkedIn' },
  { href: 'https://github.com/farhanreyy', icon: <FaGithub />, label: 'GitHub' },
];

const Footer = () => (
  <footer className="bg-slate-900 opacity-90 py-10" id="Contact">
    <div className="max-w-screen-xl mx-auto flex flex-col items-center text-center text-white">
      <h2
        data-aos="fade-down"
        className="text-2xl font-semibold mb-4 leading-normal uppercase bg-gradient-to-r text-transparent bg-clip-text from-white to bg-purple-600"
      >
        Connect Me on Social Media
      </h2>

      <div className="flex space-x-6 mb-6">
        {socialLinks.map(({ href, icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl text-white hover:text-purple-600 transform transition-transform duration-300 hover:scale-110 hover:rotate-6 cursor-pointer"
            aria-label={label}
          >
            {icon}
          </a>
        ))}
      </div>

      <p className="text-lg mb-4">
        Call Us:{''}
        <a
          href="https://wa.me/62811743070"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-white hover:text-purple-600 transition-transform duration-300 hover:scale-105 cursor-pointer"
        >
          {''} +62 811-743-070
        </a>
      </p>

      <p className="text-sm">© 2024 Farhan Reypialfarizi</p>
    </div>
  </footer>
);

export default Footer;
