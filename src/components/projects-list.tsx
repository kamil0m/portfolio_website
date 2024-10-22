import React from 'react';
import Project from "../models/project";

interface ProjectsListProps {
    projects: Project[];
}

export const ProjectsList: React.FC<ProjectsListProps> = ({ projects }) => {
    return (
        <ul className='projects__list'>
            {projects.map((project, index) => (
                <li key={index}>
                    <div className='project__card'>
                        <div className='project__image'>IMAGE</div>
                        <h2>{project.projectName}</h2>
                        <p>{project.description}</p>
                        <p>{project.context}</p>
                        <ul>
                            Skills and technologies used:
                            {project.technologiesUsed.map((techno, index) => (
                                <li key={index}>{techno.name}: {techno.purpose}</li>
                            ))}
                        </ul>
                    </div>
                    
                </li>
            ))}
        </ul>
    );
};
