import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] text-center">
          Ready to take <span className="text-purple">your team</span> to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          I’m currently open to full-time roles where I can contribute to building innovative products and growing with a talented team.
        </p>
        <a href="mailto:rajvora1998@gmail.com">
          <MagicButton
            title="Let’s connect"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            ><Link href={info.link} target="_blank">
              <img src={info.img} alt="icons" width={20} height={20} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
