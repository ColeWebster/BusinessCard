import React from "react";
import { FaLinkedin, FaTwitterSquare, FaGithubSquare, FaMailBulk } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <a 
        className="linkedin"
        href="https://www.linkedin.com/in/colewebster/"
        target="_blank"
      >
        <FaLinkedin size={56} />
      </a>
      <a 
        className="twitter"
        href="https://twitter.com/Coding_CW"
        target="_blank"  
      >
        <FaTwitterSquare size={56} />
      </a>
      <a 
        className="github"
        href="https://github.com/ColeWebster"
        target="_blank"
      >
        <FaGithubSquare size={56} />
      </a>
      <a
        className="email"
        href="mailto: cwebster87@outlook.com"
        target="_blank"
      >
        <FaMailBulk size={56}  />
      </a>


    </div>
  );
}
