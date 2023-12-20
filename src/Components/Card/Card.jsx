import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faJs, faNode, faReact } from "@fortawesome/free-brands-svg-icons";
import "./Card.css";

const Card = (props) => {
  return (
    <>
      {props.details.map((value) => (
        
          <div className="container" key={value.id}>
            <div className="card-container">  
              <div className="title-project">{value.title}</div>

              <div className="stacks">
                <FontAwesomeIcon icon={faJs} />
                <FontAwesomeIcon icon={faReact} />
                <FontAwesomeIcon icon={faNode} />
              
              </div>
              <div className="text-container">
                <p className="project-description">{value.description}</p>
              </div>
              <div className="bottom-wrapper">
                <div className="icons">
                  <a className="link" href={value.link}>
                    <FontAwesomeIcon icon={faLink} />
                  </a>
                  <a className="github" href={value.source}>
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
                <div className="tags">{value.tags}</div>
              </div>
            </div>
          </div>
        
      ))}
    </>
  );
};

export default Card;
