import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const NPL = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Software Engineer
        <span className="text-textGreen tracking-wide">@Neuromscular Physiology Lab</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        February 2024 - present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Created a Flutter app that records and analyses patient audio files to help identify neuromuscular issues, making sure the data is captured accurately and processed efficiently.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Designed a responsive mobile application UI in Figma, creating over 15 detailed screens that prioritize user experience and intuitive navigation for patients.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Architected a React-based dashboard tailored for patient onboarding, providing an intuitive interface for managing patient data and ensuring smooth workflow.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Implemented seamless API integration with a Vanilla PHP backend, ensuring reliable data collection and consistency.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Conducted user testing sessions with healthcare professionals to gather feedback, refine features, and improve the overall usability and effectiveness of the application.
        </li>
      </ul>
    </motion.div>
  );
};

export default NPL;
