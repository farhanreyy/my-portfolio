import React, { useEffect } from 'react';
import MukeGue from '../assets/muke-gue.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const useAOS = () => {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-quart',
      delay: 0,
      duration: 750,
    });
  }, []);
};

const HeroText = () => (
  <div className="flex flex-col justify-center items-center text-white text-center lg:text-center">
    <h1 data-aos="fade-right" className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 lg:mb-8 leading-normal">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-600">Farhan Reypialfarizi</span>,{' '}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-600">Front-end & Machine Learning Enthusiast</span>.
    </h1>
    <p data-aos="fade-left" data-aos-delay="200" className="text-base md:text-lg">
      Hi, Welcome to my web portfolio. Here, you can find my work and projects that I have developed.
    </p>
  </div>
);

const ProfileImage = () => (
  <img
    data-aos="fade-up"
    src={MukeGue}
    alt="Profile"
    className="w-64 h-64 lg:w-72 lg:h-80 rounded-full object-cover mb-8 lg:mb-10 transform transition-transform duration-300 hover:scale-105"
  />
);

const MainPage = () => {
  useAOS();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen lg:gap-10 gap-5 py-10 lg:py-0" id="Home">
      <ProfileImage />
      <HeroText />
    </div>
  );
};

export default MainPage;
