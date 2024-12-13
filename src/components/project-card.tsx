import React from 'react';
import Project from '../models/project';


interface ProjectCardProps {
    project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {

    const projectImagePath = `/src/assets/projects/${project.projectId}.png`;

    return (
        <a className='card__link' href={project.urlDemo} target='_blank'> 
            <img src={projectImagePath} className='card__image'></img>
            <h2 className='card__title'>{project.projectName}</h2>
            <p className='project__description'>{project.description}</p>
            <p className='project__context'>{project.context}</p>
            <h3>Skills and technologies used:</h3>
            <ul className='techno__list'>{project.technologiesUsed.map((techno, index) => (
                <li key={index}>
                    <div className='badge'>{techno.name}
                        <span className='techno__tooltip'>{techno.purpose}</span>
                    </div>
                    {/* <span>{techno.purpose}</span> */}
                </li>
                ))}
            </ul>
            <button className='material-symbols-outlined card__button button__go'>arrow_forward</button>
            <a className='card__button button__github' target='_blank' href={project.urlGit}><i className='fa-brands fa-github gtihub__icon'></i></a>
            
        </a>
    );
};
