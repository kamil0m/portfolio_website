import { 
    useEffect,
    useState
 } from "react";
import Project from '../models/project';


interface ProjectCardProps {
    project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {

    //Dynamically import images
    const [projectImage, setProjectImage] = useState<string>('');

    useEffect(() => {
        import(`@/assets/${project.projectId}.png`)
            .then((image) => setProjectImage(image.default))
            .catch((err) => console.error(err));
    }, [project.projectId]);

    return (
        <a className='card__link' href={project.urlDemo} target='_blank'> 
            <img src={projectImage} className='card__image'></img>
            <h2 className='card__title'>{project.projectName}</h2>
            <p className='project__description'>{project.description}</p>
            <p className='project__context'>{project.context}</p>
            <h3>Skills and technologies used:</h3>
            <ul className='techno__list'>{project.technologiesUsed.map((techno, index) => (
                <li key={index}>
                    <div className='badge'>{techno.name}
                        <span className='techno__tooltip'>{techno.purpose}</span>
                    </div>
                </li>
                ))}
            </ul>
            <button className='material-symbols-outlined card__button button__go'>arrow_forward</button>
            <a className='card__button button__github' target='_blank' href={project.urlGit}><i className='fa-brands fa-github gtihub__icon'></i></a>
            
        </a>
    );
};
