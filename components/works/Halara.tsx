import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const Halara = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Full Stack Intern
        <span className="text-textGreen tracking-wide">@Halara Labs Private Limited</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        June 2020 - July 2020
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Conducted mobile application development in Flutter for online games application Play Hatke.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Developed 3 functional pages for player ranking, user profile and in-app wallet and incorporated 2 mini-games.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Engineered 15 server-side APIs in NodeJS for the corresponding pages and mini-games.
        </li>
      </ul>
    </motion.div>
  );
};

export default Halara;
