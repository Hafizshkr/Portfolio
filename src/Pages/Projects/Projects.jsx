import "../Projects/Projects.css";
import Card from "../../Components/Card/Card.jsx";
import CardData from "../../Components/Data/CardData.jsx";
import image from "../../assets/laravel.png"

const Projects = () => {
  return (
    <>
      <div className="container">
        <div className="dual-container">
          <div className="left-container">
           
          </div>
          <div className="right-container">
            <div className="side-container">
             <Card details={CardData.projects}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
