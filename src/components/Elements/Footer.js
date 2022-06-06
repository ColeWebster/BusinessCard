import React from "react";
import { FaLinkedin, FaTwitterSquare, FaGithubSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <a 
        className="linkedin"
        href="https://www.linkedin.com/in/colewebster/"
      >
        <FaLinkedin size={56} />
      </a>
      <a 
        className="twitter"
        href="https://twitter.com/Coding_CW"  
      >
        <FaTwitterSquare size={56} />
      </a>
      <a 
        className="github"
        href="https://github.com/ColeWebster"
      >
        <FaGithubSquare size={56} />
      </a>
    </div>
  );
}
