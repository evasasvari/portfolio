import { NavLink } from "react-router-dom";

export default function AboutPage(){
    return(
        <main>
            <div className="header" >

            <section className="headertype2">
                <div>
                <NavLink to="/home">
                        <img className="backarrow" src="images/backarrow.webp" alt="backarrow"/>
                </NavLink> 
                </div>
                <div>
                    <h1 className="headertype2title">About me</h1>
                </div>
            </section>
            </div>

            <section className="aboutmetext">

                <h2>Hey there!</h2>

                <div className="abouttextcard">
                    <div className="abouttext-left">
                        <p>
                            My name is Éva Sasvári. I'm 21 years old Multimedia Design student living in Aarhus, Denmark. I’m from Hungary, but I always loved to travel and get to know more about the world and that is the reason I decided to study abroad. 
                        </p>
                        <p>
                            I’m specializing in frontend development, but I also have interest in UX/UI and working on visuals. I believe developing and teaching ourselves is the key to an interesting and colourful life. I love to challenge myself and solve problems in the most creative and efficient way possible.
                        </p>
                        
                    </div>

                    <div className="abouttext-right">
                        <img className="abouttextimage" src="images/aboutme.jpg" alt="pictureofme"/>
                    </div>
                </div> 
            
            </section>

            <div className="aboutmeskills">

                <h2 id="myskills">My key skills</h2>
                <div className="skillstable">
                    <div class="skills" >
                        <h3>Hard skills</h3>
                        <img className="skillicon" src="images/hardskill.webp" alt="hardskillsicon"/>
                        <ul className="skillList"id="firstcolumn">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>Adobe XD</li>
                            <li>Figma</li>
                            <li>Photoshop</li>
                            <li>Sketching</li>
                            <li>Scrum framework</li>
                        </ul>

                    </div>

                    <div class="skills" >
                        <h3>Soft skills</h3>
                        <img className="skillicon" src="images/softskill.webp" alt="softskillsicon"/>
                        <ul className="skillList">
                            <li>Problem-solving</li>
                            <li>Problem based-learning</li>
                            <li>Active listening and Observing</li>
                            <li>Communication</li>
                            <li>Teamwork</li>
                            <li>Adaptability</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <section className="interests">
                <h2>Other things I enjoy:</h2>
                <ul className="interesttable">
                    <li><b>Arts 🎨: </b>I love to paint and draw. Since I was a kid, I always loved to create something on a piece of paper. I mostly paint with watercolour, but I love to experiment with other kind of media as well, including digital.</li>
                    <li><b>Games 🎮: </b>One of my other passions is playing videogames and boardgames. It doesn’t matter if its online or real life, I enjoy playing as long as I can do it with my friends. My favorites are co-operative games!</li>
                    <li><b>Traveling 🧳: </b>When I have more free time, I love to travel and hike. On holidays, I try to organise trips to places I never been before. I find beauty in cities and outside of them. </li>
                    
                </ul>
                <div className="imagerow">
                    <div className="imagecolumn">
                        <img className="interestimage" src="images/painting.jpg" alt="painting"/>
                    </div>
                    <div className="imagecolumn">
                        <img className="interestimage" src="images/hiking.jpg" alt="painting"/>
                    </div>

                    <div className="imagecolumn">
                        <img className="interestimage" src="images/hike.jpg" alt="painting"/>
                    </div>
                    <div className="imagecolumn">
                        <img className="interestimage" src="images/camera.jpg" alt="painting"/>
                    </div>
                </div>

            </section>

        </main>
    )
}