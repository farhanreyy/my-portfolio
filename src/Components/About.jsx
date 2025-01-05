import React from 'react';
import AboutImage from '../assets/about.png';

const SectionTitle = ({ title }) => {
  return (
    <h2
      data-aos="fade-down"
      className="text-center text-3xl md:text-4xl lg:text-5xl font-semibold mb-10 md:mb-16 lg:mb-20 leading-normal uppercase bg-gradient-to-r text-transparent bg-clip-text from-white to bg-purple-600"
    >
      {title}
    </h2>
  );
};

const ProfileImage = ({ imageSrc }) => {
  return <img data-aos="fade-right" src={imageSrc} alt="About" className="w-64 h-64 md:w-72 md:h-80 rounded-full object-cover mb-8 md:mb-0" />;
};

const AboutText = () => {
  return (
    <p data-aos="fade-left" className="text-base md:text-lg mb-8 text-justify">
      I’m passionate about building responsive front-end while exploring the world of Machine Learning and Network. My work combines creativity and
      functionality to create impactful web experiences, leveraging the power of data and modern technologies. Explore my projects and see how I bring
      ideas to life through code. Please explore my portfolio, and hopefully it will inspire you!
    </p>
  );
};

const ResumeButton = () => {
  return (
    <a
      href="https://drive.google.com/file/d/1d3aOMVz4I81ze0OlZlU6JRbtU2MzDADs/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      className="uppercase relative overflow-hidden rounded-lg px-10 py-4 shadow-xl hover:shadow-purple-600/50 hover:bg-purple-600 
                 border-2 border-purple-600 text-white inline-block transform transition-transform duration-300 hover:scale-105 cursor-pointer"
    >
      Resume
    </a>
  );
};

const About = () => {
  return (
    <div className="text-white min-h-screen flex items-center justify-center" id="About">
      <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 flex flex-col justify-center">
        <SectionTitle title="About Me" />
        <div className="flex flex-col md:flex-row items-center md:space-x-12 w-full">
          <ProfileImage imageSrc={AboutImage} />
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            <AboutText />
            <div className="w-full flex justify-center md:justify-start">
              <ResumeButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
