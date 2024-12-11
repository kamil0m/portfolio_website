// import projects from "../../assets/projects.json";
import skills from "../../assets/skills.json";

export const Skills: React.FC = () => {

    const uniqueCategories = Array.from(new Set(skills.map(skill => skill.category)));
    console.log(uniqueCategories);

    return <div className="container skills__container">
        <h1 className="skills__title">Here's what I can do !</h1>
        {uniqueCategories.map((category, index) => {
            return (
                <div className="skills__card" >
                    <h2 className="skills__category" key={index}>{category} :</h2>
                        
                    <ul className="skills__list" >
                        {skills.filter(skill => skill.category === category).map((skill, index) => {
                            return (
                                <li key={index} className="skills__name badge">{skill.name}
                                    <span className="skills__description techno__tooltip">{skill.description}</span>
                                </li>
                            )
                        })}
                    </ul>
                </div>

            
            )
        })}
    </div>
};
