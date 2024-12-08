import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Work.scss";

const Work = () => {
  const [work, setWork] = useState([]);

  useEffect(() => {
    const workQuery = '*[_type == "works"]';
    client.fetch(workQuery).then((data) => {
      setWork(data);
    });
  }, []);
  return (
    <>

      <div className="app__work-container">
        <h2 className="head-text">My <span> projects </span>
        </h2>
        <motion.div className="app__work-list">
          {work.map((work, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              key={index}
              className='work-container'
            >
              <div className="work-title bold-text">
                <p>{work.title}</p>
              </div>
              <div className="work-desc">
                <p className="p-text" style={{ fontWeight: "bold" }}>{work.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};
export default AppWrap(
  MotionWrap(Work, "work"),
  "projects",
  "app__whitebg"
);
