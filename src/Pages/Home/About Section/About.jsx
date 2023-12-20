import React from "react";
import myGuy from "../../../assets/hehenobg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="container-about">
        <div className="dual-side-container">
          <div className="left-container">
            <div className="about-me">
              <h2>About Me</h2>
              <p>
                I'm a beginner in coding, but I don't stop there. I keep
                grinding and working towards what I want. I'm capable of doing
                that because I'm dedicated to what I want. When I write a line
                of code, I feel so happy because I'm going to create something
                that I'm curious about. Even when I encounter bugs, I feel bad,
                but my background is in engineering, so I like to solve
                problems. This is what becomes handy. I just need to analyse the
                problem to solve it. I still have a lot to learn. I'm going
                to create more projects in the future. If I don't code then I go
                fishing.
              </p>
              <div className="social-icon">
                <a
                  className="link"
                  href="https://www.linkedin.com/in/hafiz-shukor-881719185/"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a className="link" href="https://github.com/Hafizshkr">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <div className="OpenToWork">Open to work</div>
              </div>
            </div>
          </div>
          <div className="right-container">
            <img src={myGuy} alt="HandsomeOwner" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
