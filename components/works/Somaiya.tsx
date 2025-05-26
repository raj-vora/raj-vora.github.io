import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const Somaiya = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Android Development Intern
        <span className="text-textGreen tracking-wide">@Somaiya PWD Center</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        March 2019 - July 2019
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Led a team of 3 to develop an application that benefits 15% of the differently abled population.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Created Android Application for color-blind people to assist in selecting their daily outfits.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Deployed a Python API to analyze camera images and identify the predominant color from a dataset of 150 colors.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Presented technical paper titled &quot;Colour Detection and Outfit Planning Application for Visually Challenged&quot; at the National Conference on Disability, Accessibility, Inclusion, and Well-being 2019.
        </li>
      </ul>
    </motion.div>
  );
};

export default Somaiya;
