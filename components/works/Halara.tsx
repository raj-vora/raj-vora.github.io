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
      <h3 className="text-xl font-semibold">
        Full Stack Intern
        <span className="block md:inline text-purple md:ml-1">@Halara Labs Private Limited</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        June 2020 - July 2020
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-purple mt-1">
            <TiArrowForward />
          </span>
          Enhanced app performance and user experience using Flutter and utilized MongoDB for efficient data storage.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-purple mt-1">
            <TiArrowForward />
          </span>
          Improved user engagement by developing player ranking, user profile pages, and incorporated 2 mini-games.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-purple mt-1">
            <TiArrowForward />
          </span>
          Architected 15 server-side APIs with Node.js resulting in faster data retrieval and improved game performance.
        </li>
      </ul>
    </motion.div>
  );
};

export default Halara;
