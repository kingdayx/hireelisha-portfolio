// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

//  data
const aboutData = [
  {
    title: "Skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 key={1} />,
          <FaCss3 key={2} />,
          <FaJs key={3} />,
          <FaReact key={4} />,
          <SiNextdotjs key={5} />,
          <SiFramer key={6} />,
          <FaWordpress key={7} />,
        ],
      },
      {
        title: "Blockchain",
        icons: [
          <FaFigma key={8} />,
          <SiAdobexd key={9} />,
          <SiAdobephotoshop key={10} />,
        ],
      },
      {
        title: "Backend",
        icons: [
          <FaFigma key={8} />,
          <SiAdobexd key={9} />,
          <SiAdobephotoshop key={10} />,
        ],
      },
    ],
  },

  {
    title: "Experience",
    info: [
      {
        title: "Full Stack Blockchain Engineer - Daotec Industries - Freelance",
        stage: "2019 - Present",
      },
      {
        title: "Lead Mobile Software Engineer - Doeshi",
        stage: "2020 - Present",
      },
    ],
  },
  {
    title: "Credentials",
    info: [
      {
        title: "Full Stack Web Development - Team Treehouse",
        stage: "2017-2018",
      },
      {
        title: "Zero to Mastery Academy",
        stage: "2021",
      },
      {
        title:
          "Udemy - Ethereum and Solidity the complete developers guide, solidity",
        stage: "2017",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  const handleClick = (itemIndex) => {
    setIndex(itemIndex);
    window.location.hash = aboutData[itemIndex].title.toLowerCase();
  };

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[300px]"
      >
        <Avatar />
      </motion.div>
      <div className="z-40 mt-20 container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div>
          {" "}
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => (
              <a
                key={itemIndex}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(itemIndex);
                }}
                className={`${
                  index === itemIndex &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capatilize xl:text-lg 
          relative after:w-8 after:h-[2px]
           after:bg-white after:absolute after:-bottom-1 after:left-0`}
                href={`#${aboutData[itemIndex].title.toLowerCase()}`}
              >
                {item.title}
              </a>
            ))}
          </div>
          <div>
            {aboutData.map((item, itemIndex) => (
              <div key={itemIndex} id={item.title.toLowerCase()}>
                {index === itemIndex &&
                  item.info.map((infoItem, infoIndex) => (
                    <p key={infoIndex}>{infoItem.title}</p>
                  ))}
              </div>
            ))}
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default About;
