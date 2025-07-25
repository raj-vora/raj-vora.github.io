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
          <span>
            Spearheaded and remediated <span className="text-textGreen inline">API proxy service</span> to manage and reduce page load time by <span className="text-textGreen inline">50%</span>.
          </span>
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          <span>
            Implemented 7 data pipelines using <span className="text-textGreen inline">Spring and Elasticsearch</span>, improving data processing stream efficiency by <span className="text-textGreen inline">20%</span>.
          </span>
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          <span>
            Devised 3 logging infrastructures visualized using <span className="text-textGreen inline">Apache Kafka</span> to increase logs availability and integrity by <span className="text-textGreen inline">25%</span>.
          </span>
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          <span>
            Refined the <span className="text-textGreen inline">ad pixel tracking</span> workflow using <span className="text-textGreen inline">Logstash and Spring boot</span>, leading to a <span className="text-textGreen inline">20%</span> increase in revenue.
          </span>
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          <span>
            Revamped core <span className="text-textGreen inline">Redis cache design</span> for ad monetization APIs, optimizing page load times by <span className="text-textGreen inline">800ms</span> in hits and reduced cache staleness via integration of event-based orchestration.
          </span>
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
          <span>
            Migrated <span className="text-textGreen inline">CakePHP</span> from singleton to factory pattern, cutting load time by <span className="text-textGreen inline">500ms</span> and boosting revenue by <span className="text-textGreen inline">10%</span>.
          </span>
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          <span>
            Orchestrated and optimized <span className="text-textGreen inline">6 Kubernetes</span> clusters for <span className="text-textGreen inline">API and backend services</span>, improving load distribution and reducing downtime by <span className="text-textGreen inline">20%</span>.
          </span>
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          <span>
            Enhanced internal dashboard built in React.js by creating 5 streamlined workflows to improve operational efficiency.
          </span>
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          <span>
            Maintained a hybrid web architecture integrating <span className="text-textGreen inline">WordPress and CakePHP</span>, ensuring seamless functionality across <span className="text-textGreen inline">700+</span> ad-driven websites.
          </span>
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          <span>
            Coordinated system architecture development to serve <span className="text-textGreen inline">Laravel</span> websites utilizing multiple micro-services.
          </span>
        </li>
      </ul>
    </motion.div>
  );
};

export default Medianet;
