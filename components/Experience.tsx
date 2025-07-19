import { useState } from "react";
import SectionTitle from "./SectionTitle";
import Apple from "./works/Halara";
import Google from "./works/MediaNet";
import ReactBD from "./works/HMN";
import Splash from "./works/Somaiya";

const Experience = () => {
  const [workNPL, setWorkNPL] = useState(true);
  const [workMediaNet, setWorkMediaNet] = useState(false);
  const [workHalara, setWorkHalara] = useState(false);
  const [workSomaiya, setWorkSomaiya] = useState(false);

  const handleReactbd = () => {
    setWorkNPL(true);
    setWorkMediaNet(false);
    setWorkHalara(false);
    setWorkSomaiya(false);
  };

  const handleGoogle = () => {
    setWorkNPL(false);
    setWorkMediaNet(true);
    setWorkHalara(false);
    setWorkSomaiya(false);
  };

  const handleApple = () => {
    setWorkNPL(false);
    setWorkMediaNet(false);
    setWorkHalara(true);
    setWorkSomaiya(false);
  };
  const handleSplash = () => {
    setWorkNPL(false);
    setWorkMediaNet(false);
    setWorkHalara(false);
    setWorkSomaiya(true);
  };
  const handleAmazon = () => {
    setWorkNPL(false);
    setWorkMediaNet(false);
    setWorkHalara(false);
    setWorkSomaiya(false);
  };
  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Where I have Worked" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={handleReactbd}
            className={`${
              workNPL
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            HMN
          </li>
          <li
            onClick={handleGoogle}
            className={`${
              workMediaNet
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Media.net
          </li>
          <li
            onClick={handleApple}
            className={`${
              workHalara
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Halara
          </li>
          <li
            onClick={handleSplash}
            className={`${
              workSomaiya
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Somaiya
          </li>
          
        </ul>
        {workNPL && <ReactBD />}
        {workMediaNet && <Google />}
        {workHalara && <Apple />}
        {workSomaiya && <Splash />}
      </div>
    </section>
  );
};

export default Experience;
