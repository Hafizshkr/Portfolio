import Hero from './HeroSection/Hero.jsx'
import ProjectSection from './Projects section/ProjectSection.jsx';
import About from './About Section/About.jsx';
import '../../App.css'




const Home = () => {
    return (
        <>
    
    
        <Hero/>
        <About/>
        <div className="flex flex-wrap justify-center pb-10  ">
        <ProjectSection/>
        </div>
        
                

        </>
    )
}

export default Home;