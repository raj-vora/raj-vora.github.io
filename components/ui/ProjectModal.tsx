'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import { TiArrowForward } from 'react-icons/ti';

interface Project {
    id: number;
    title: string;
    des: string;
    img: string;
    iconLists: string[];
    link: string;
    longDes: string[];
}

interface ProjectModalProps {
    project: Project | null;
    onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
    return (
        <AnimatePresence>
            {project && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
                >
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 50, opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative bg-[#10132E] border border-white/[0.2] rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-8"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
                            aria-label="Close project details"
                        >
                            <FaTimes size={24} />
                        </button>

                        {/* Modal Content */}
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">{project.title}</h2>
                        <ul className='mt-5 mb-5 ml-2'>
                            {project.longDes.map((value, key) => {
                                return (
                                    <li className="text-base flex gap-2 text-textDark mt-2" key={key}>
                                        <span className="text-purple mt-1"><TiArrowForward /></span>
                                        <span>{value}</span>
                                    </li>
                                );
                            })}
                        </ul>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                {project.iconLists.map((icon, index) => (
                                    <div key={index} className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center" style={{ transform: `translateX(-${5 * index * 2}px)` }}>
                                        <img src={icon} alt={`icon-${index}`} className="p-2" />
                                    </div>
                                ))}
                            </div>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-purple hover:text-white transition-colors font-semibold">
                                Check Live Site <FaExternalLinkAlt />
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;