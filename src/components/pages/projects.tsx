import { ProjectCard } from "../project-card";
import projectsData from "../../assets/projects.json";
import Project from "../../models/project";
import Swiper from 'swiper';
import { swiperConfig } from '../../swiperConfig';
import { useEffect } from "react";
// import { React } from "react";
// import { useSwiper } from 'swiper/react';

type projectsData = Project[];

export const Projects: React.FC = () => {

    // const swiper = useSwiper('.cards__wrapper', swiperConfig);

    useEffect(() => {
        new Swiper('.cards__wrapper', swiperConfig);
    })

    return <>
        <div className="container">
            <h1>Here are some of my projects:</h1>
        </div>
        <div className="cards__container swiper">
            <div className="cards__wrapper">
                <ul className="cards__list swiper-wrapper">
                    {projectsData.map((project) => (
                        <li key={project.projectId} className="card__item swiper-slide">
                            <ProjectCard project={project} />
                        </li>
                    ))}
                </ul>
                <div className="swiper-pagination"></div>
                <div className="swiper-slide-button swiper-button-prev"></div>
                <div className="swiper-slide-button swiper-button-next"></div>
            </div>
        </div>
    </>
    
};