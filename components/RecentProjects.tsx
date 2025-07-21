'use client';

import { useState } from 'react';
import { projects } from '@/data';
import ProjectModal from './ui/ProjectModal';
import ProjectCarousel from './ui/ProjectCarousel';
import { AnimatePresence, motion } from 'framer-motion';
import { FaLocationArrow } from 'react-icons/fa6';

const RecentProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const activeProject = projects[activeIndex];

  const handleOpenModal = (project: any) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="py-20 flex flex-col items-center" id="projects">
      <h1 className="heading">
        A small selection of{' '}
        <span className="text-purple">recent projects</span>
      </h1>


      <div className="relative w-full max-w-screen-lg mx-auto">
        <ProjectCarousel
          onSlideChange={setActiveIndex}
          onCardClick={handleOpenModal}
        />

        <div className="mt-8 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2
                className="font-bold text-2xl md:text-3xl cursor-pointer"
                onClick={() => handleOpenModal(activeProject)}
              >
                {activeProject.title}
              </h2>
              <p className="text-lg font-light text-[#BEC1DD] my-4 max-w-md mx-auto">
                {activeProject.des}
              </p>
              <div className="flex items-center justify-center">
                <p className="flex md:text-lg text-sm text-purple">Check Live Site</p>
                <FaLocationArrow className="ms-3" color="#CBACF9" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={handleCloseModal} />
    </div>
  );
};

export default RecentProjects;