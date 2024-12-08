import React, { useState, useEffect } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import "./Navbar.scss";
import { images } from "../../constants";
import { client } from "../../client";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [resume, setResume] = useState([]);

  useEffect(() => {
    const resumeQuery = '*[_type == "resume"]';

    client.fetch(resumeQuery).then((data) => {
      setResume(data);
    });
  }, []);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
  {["home", "about", "education", "projects", "skills and experience", "contact", "resume"].map((item) => (
    <li className="app__flex p-text" key={`link=${item}`}>
      <div />
      {item === "skills and experience" ? (
        <a href="#skills">{item}</a>
      ) : item === "resume" ? (
        resume.map((resumeItem) => (
          <a key={resumeItem.link} href={resumeItem.link} target="_blank" rel="noreferrer">RESUME</a>
        ))
      ) : (
        <a href={`#${item}`}>{item}</a>
      )}
    </li>
  ))}
</ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "work", "skills", "contact", "resume"].map((item) => (
                <li className="app__flex p-text" key={`link=${item}`}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {" "}
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
