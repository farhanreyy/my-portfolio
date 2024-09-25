import React from 'react';

const TextExperience = ({ date, company, details }) => {
  return (
    <div className="md:flex gap-x-6 text-white font-bold text-lg md:text-lg lg:text-xl mb-6">
      <div className="flex font-normal md:w-1/4 md:justify-end mb-2 md:mb-0">{date}</div>
      <div className="md:w-3/4">
        <p className="mb-2 lg:mb-4 text-white font-semibold">{company}</p>
        <p className="font-normal text-sm md:text-base lg:text-lg text-justify leading-6 lg:leading-8">{details}</p>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <div className="p-10 md:p-20 flex flex-col items-center justify-center" id="Experience">
      <div className="container mx-auto px-4 md:px-16 lg:px-24">
        <h2
          data-aos="fade-down"
          className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-10 md:mb-20 leading-normal uppercase bg-gradient-to-r text-transparent bg-clip-text from-white to bg-purple-600"
        >
          Experience
        </h2>
        <div data-aos="fade-right" className="grid gap-y-10">
          <TextExperience
            date={'July 2023 - Aug 2023'}
            company={'Divisi Service Operation PT. Telkom Indonesia'}
            details={
              'I interned as a Development of an Open Source application called Internet Exchange Point Manager (IXP Manager). This application is used for customer monitoring and storing technical data, such as Switches, Switch Ports, Routers, Customer Data, and Multi Router Traffic Grapher (MRTG).'
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
