// import projects from "../../assets/projects.json";
import skills from "../../assets/skills.json";

export const Skills: React.FC = () => {

    const uniqueCategories = Array.from(new Set(skills.map(skill => skill.category)));
    console.log(uniqueCategories);

    return <div className="container skills__container">
        <h1 className="skills__title">Here's what I can do:</h1>
        {uniqueCategories.map((category, index) => {
            return (
                <>
                <h2 key={index}>{category}</h2>
                {skills.filter(skill => skill.category === category).map((skill, index) => {
                    return (
                        <li key={index} className="skills__card">
                            {/* <img src={skill.image} alt={skill.name} className="skills__image"/> */}
                            <div className="skills__name">{skill.name}
                                <span className="skills__description techno__tooltip">{skill.description}</span>
                            </div>
                        </li>
                    )
                })}
                </>
            )
        })}
    </div>
};
