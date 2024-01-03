import React from "react";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faJs, faNode, faReact } from "@fortawesome/free-brands-svg-icons";
import cardscolumn from "../../assets/cards-column.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectCard = (props) => {
  return (
    <>
      {props.details.map((value) => (
        <div className="flex flex-wrap justify-center items-center  mt-10 xl:flex-row md:flex-col lg:flex-col sm:flex-col" key={value.id}>
          <div className=" xl:w-[36%]  lg:w-[50%] md:w-[50%] sm:w-[70%] ">
            <img src={value.img} alt="" />
          </div>
          <div className=" bg-[#ffffff] shadow-md rounded-md  p-5  xl:w-[20%] lg:w-[50%] md:w-[50%] sm:w-[70%]">
            <div className="card">
              <div className="title-project sm:text-md  ">{value.title}</div>
              <div className="stacks sm:text-md">
                <FontAwesomeIcon icon={faJs} />
                <FontAwesomeIcon icon={faReact} />
                <FontAwesomeIcon icon={faNode} />   
              </div>

              <p className="project-description xl:text-lg sm:text-sm">
                {value.description}
              </p>
              <div className="bottom-wrapper">
                <div className="icons">
                  <a className="link" href={value.link} target="_blank">
                    <FontAwesomeIcon icon={faLink} />
                  </a>
                  <a className="github" href={value.source} target="_blank">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
                <div className="tags">{value.tags}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectCard;
