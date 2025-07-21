import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const HMN = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="text-xl font-semibold">
        Full Stack Engineer
        {/* This span will be a new line on mobile and on the same line on desktop */}
        <span className="block md:inline text-purple md:ml-1">
          <a href="https://url.rajvora.tech/hmn" target="_blank">
            @Human Motor Neuroscience Lab
          </a>
        </span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        February 2024 - present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-purple mt-1"><TiArrowForward /></span>
          <span>
            Accelerating research workflow for 5 person PhD team by speeding up data processing by 60%.
          </span>
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-purple mt-1"><TiArrowForward /></span>
          <span>
            Leveraging <span className="text-purple inline font-bold">AWS Amplify</span> for seamless data integration, built a NextJS dashboard for data analysis and modelling.
          </span>
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-purple mt-1"><TiArrowForward /></span>
          <span>
            Automating data analysis using <span className="text-purple inline font-bold">Python and MATLAB</span> algorithms, resulting in a <span className="text-purple inline font-bold">30%</span> faster hypotheses validation.
          </span>
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-purple mt-1"><TiArrowForward /></span>
          <span>
            Innovated <span className="text-purple inline font-bold">3 Flutter</span> apps to collect neuromuscular and phonetic information, leading to <span className="text-purple inline font-bold">50%</span> efficient data collection.
          </span>
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-purple mt-1"><TiArrowForward /></span>
          <span>
            Crafted user-centric, responsive mobile interfaces in <span className="text-purple inline font-bold">Figma</span>, driving a <span className="text-purple inline font-bold">60%</span> improvement in overall user experience.
          </span>
        </li>
      </ul>
    </motion.div>
  );
};

export default HMN;
