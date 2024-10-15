import React from 'react';
import Project1 from '../assets/project1.png';
import Project2 from '../assets/project2.png';
import Project3 from '../assets/coming.png';
import Project4 from '../assets/coming.png';

const projects = [
  { src: Project1, alt: 'Project 1', description: 'My Web Portfolio was built using React.js + Vite and Tailwind CSS' },
  { src: Project2, alt: 'Project 2', description: 'Admin Dashboard for online business using React.js + Vite and Tailwind CSS (Work in Progress) ' },
  { src: Project3, alt: 'Project 3', description: 'Coming Soon' },
  { src: Project4, alt: 'Project 4', description: 'Coming Soon' },
];

const Project = () => (
  <div className="p-6 md:p-10 lg:p-14 flex flex-col items-center" id="Projects">
    <h1
      data-aos="fade-down"
      className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 md:mb-12 lg:mb-16 leading-normal uppercase bg-gradient-to-r text-transparent bg-clip-text from-white to bg-purple-600"
    >
      Projects
    </h1>

    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
      {projects.map((project, index) => (
        <div key={index} className="flex flex-col items-center" data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}>
          <div className="flex justify-center rounded-3xl p-1 border-2 border-purple-600">
            <img
              className="w-[260px] h-[180px] sm:w-[350px] sm:h-[220px] md:w-[450px] md:h-[280px] lg:w-[550px] lg:h-[320px] rounded-3xl object-cover"
              src={project.src}
              alt={project.alt}
            />
          </div>
          <p className="mt-4 text-sm md:text-base lg:text-lg text-white text-center leading-6 lg:leading-8">{project.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Project;
