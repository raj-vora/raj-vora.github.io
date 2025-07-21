'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';
import { cn } from "@/lib/utils";
import { FaBars, FaTimes } from 'react-icons/fa';

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  // set true for the initial state so that nav bar is visible in the hero section
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        // also set true for the initial state
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (<>
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "hidden md:flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-5 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              'relative text-neutral-50 items-center flex space-x-1 hover:text-neutral-300'
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="text-sm !cursor-pointer">{navItem.name}</span>
          </Link>
        ))}
        <Link href="https://url.rajvora.tech/resume" target="_blank" rel="noopener noreferrer">
          <button className="border text-sm font-medium relative border-neutral-50 text-neutral-300 px-4 py-2 rounded-full bg-purple hover:text-white">
            <span>Resume</span>
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
          </button>
        </Link>
      </motion.div>
    </AnimatePresence>

    {/* --- Mobile Hamburger Button & Menu --- */}
    <div className="flex md:hidden fixed top-4 right-4 z-[5001]">
      <button
        onClick={() => setIsMenuOpen(true)}
        className="p-2 rounded-full bg-black-100/80 backdrop-blur-sm border border-white/[0.2]"
        aria-label="Open menu"
      >
        <FaBars className="h-6 w-6 text-white" />
      </button>
    </div>

    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[6000] bg-black/90 backdrop-blur-lg"
          onClick={() => setIsMenuOpen(false)}
        >
          <div className="flex flex-col items-center justify-center h-full text-center">
            {navItems.map((navItem, idx) => (
              <Link
                key={`mobile-link=${idx}`}
                href={navItem.link}
                onClick={() => setIsMenuOpen(false)}
                className="block text-2xl text-white py-4"
              >
                {navItem.name}
              </Link>
            ))}
            <Link href="https://url.rajvora.tech/resume" target="_blank" rel="noopener noreferrer" className="mt-4">
              <button className="border text-lg font-medium relative border-neutral-200 text-neutral-300 px-6 py-3 rounded-full bg-purple">
                <span>Resume</span>
              </button>
            </Link>
          </div>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 p-2"
            aria-label="Close menu"
          >
            <FaTimes className="h-8 w-8 text-white" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  </>
  );
};