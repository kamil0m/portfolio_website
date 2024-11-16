import projects from "../../assets/projects.json";
import skills from "../../assets/skills.json";

export const Skills: React.FC = () => {

    const projectsSkills = projects.flatMap(project =>
        project.technologiesUsed.map(tech => tech.name)
    );

    const uniqueSkills = Array.from(new Set([...projectsSkills, ...skills]));

    return <div className="container skills__container">
        <h1 className="skills__title">Here's what I can do:</h1>
        <ul className="skills__list">
            
            {uniqueSkills.map((skill, index) => (
                <li key={index} className="skill__entry">{skill}</li>
            ))}

        </ul>
    </div>
};
