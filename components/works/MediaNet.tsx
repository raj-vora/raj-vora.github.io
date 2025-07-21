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
      <h3 className="text-xl font-semibold">
        Web Application Developer
        <a href="https://media.net" target="_blank"><span className="text-purple block md:inline md:ml-1">@media.net</span></a>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        January 2022 - Jul 2022
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-purple mt-1">
            <TiArrowForward />
          </span>
          <span>
            Spearheaded and remediated <span className="text-purple font-bold">API proxy service</span> to manage and reduce page load time by <span className="text-purple inline font-bold">50%</span>.
          </span>
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-purple mt-1">
            <TiArrowForward />
          </span>
          <span>
            Implemented <span className="text-purple inline font-bold">7</span> data pipelines using <span className="text-purple inline font-bold">Spring and Elasticsearch</span>, improving data processing stream efficiency by <span className="text-purple inline font-bold">20%</span>.
          </span>
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-purple mt-1">
            <TiArrowForward />
          </span>
          <span>
            Devised <span className="text-purple inline font-bold">3</span> logging infrastructures visualized using <span className="text-purple inline font-bold">Apache Kafka</span> to increase logs availability and integrity by <span className="text-purple inline font-bold">25%</span>.
          </span>
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-purple mt-1">
            <TiArrowForward />
          </span>
          <span>
            Refined the ad pixel tracking workflow using <span className="text-purple inline font-bold">Logstash and Spring boot</span>, leading to a <span className="text-purple inline font-bold">20%</span> increase in revenue.
          </span>
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-purple mt-1">
            <TiArrowForward />
          </span>
          <span>
            Revamped core <span className="text-purple inline font-bold">Redis</span> cache design for ad monetization APIs, optimizing page load times by <span className="text-purple inline font-bold">800ms</span> in hits and <span className="text-purple inline font-bold">reduced cache staleness</span> via integration of event-based orchestration.</span>
        </li>
      </ul>
      <br />
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Associate Web Developer
        <span className="text-purple tracking-wide">@media.net</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        January 2021 - December 2021
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-purple mt-1">
            <TiArrowForward />
          </span>
          <span>
            Migrated <span className="text-purple inline font-bold">CakePHP</span> from singleton to factory pattern, cutting load time by <span className="text-purple inline font-bold">500ms</span> and boosting revenue by <span className="text-purple inline font-bold">10%</span>.
          </span>
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-purple mt-1">
            <TiArrowForward />
          </span>
          <span>
            Orchestrated and optimized <span className="text-purple inline font-bold">6</span> Kubernetes clusters for <span className="text-purple inline font-bold">API and backend services</span> improving load distribution and reducing downtime by <span className="text-purple inline font-bold">20%</span>
          </span>
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-purple mt-1">
            <TiArrowForward />
          </span>
          <span>
            Enhanced internal dashboard designed in <span className="text-purple inline font-bold">React</span> by creating <span className="text-purple inline font-bold">6</span> streamlined workflows to improve operational efficiency.
          </span>
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-purple mt-1">
            <TiArrowForward />
          </span>
          <span>
            Maintained a hybrid web architecture integrating <span className="text-purple inline font-bold">WordPress</span> and <span className="text-purple inline font-bold">PHP</span>, across <span className="text-purple inline font-bold">700+</span> ad-driven websites.
          </span>
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-purple mt-1">
            <TiArrowForward />
          </span>
          <span>
            Coordinated system architecture development to serve <span className="text-purple inline font-bold">Laravel</span> websites utilizing multiple micro-services.
          </span>
        </li>

      </ul>
    </motion.div>
  );
};

export default Medianet;
