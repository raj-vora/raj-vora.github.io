import { useState } from "react";
import ArchiveCard from "./ArchiveCard";
import { motion } from "framer-motion";

const Archive = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Other Noteworthy Projects
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <ArchiveCard
          title="Recipe Search App"
          des="Recipe searching application created using React and API from EDAMAM"
          listItem={["ReactJS", "EDAMAM API"]}
          link="url.rajvora.tech/rs"
        />
        <ArchiveCard
          title="Expense Manager"
          des=" Developed an Expense Manager application during KJSCE HACK 2019, which utilized OCR technology to automatically extract bill amounts and restaurant names. 
          The app managed expenses for both individuals and groups, streamlining the process of expense tracking and management."
          listItem={["HTML", "CSS", "JavaScript", "PHP", "MySQL"]}
          link="url.rajvora.tech/em"
        />
        <ArchiveCard
          title="Gator Taxi"
          des=" GatorTaxi is an up-and-coming ride-sharing service. 
          They get many ride requests every day and are planning to develop new software to keep track of their pending ride requests."
          listItem={["Python"]}
          link="url.rajvora.tech/gt"
        />
        <ArchiveCard
          title="Full Stack Development Course"
          des=" Learnt React, Redux, Node.js, MongoDB, GraphQL and TypeScript in one go!  
          The main focus is on building single page applications with ReactJS that use REST APIs built with Node.js."
          listItem={["React", "Redux", "Node.js", "MongoDB", "GraphQL", "TypeScript"]}
          link="url.rajvora.tech/fs"
        />
        <ArchiveCard
          title="Flutter UIs"
          des=" Created multiple UIs learning from various flutter courses."
          listItem={["Flutter"]}
          link="https://github.com/raj-vora/flutter_uis"
        />
        <ArchiveCard
          title="Connect 3"
          des=" Connect 3 android application / modified X and Os"
          listItem={["Android"]}
          link="https://github.com/raj-vora/connect3"
        />

        {showMore && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <ArchiveCard
                title="Todoey"
                des=" To-do List Mobile App developed in Flutter. Local storage enabled."
                listItem={["Flutter"]}
                link="https://github.com/raj-vora/todoey-flutter"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <ArchiveCard
                title="Clima"
                des=" It is a weather app that fetches the weather data from openweathermap.org and displays it, can be used for your location as well as search weather for other places "
                listItem={["Flutter", "OpenWeatherMap API"]}
                link="https://github.com/raj-vora/clima-flutter"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <ArchiveCard
                title="Flash Chat"
                des=" A modern messaging app where users can sign up and log in to chat."
                listItem={["Flutter", "Firestore", "Firebase"]}
                link="https://github.com/raj-vora/flash-chat-flutter"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <ArchiveCard
                title="Bitcoin Ticker"
                des=" Shows the rate for BTC, ETH, LTC for all major currencies."
                listItem={["Flutter", "CoinAPI"]}
                link="https://github.com/raj-vora/bitcoin-ticker-flutter"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <ArchiveCard
                title="Notekeeper"
                des=" Note taking app for smartphones"
                listItem={["Flutter"]}
                link="https://github.com/raj-vora/notekeeper-flutter"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <ArchiveCard
                title="BMI Calculator"
                des=" Body Mass Index Calculator inspired by the beautiful designs made by Ruben Vaalt. 
                A multi screen app with simple functionality but full-on custom styling."
                listItem={["Flutter"]}
                link="https://github.com/raj-vora/bmi-calculator-flutter"
              />
            </motion.div>
          </>
        )}
      </div>
      <div className="mt-12 flex items-center justify-center">
        {showMore ? (
          <button
            onClick={() => setShowMore(false)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show Less
          </button>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default Archive;
