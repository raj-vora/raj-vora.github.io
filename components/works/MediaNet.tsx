import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";
const Medianet = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Web Application Developer
        <span className="text-textGreen tracking-wide">@media.net</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        January 2022 - Jul 2022
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Spearheaded and managed API proxy service to manage access and reduce page load time by 50%.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Implemented 7 data pipelines using Spring framework, improving dataflow efficiency by 20%.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Devised 3 logging infrastructures visualized using Apache Kafka to increase data availability and integrity by 25%.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Modified ad pixel tracking workflow using Logstash, resulting in a 20% increase in revenue.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Designed interactive dashboards in Kibana to visualize data and generate insights for decision-making.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Configured and updated 4 Kubernetes clusters for APIs and backend servers, enhancing load balancing.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Architected efficient, scalable services paired with well-designed UI as part of cross-functional projects.
        </li>
      </ul>
      <br />
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Associate Web Developer
        <span className="text-textGreen tracking-wide">@media.net</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        January 2021 - December 2021
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Migrated CakePHP infrastructure from singleton design pattern to factory pattern, reducing website load time by 500ms and increasing revenue by 10%.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Administered the PHP server architecture for 700+ websites, implementing updates and improvements to maintain smooth operation.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Added new functionalities to internal ad dashboard made in React.JS, creating 5 new workflows.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Coordinated system architecture development to serve WordPress and CakePHP websites from the same backend.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Led cross-functional projects, coordinating with product and design teams to deliver robust solutions.
        </li>
      </ul>
    </motion.div>
  );
};

export default Medianet;
