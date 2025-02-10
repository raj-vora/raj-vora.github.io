import { beamImg, travnalImg, twitterImg, minerImg } from "@/public/assets";
import Image from "next/image";
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import SectionTitle from "./SectionTitle";
import { RxOpenInNewWindow } from "react-icons/rx";

const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Some Things I have Built" titleNo="03" />
      {/* ============ project One Start here ================ */}
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href=""
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={beamImg}
                alt="beamImg"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Beam</h3>
            </div>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
              Chrome Extension to share your streaming accounts with your friends without giving out your passwords
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>NodeJS</li>
              <li>Firestore</li>
              <li>Express</li>
              <li>EJS</li>
              <li>JQuery</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/nurdtechie98/Trav-nal"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project One End here ================== */}
        {/* ============ project Two Start here ================ */}
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://github.com/nurdtechie98/Trav-nal"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={travnalImg}
                alt="travnalImg"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Travnal</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md xl:-mr-16">
              Social Media and travellers are something that goes a long way together.
              So rather than travellers adjusting their content for social media.
              We decided to build social media tailor made for their needs.{" "}
              <br />
              <span className="text-textGreen">❝ Take only memories, leave only footprints ❞</span>
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>MongoDB</li>
              <li>Express</li>
              <li>React</li>
              <li>NodeJS</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/nurdtechie98/Trav-nal"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project Two End here ================== */}
        {/* ============ project Three Start here ============== */}
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://github.com/raj-vora/twittEr"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={twitterImg}
                alt="twitterImg"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">TwittEr</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md text-left">
              <span className="text-textGreen">➤</span> Designed a console-based Twitter clone in Erlang with 10+ features, including user search, tweets & retweets,
              subscriptions, follower management, and a real-time tweet timeline.
              <br />
              <span className="text-textGreen">➤</span> Lowered the code complexity by 60% (and removed boilerplate code altogether) by incorporating generic behaviors
              in the back-end system (made with Cowboy).
              <br />
              <span className="text-textGreen">➤</span> Reached near real-time database performance (request-response latency under 2.2 ms, in Mnesia) by switching
              to a fast, hash-based user authentication and authorization mechanism.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Erlang/OTP</li>
              <li>Mnesia</li>
              <li>Cowboy</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/raj-vora/twittEr"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project Three End here ================== */}
        {/* ============ project Four Start here ================ */}
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://github.com/raj-vora/bitcoin_minEr"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={minerImg}
                alt="minerImg"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">MinEr</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md xl:-mr-16 text-left">
              <span className="text-textGreen">➤</span> Developed a highly distributed, scalable (proof-of-concept) cryptocurrency miner in Erlang and enhanced its flexibility with the help of 5 different hashing algorithms.
              <br />
              <span className="text-textGreen">➤</span> Attained a hash rate of 10K Hs/s (on each node) by employing a custom, distributed mining approach that uses concurrent, lightweight, and highly parallelized worker processes.
              <br />
              <span className="text-textGreen">➤</span> Used supervision trees to make the system more fault-tolerant and eliminated 80% of all runtime errors with the help of Erlang’s robust error-handling mechanisms.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Erlang/OTP</li>
              <li>Mnesia</li>
              <li>Cowboy</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/raj-vora/bitcoin_minEr"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project Four End here ================== */}
      </div>
    </section >
  );
};

export default Projects;
