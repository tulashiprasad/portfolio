import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaLinkedin, FaGithub } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.linkedin.com/in/tulashiprasad/"><FaLinkedin /></a>
      
    </div>
    <div>
      <a href="https://github.com/tulashiprasad"><FaGithub /></a>
      
    </div>
    <div>
      <a href="https://x.com/tulashi_pd">
        <BsTwitter />
      </a>
    </div>
    <div>
      <a href="https://www.facebook.com/tulashiprasad.joshi.1/">     <FaFacebookF /></a>
 
    </div>
    <div>
      <a href="https://www.instagram.com/tulashi_prasad/"> <BsInstagram /></a>
     
    </div>
  </div>
);

export default SocialMedia;
