import parse from "html-react-parser";

export default function Projects({ project }) {
    let image = "https://cederdorff.github.io/img/logo512.webp";

    if (project._embedded && project._embedded["wp:featuredmedia"]) {
        image = project._embedded["wp:featuredmedia"][0].source_url;
    }

    return (
        <article className="projectcard">

            <img src={image} alt={project.title?.rendered} />

            <div className="projecttext">
                <h2>{parse(project.title.rendered)}</h2>
                <div>{parse(project.content.rendered)}</div>
                <div className="button">
                    <a href={parse(project.slug)} className="buttonlink">
                    {parse(project.acf.button)}
                        <svg version="1.1" x="0px" y="0px" viewBox="0 0 152.9 43.4">
                            <path d="M151.9,13.6c0,0,3.3-9.5-85-8.3c-97,1.3-58.3,29-58.3,29s9.7,8.1,69.7,8.1c68.3,0,69.3-23.1,69.3-23.1 s1.7-10.5-14.7-18.4"/>
                        </svg>
                    </a>
                </div>
                
            </div>
            
        </article>
    );
}