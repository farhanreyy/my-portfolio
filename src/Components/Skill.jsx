import React from 'react';
import { FaHtml5, FaCss3, FaPython } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { RiReactjsFill } from 'react-icons/ri';

const SkillItem = ({ icon: Icon, label, aosAnimation }) => (
  <div
    data-aos={aosAnimation}
    className="flex flex-col items-center justify-center font-semibold text-transparent bg-clip-text from-white to bg-purple-600 rounded-3xl h-44 w-44 border-2 border-purple-600"
  >
    <Icon className="text-5xl mb-2 text-white" />
    <span className="text-white mt-2">{label}</span>
  </div>
);

const Skill = () => {
  const skills = [
    { icon: FaHtml5, label: 'HTML5', animation: 'fade-right' },
    { icon: FaCss3, label: 'CSS3', animation: 'fade-down' },
    { icon: SiJavascript, label: 'JavaScript', animation: 'fade-left' },
    { icon: FaPython, label: 'Python', animation: 'fade-right' },
    { icon: RiReactjsFill, label: 'React', animation: 'fade-up' },
  ];

  return (
    <div className="p-20 flex flex-col items-center justify-center" id="Skills">
      <h1
        data-aos="fade-down"
        className="text-center text-3xl md:text-4xl lg:text-5xl font-semibold mb-10 md:mb-16 lg:mb-20 leading-normal uppercase bg-gradient-to-r text-transparent bg-clip-text from-white to bg-purple-600"
      >
        Skills
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center gap-20">
        {skills.map((skill, index) => (
          <SkillItem key={index} icon={skill.icon} label={skill.label} aosAnimation={skill.animation} />
        ))}
      </div>
    </div>
  );
};

export default Skill;
