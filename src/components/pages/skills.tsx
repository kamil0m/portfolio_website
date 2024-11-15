import projects from "../../assets/projects.json";

export const Skills: React.FC = () => {

    // écrire une liste des compétences

    const uniqueSkills = Array.from(new Set(projects.flatMap(project =>
        project.technologiesUsed.map(tech => tech.name)
    )));

    return <ul className="skill-entry">
        {uniqueSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
        )
        )}
    </ul>
};
