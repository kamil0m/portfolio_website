import { ProjectCard } from "../project-card";
import projectsData from "../../assets/projects.json";
import Project from "../../models/project";

type projectsData = Project[];

export const Projects: React.FC = () => {
    return <div className="container">
        <h1>Here are some of my projects:</h1>
        <ul className="projects__list">
            {projectsData.map((project, index) => (
                <li key={index}>
                    <ProjectCard project={project} />
                </li>
            ))}
        </ul>
    </div>
};