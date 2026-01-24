import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Education.scss";

const Education = () => {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    const educationQuery = '*[_type == "education"] | order(_createdAt desc)';
    client.fetch(educationQuery).then((data) => {
      setEducation(data);
    });
  }, []);
  return (
    <>
      <h2 className="head-text">Education</h2>

      <div className="app__education-container">
        <motion.div className="app__education-list">
          {education.map((education) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__education-item app__flex"
              key={education.name}
            >
              <div className="app__flex">
                <img src={urlFor(education.icon)} alt={education.name} />
              </div>
              <div className="education-date">
                <p className="p-text" style={{ fontWeight: "bold" }}>{education.institution}</p>
                <p className="p-text degree">{education.degree}</p>
                <p>{education.date}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};
export default AppWrap(
  MotionWrap(Education, "app__education"),
  "education",
  "app__whitebg"
);
