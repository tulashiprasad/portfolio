import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://twitter.com/calltpj">
        <BsTwitter />
      </a>
    </div>
    <div>
      <a href="https://www.facebook.com/tulashiprasad.joshi.1/">     <FaFacebookF /></a>
 
    </div>
    <div>
      <a href="https://www.instagram.com/tulashi_prasad/"> <BsInstagram /></a>
     
    </div>
    <div>
      <a href="https://www.linkedin.com/in/tulashi-prasad-950a351a6/"><FaLinkedin /></a>
      
    </div>
  </div>
);

export default SocialMedia;
