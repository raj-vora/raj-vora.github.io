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
        <a href="https://media.net" target="_blank"><span className="text-textGreen tracking-wide">@media.net</span></a>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        January 2022 - Jul 2022
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Spearheaded and remediated API proxy service to manage and reduce page load time by 50%.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Implemented 7 data pipelines using Spring and Elasticsearch, improving data processing stream efficiency by 20%.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Devised 3 logging infrastructures visualized using Apache Kafka to increase logs availability and integrity by 25%.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Refined the ad pixel tracking workflow using Logstash and Spring boot, leading to a 20% increase in revenue.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Drafted interactive dashboards in Kibana to visualize parameters and generate insights for decision-making.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Configured and updated 6 Kubernetes clusters for APIs and backend servers, enhancing load balancing.
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
          Migrated CakePHP from singleton to factory pattern, cutting load time by 500ms and boosting revenue by 10%.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Maintained a hybrid web architecture integrating WordPress and CakePHP, ensuring seamless functionality across 700+ ad-driven websites.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Enhanced internal dashboard built in React.js by creating 5 streamlined workflows to improve operational efficiency.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Coordinated system architecture development to serve CakePHP websites utilizing multiple micro-services.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Optimized page load times by 800ms through implementation of Redis caching, resulting in improved performance.
        </li>
      </ul>
    </motion.div>
  );
};

export default Medianet;
