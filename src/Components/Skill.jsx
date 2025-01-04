import React from 'react';
import { FaHtml5, FaCss3, FaPython } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { RiReactjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { SiTensorflow, SiKeras, SiPytorch } from 'react-icons/si';

const SkillItem = ({ icon: Icon, label, aosAnimation }) => (
  <div
    data-aos={aosAnimation}
    className="flex flex-col items-center justify-center font-semibold 
                    rounded-full h-36 w-36 sm:h-44 sm:w-44 border-2 border-purple-600"
  >
    <Icon className="text-4xl sm:text-5xl mb-2 text-white" />
    <span className="text-sm sm:text-base text-white mt-2">{label}</span>
  </div>
);

const Skill = () => {
  const skills = [
    { icon: FaHtml5, label: 'HTML5', animation: 'fade-right' },
    { icon: FaCss3, label: 'CSS3', animation: 'fade-down' },
    { icon: SiJavascript, label: 'JavaScript', animation: 'fade-left' },
    { icon: FaPython, label: 'Python', animation: 'fade-right' },
    { icon: RiReactjsFill, label: 'ReactJS', animation: 'fade-up' },
    { icon: RiTailwindCssFill, label: 'Tailwind CSS', animation: 'fade-left' },
    { icon: SiTensorflow, label: 'TensorFlow', animation: 'fade-right' },
    { icon: SiKeras, label: 'Keras', animation: 'fade-down' },
    { icon: SiPytorch, label: 'PyTorch', animation: 'fade-left' },
  ];

  return (
    <div className="px-6 py-16 sm:p-20 flex flex-col items-center justify-center" id="Skills">
      <h1
        data-aos="fade-down"
        className="text-center text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 md:mb-12 lg:mb-16 leading-normal uppercase bg-gradient-to-r text-transparent bg-clip-text from-white to bg-purple-600"
      >
        Skills
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-14 lg:gap-20 justify-items-center">
        {skills.map((skill, index) => (
          <SkillItem key={index} icon={skill.icon} label={skill.label} aosAnimation={skill.animation} />
        ))}
      </div>
    </div>
  );
};

export default Skill;
