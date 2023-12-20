import "../Projects/Projects.css";
import Card from "../../Components/Card/Card.jsx";
import CardData from "../../Components/Data/CardData.jsx";
import cardscolumn from "../../assets/cards-column.jpg";
import news from "../../assets/Newsllter.jpg";
import password from "../../assets/PasswordGenerator.jpg";

const Projects = () => {
  return (
    <>
      <div className="container">
        <div className="dual-container">
          <div className="left-container">
           <img src={cardscolumn} className="column" />
           <img src={news} className="news" />
           <img src={password} className="password" />
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
