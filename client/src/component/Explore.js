import React from "react";
import { motion } from "framer-motion";
import slogo from "../img/slogo.png";

const setdi = {
  height: "200px",
  width: "200px",
};

export default function Explore() {
  return (
    <>
      <motion.div
        className="profile_container "
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{
          duration: 0.2,
          ease: "easeInOut",
        }}
      >
        <motion.div
          className="box container-fluid bg-warning "
          style={setdi}
          animate={{
            scale: [0.5, 1.5, 1.5, 0.5, 0.5],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",

            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
        >
          <img
            src={slogo}
            alt="logo"
            className="img-responsive"
            style={{ height: "100%", width: "100%" }}
          />
        </motion.div>
      </motion.div>
    </>
  );
}
