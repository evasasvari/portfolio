import { NavLink } from "react-router-dom";

export default function GenBrun(){
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
                        <h1 className="headertype2title">GenBRUN</h1>
                    </div>
                </section>

                
            </div>


                <h2>Overview</h2>
            <div className="abouttextcard">

                    <div className="projecttext-left">
                        <div className="iconinfo">
                            <div>
                                <img className="projecticon" src="images/time.webp" alt="timeicon" />
                            </div>
                            <div>
                               <p>2 weeks</p>
                             </div>
                        </div>
                        <div className="iconinfo">
                            <div>
                                <img className="projecticon" src="images/group.webp" alt="timeicon"/>
                            </div>
                            <div>
                               <p>Maddie Hansen, Arabella Parrag, Vince Szarka, Éva Sasvári</p>
                             </div>
                        </div>

                        <h3>Case description</h3>
                        <p>
                        In this group project, we helped a small thrift store in Aarhus called GenBRUN with their digitalization process by expanding the store’s online presence. The customers had a hard time finding information about the shop and the shop had problems with reaching out to customers. This problem concluded the need of a website. 
                        </p>
                        <h3>Product description</h3>
                        <p>
                        We created a website with multiple pages adjusted to the store’s identity. The main goal of the website is to serve information to the customers and make the small business closer to people. We used the Mobile First method, adjusting to desktop afterwards.
                        </p>

                        <p>Links:  
                        <a target="_blank" rel="noopener noreferrer" className="links" href="https://r3moulade.github.io/Mobile-First/">website </a>  , 
                        <a target="_blank" rel="noopener noreferrer" className="links" href="https://github.com/R3moulade/Mobile-First.git">GitHub</a>
                        </p>
                       
                    </div>

                    <div className="projecttext-right">
                        <img className="projecttextimage" src="images/mobilefirstmockup.jpg" alt="pictureofme"/>
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
                                <li>User Journey</li>
                            </ul>
                        </div> 

                        <img className="processarrow" src="images/processarrow.webp" alt="arrow"/>
                        
                        <div className="processcardcolumn">
                            <h3>Design</h3>
                            <ul className="processlist">
                                <li>Sketches</li>
                                <li>Mood board</li>
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