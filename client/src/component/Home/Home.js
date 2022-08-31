import React from "react";
import Intro from "./Intro";
import Canva2 from "./Canvas/ContentTimeline";
import Canva1 from "./Canvas/Contest";
import Canva3 from "./Canvas/ContestOverview";
// import Canva4 from "./Canvas/ContestSponsers";
import Canva5 from "./Canvas/SkillsScanner";
import Canva6 from "./Canvas/Rewards";
// import Canva7 from "./Canvas/GetInspired";
// import Canva8 from "./Canvas/FAQs";
import "./Home.css";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      <Intro />
      <Canva1 />
      <Canva2 />
      <Canva3 />
      <Canva5 />
      <Canva6 />
    </motion.div>
  );
}
