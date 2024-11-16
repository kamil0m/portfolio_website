import projects from "../../assets/projects.json";

export const Skills: React.FC = () => {

    // écrire une liste des compétences qui pourrait ensuite être concatené avec celle éxtraite des projets

    const uniqueSkills = Array.from(new Set(projects.flatMap(project =>
        project.technologiesUsed.map(tech => tech.name)
    )));

    return <div className="container skills__container">
        <h1 className="skills__title">Here are some of my skills:</h1>
        <ul className="skills__list">
            
            {uniqueSkills.map((skill, index) => (
                <li key={index} className="skill__entry">{skill}</li>
            ))}

        </ul>
    </div>
};
