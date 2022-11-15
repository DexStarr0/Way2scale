import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";

import Card from "./Card";
import newsData from "../news.json";
import { UserContext } from "../../App";

// <motion.div
//   className="box container-fluid bg-warning "
//   style={setdi}
//   animate={{
//     scale: [0.5, 1.5, 1.5, 0.5, 0.5],
//     rotate: [0, 0, 180, 180, 0],
//     borderRadius: ["0%", "0%", "50%", "50%", "0%"],
//   }}
//   transition={{
//     duration: 2,
//     ease: "easeInOut",

//     times: [0, 0.2, 0.5, 0.8, 1],
//     repeat: Infinity,
//     repeatDelay: 1,
//   }}
// >
//   <img
//     src={slogo}
//     alt="logo"
//     className="img-responsive"
//     style={{ height: "100%", width: "100%" }}
//   />
// </motion.div>;

export default function News() {
  useEffect(() => {
    getNews();
  }, []);

  const [news, setNews] = useState(newsData);
  const { setLoader } = useContext(UserContext);
  const getNews = async () => {
    setLoader(true);
    const url =
      "https://gnews.io/api/v4/search?q=example&country=in&token=84cd8ccdbb13e21d2a4e69a7ee168e0e";
    const response = await fetch(url);
    const newsData = await response.json();
    setNews(newsData.articles);
    setLoader(false);
  };

  return (
    <>
      <motion.div
        className="d-flex justify-content-center flex-wrap flex-row pt-3"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{
          duration: 0.2,
          ease: "easeInOut",
        }}
      >
        {news &&
          news.map((newsInfo) => {
            return (
              newsInfo.image && (
                <div key={newsInfo.url} className="position-relative">
                  <span
                    className="badge badge-pill badge-danger bg-danger position-absolute "
                    style={{ zIndex: "3" }}
                  >
                    {newsInfo.source.name}
                  </span>

                  <Card newsInfo={newsInfo} />
                </div>
              )
            );
          })}
      </motion.div>
    </>
  );
}
