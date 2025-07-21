'use client';

import { useState } from "react";
import Halara from "./works/Halara";
import MediaNet from "./works/MediaNet";
import HMN from "./works/HMN";
import Somaiya from "./works/Somaiya";

const experiences = [
  { id: 'hmn', name: 'HMN', component: <HMN /> },
  { id: 'medianet', name: 'Media.net', component: <MediaNet /> },
  { id: 'halara', name: 'Halara', component: <Halara /> },
  { id: 'somaiya', name: 'Somaiya', component: <Somaiya /> },
];

const Experience = () => {
  const [activeExperience, setActiveExperience] = useState('hmn');

  return (
    <section id='experience' className="py-20 w-full">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>
      <div className="w-full mt-12 flex flex-col md:flex-row gap-10 md:gap-16">
        {/* --- Navigation List --- */}
        <ul className="flex flex-row overflow-x-auto w-full md:flex-col md:w-40">
          {experiences.map((exp) => (
            <li
              key={exp.id}
              onClick={() => setActiveExperience(exp.id)}
              className={`
                relative flex-shrink-0 text-center py-3 px-5
                text-sm font-medium cursor-pointer duration-300
                border-b-2 md:border-b-0 md:border-l-2 md:text-left
                whitespace-nowrap hover:bg-[#112240] hover:text-purple
                ${activeExperience === exp.id
                  ? 'text-purple border-purple' 
                  : 'text-white/70 border-transparent md:border-white/20' 
                }
              `}
            >
              {exp.name}
            </li>
          ))}
        </ul>

        {/* --- Content Display --- */}
        <div className="w-full">
          {/* Find the active component from the array and render it */}
          {experiences.find(exp => exp.id === activeExperience)?.component}
        </div>
      </div>
    </section>
  );
};

export default Experience;