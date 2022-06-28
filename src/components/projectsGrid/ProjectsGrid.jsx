import { getProjectsData } from "../../helpers/functions/getProjectsData"
import { ProjectsCard } from "../projectsCard/ProjectsCard";

export const ProjectsGrid = () => {

    const projects = getProjectsData();

    return (
        <section className="resume-section" id="projects">
            <div className="resume-section-content">
                <h2 className="mb-5">Projects</h2>
                <div className="card-columns">
                {
                    projects.map(projectData => {
                        return <ProjectsCard key={projectData.github_repo} {...projectData}/>;
                    } )
                }
                </div>
            </div>
        </section>
    )
}
