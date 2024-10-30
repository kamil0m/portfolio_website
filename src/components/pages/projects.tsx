import { ProjectsList } from "../projects-list";
import projects from "../../assets/projects.json";


export const Projects: React.FC = () => {
    return <>
        <h1>Here are some of my projects:</h1>
        < ProjectsList projects={projects} />
    </>
};