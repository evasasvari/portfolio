import { NavLink } from "react-router-dom";
import {useState, useEffect} from "react";
import Projects from "../components/Projects";



export default function HomePage(){
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        async function getData() {
            const response = await fetch("https://portfolio.evasasvari.com/wp-json/wp/v2/projects?_embed&v=999");
            const data = await response.json();
						console.log(data);
            setProjects(data);
        }
        getData();
    }, []);
    return(
        <main>
            <section className="header">
                <div className="headercontent">
                    <nav>
                        <a className="infolinks" href="https://linkedin.com/in/éva-sasvári/" target="_blank" rel="noopener noreferrer">
                            <img className="imageLink" src="images/linkedinicon.webp" alt="linkedinicon"/></a>
                        <a className="infolinks" href="https://github.com/evasasvari" target="_blank" rel="noopener noreferrer">
                            <img className="imageLink" src="images/githubicon.webp" alt="githubicon"/></a>
                        <a className="infolinks" href="mailto:evasasvari016@gmail.com">
                            <img className="imageLink" src="images/mailicon.webp" alt="mailicon"/></a>
                    </nav>
                        <div className="headertext">
                            <h2 className="welcome">Welcome!</h2>
                            <h2 >I am</h2>
                            <div className="name">
                                <h1>Eva Sasvari</h1>  
                            </div>
                        <h2>A Designer and Frontend Developer</h2>
                    </div>
                    <img className="namearrow" src="images/namearrow.webp" alt="aboutme"/> 
                    
                    <NavLink to="/about" className="imageContainer">
                        <img className="headerimage" src="images/headerimage.webp" alt="pictureofme"/>
                    </NavLink>
                
                </div>
                <div className="scroll">
                    <p>scroll to see my projects</p>
                    <img src="images/scrollarrow.webp" alt="scroll"/>
                </div>
            </section>



          <section className="projects">
                <h2>My Projects</h2>

                <section className="grid-container">
                    {projects.map(project => (
                    <Projects key={project.id} project={project} />
                    ))}
                </section>
            </section>

            
    
        </main>
    )
}