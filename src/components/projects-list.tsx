import React from 'react';
import Project from "../models/project";

interface ProjectsListProps {
    projects: Project[];
}

export const ProjectsList: React.FC<ProjectsListProps> = ({ projects }) => {
    return (
        <ul>
            {projects.map((project, index) => (
                <li key={index}>
                    <div className='project__card'>
                        <div>IMAGE</div>
                        <h2>{project.projectName}</h2>
                        <p>{project.description}</p>
                        <p>{project.context}</p>
                        <ul>
                            {project.technologiesUsed.map((techno) => (
                                <li>{techno.name}: {techno.purpose}</li>
                            ))}
                        </ul>
                    </div>
                    
                </li>
            ))}
        </ul>
    );
};
