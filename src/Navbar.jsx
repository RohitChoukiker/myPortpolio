import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-6 md:px-8">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img
            src="./src/assets/rohitImg.png"
            className="mx-4 w-10 h-8 md:w-12 md:h-10"
            alt="Logo"
          />
        </a>
      </div>

      <div className="flex items-center gap-4 text-lg md:text-2xl">
        <a
          href="https://www.linkedin.com/in/rohit-choukiker-74591524b/#:~:text=www.linkedin.com/in/rohit%2Dchoukiker%2D74591524b"
          target="_blank"
          aria-label="LinkedIn"
          className="flex items-center text-blue-500 hover:underline"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/RohitChoukiker"
          target="_blank"
          aria-label="Instagram"
          className="hover:underline"
        >
          <FaGithub />
        </a>
        <a
          href="https://leetcode.com/u/rohitchoukiker2803/"
          target="_blank"
          aria-label="LeetCode"
          className="hover:underline text-lg md:text-2xl"
        >
          <SiLeetcode className="text-[#FFA116]" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
