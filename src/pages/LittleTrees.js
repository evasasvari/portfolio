import { NavLink } from "react-router-dom";

export default function LittleTrees(){
    return(
        <main>
        
            <div className="header">
                <section className="headertype2">
                    <div>
                    <NavLink to="/home">
                        <img className="backarrow" src="images/backarrow.webp" alt="backarrow"/>
                    </NavLink> 
                    </div>
                    <div>
                        <h1 className="headertype2title">Little Trees</h1>
                    </div>
                </section>

                
            </div>


                <h2>Overview</h2>
            <div className="projecttextcard">

                    <div className="projecttext-left">
                        <div className="iconinfo">
                            <div>
                                <img className="projecticon" src="images/time.webp" alt="timeicon"/>
                            </div>
                            <div>
                               <p>3 weeks</p>
                             </div>
                        </div>
                        <div className="iconinfo">
                            <div>
                                <img className="projecticon" src="images/group.webp" alt="timeicon"/>
                            </div>
                            <div>
                               <p>Éva Sasvári</p>
                             </div>
                        </div>

                        <h3>Case description</h3>
                        <p>
                        In this individual project, I focused on introducing a new product line for Little Trees (also known as Wunderbaum) to attract a new customer group for the brand. The theme of the new product line was Christmas since at this time of the year companies have the opportunity to get closer to their customers through emotional bonding.
                        </p>
                        <h3>Product description</h3>
                        <p>
                        I created a one-page website for the online campaign by using the Mobile First methodology. To emphasize the project’s identity, I also made a basic physical prototype of the advertised product. A photoshoot was conducted for displaying it.
                        </p>

                        <h3>Customers</h3>
                        <p>
                            The scope of the project was the introduction, through a website campaign, of a new customer group that synergises with the existing one: the car users. Through survey and interviews, a new customer group was introduced by the creation of the new website. The Little Trees can have usage extended while serving as decorations in customers houses during the Holidays. Therefore, the website is personalized in attracting customers who are not necessarily owning a car.
                            I created a Value Proposition Canvas and an Empathy Map to get more insights into the feelings and thoughts of the new customer group. I find emotional understanding really important when a big company would like to gain the trust of a new user base.

                        </p>

                        <p>Links:  
                        <a target="_blank" rel="noopener noreferrer" className="links" href="https://evasasvari.github.io/1st-semester-exam-little-trees/">website</a> ,   
                        <a target="_blank" rel="noopener noreferrer" className="links" href="https://github.com/evasasvari/1st-semester-exam-little-trees.git">GitHub</a> ,  
                        <a target="_blank" rel="noopener noreferrer" className="links" href="https://www.figma.com/proto/NkEPlRQfCnZdIXztt0TpvJ/Untitled?node-id=1%3A2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2">desktop prototype</a> , 
                        <a target="_blank" rel="noopener noreferrer" className="links" href="https://www.figma.com/proto/jyGSuKMqEv5FvkyOLO0dtm/Mobile-mockup?node-id=2%3A30&scaling=scale-down&page-id=0%3A1">mobile prototype</a> , 
                        </p>
                       
                    </div>

                    <div className="projecttext-right">
                        <img className="projecttextimage" src="images/littletreesmockup.jpg" alt="mockup"/>
                    </div>
                   
                </div> 

            <h2>Process</h2>
            <div class="processcardrow" >
                       <div className="processcardcolumn">
                            <h3>Research</h3>
                            <ul className="processlist">
                                <li>Interviews</li>
                                <li>Survey</li>
                                <li>Persona</li>
                                <li>Value Proposition Canvas</li>
                                <li>Empathy Map</li>
                                <li>User Journey</li>
                            </ul>
                        </div> 

                        <img className="processarrow" src="images/processarrow.webp" alt="arrow"/>
                        
                        <div className="processcardcolumn">
                            <h3>Design</h3>
                            <ul className="processlist">
                                <li>Sketches</li>
                                <li>Mood board</li>
                                <li>Site map</li>
                                <li>Style tile</li>
                                <li>Wireframes</li>
                                <li>Mockups</li>
                            </ul>
                        </div>

                        <img className="processarrow" src="images/processarrow.webp" alt="arrow"/>

                        <div className="processcardcolumn">
                            <h3>Testing</h3>
                            <ul className="processlist">
                                <li>Card Sorting (open and closed)</li>
                                <li>Prototyping</li>
                                <li>Usability testing</li>
                            </ul>
                        </div> 

                        <img className="processarrow" src="images/processarrow.webp" alt="arrow"/>

                        <div className="processcardcolumn">
                            <h3>Developement</h3>
                            <ul className="processlist">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>GitHub</li>
                            </ul>
                        </div> 

            </div>
            
            

        </main>
    )
}