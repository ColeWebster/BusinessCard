import React from "react";
import { FaLinkedin, FaTwitterSquare, FaGithubSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <i className="linkedin">
        <FaLinkedin size={56} />
      </i>
      <i className="twitter">
        <FaTwitterSquare size={56} />
      </i>
      <i className="github">
        <FaGithubSquare size={56} />
      </i>
    </div>
  );
}
