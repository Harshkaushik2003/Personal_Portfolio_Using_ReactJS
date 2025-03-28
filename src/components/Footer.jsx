import React from "react";
import me from "../assets/Github_logo.png";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div id="#footer">
        <div>
          <img src={me} alt="Founder" />
        </div>
        <h2>Harsh Kaushik</h2>
        <p>Motivation is temporary, but discipline last forever</p>
      </div>
      <aside>
        <h2>Socal Media</h2>

        <article>
          <a
            href="https://www.linkedin.com/in/harshkaushik12/"
            target={"blank"}
          >
            <AiFillLinkedin />
          </a>
          <a href="https://Github.com/harshkaushik2003" target={"blank"}>
            <AiFillGithub />
          </a>
          <a href="https://instagram.com/harshkaushik_12" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://youtube.com" target={"blank"}>
            <AiFillYoutube />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
