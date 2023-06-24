import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaDribbbleSquare } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/sahil-khanolkar/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/sahilkhanolkar18"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
      <a href="http://dribbble.com" target="_blank" rel="noreferrer">
        <FaDribbbleSquare />
      </a>
    </div>
  );
};

export default HeaderSocials;
