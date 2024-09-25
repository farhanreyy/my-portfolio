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
  <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
    <h1 data-aos="fade-right" className="text-3xl md:text-4xl lg:text-[52px] font-semibold mb-8 leading-normal text-center lg:text-left">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-600">Farhan Reypialfarizi</span>,{' '}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-600">Front-end Developer</span>.
    </h1>
    <p data-aos="fade-left" data-aos-delay="200" className="text-base md:text-lg lg:text-xl text-center lg:text-left">
      Hi, Welcome to my web portfolio, where I will put all my work as a Front-end Developer.
    </p>
  </div>
);

const ProfileImage = () => (
  <img
    data-aos="fade-up"
    src={MukeGue}
    alt="Profile"
    className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-80 rounded-full object-cover mb-8 md:mb-0 transform transition-transform duration-300 hover:scale-105"
  />
);

const MainPage = () => {
  useAOS();

  return (
    <div
      className="lg:px-36 px-6 md:px-12 py-10 lg:py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-16 items-center"
      id="Home"
    >
      <HeroText />
      <ProfileImage />
    </div>
  );
};

export default MainPage;
