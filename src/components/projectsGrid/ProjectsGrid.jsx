import { useMemo } from "react";
import { getProjectsData } from "../../helpers/functions/getProjectsData"
import { ProjectsCard } from "../projectsCard/ProjectsCard";

export const ProjectsGrid = ({languageEn}) => {

    const projects = useMemo(()=> getProjectsData());

    return (
        <section className="resume-section" id="projects">
            <div className="resume-section-content">
                <h2 className="mb-5">{languageEn? 'Projects' : 'Proyectos'}</h2>
                <div className="card-columns">
                {
                    projects.map(projectData => {
                        return <ProjectsCard languageEn={languageEn} key={projectData.github_repo} {...projectData}/>;
                    } )
                }
                </div>
            </div>
        </section>
    )
}
