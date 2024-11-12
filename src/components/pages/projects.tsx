import { ProjectCard } from "../project-card";
import projectsData from "../../assets/projects.json";
import Project from "../../models/project";

type projectsData = Project[];

export const Projects: React.FC = () => {
    return <>
        <div className="container">
            <h1>Here are some of my projects:</h1>
        </div>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__list">
                    <li key={projectsData[0].projectId} className="card__item">
                        <ProjectCard project={projectsData[0]} />
                    </li>
                    {/* {projectsData.map((project) => (
                        <li key={project.projectId} className="card__item">
                            <ProjectCard project={project} />
                        </li>
                    ))} */}
                </ul>
            </div>
        </div>
    </>
    
};