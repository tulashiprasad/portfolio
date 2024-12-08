import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Header.scss";
import { images } from "../../constants";
import AppWrap from "../../wrapper/AppWrap";
import { urlFor, client } from "../../client";

const Header = () => {
  const [profile, setProfile] = useState([]);
  const [bio, setBio] = useState([]);
  const [hobbies, setHobbies] = useState([]);

  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  useEffect(() => {
    const profileQuery = '*[_type == "profile"]';
    const bioQuery = '*[_type == "bio"]';
    const hobbyQuery = '*[_type =="hobbies"]';

    client.fetch(profileQuery).then((data) => {
      setProfile(data);
    });
    client.fetch(bioQuery).then((data) => {
      setBio(data);
    });
    client.fetch(hobbyQuery).then((data) => {
      setHobbies(data);
    });
  }, []);

  useEffect(() => {

  }, []);
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Tulashi Pd Joshi</h1>
            </div>
          </div>
          {bio.map((bio) => {
            return (
              <>
                <div className="tag-cmp app__flex">
                  <p className="p-text">{bio.bio1}dksjfk</p>
                </div>
                <div className="tag-cmp app__flex">
                  <p className="p-text">{bio.bio2}fasdfasd</p>
                </div>
                <div className="tag-cmp app__flex">
                  <p className="p-text">{bio.bio3}fasdfasdf</p>
                </div>
              </>
            );
          })}

        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        {profile.map((item) => {
          return (
            <img src={urlFor(item.imgUrl)} alt="app__header-img" />

          );
        })}
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info hobby"
      >
        <div className="app__header-badge">
          {hobbies.map((hobby) => {
            return (
              <>
                <div className="tag-cmp app__flex hobby-item">
                  <p className="p-text">{hobby.hobby1}</p>
                </div>
                <div className="tag-cmp app__flex hobby-item">
                  <p className="p-text">{hobby.hobby2}</p>
                </div>
                <div className="tag-cmp app__flex hobby-item">
                  <p className="p-text">{hobby.hobby3}</p>
                </div>
              </>
            );
          })}

        </div>
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
