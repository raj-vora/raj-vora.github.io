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
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Software Engineer
        <a href="https://url.rajvora.tech/hmn" target="_blank"><span className="text-textGreen tracking-wide">@Human Motor Neuroscience Lab</span></a>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        February 2024 - present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Innovated 3 Flutter apps for recording neuromuscular and audio information, innovating data collection methods.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Designed responsive mobile UIs in Figma with 15+ screens, prioritizing user experience and patient navigation.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Integrated 10+ REST APIs employing Laravel backend, ensuring reliable collection and consistency with SQL database.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Leveraging AWS Amplify for seamless data integration, built a NextJS dashboard for data processing and modelling.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Conducted user testing to refine features, applying object-oriented principles and user interaction refinements.
        </li>
      </ul>
    </motion.div>
  );
};

export default HMN;
