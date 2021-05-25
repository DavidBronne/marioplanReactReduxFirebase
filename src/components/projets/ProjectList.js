import React from 'react';
import ProjectSummary from './ProjectSummary'

const ProjectList = ({ projects }) => {
    return (
        
        projects && projects.map( project => {
            return (
                <div className="project-list section" key={project.id}>
                    <ProjectSummary project={project}/>
                </div>
            )

        })
    );
}
 
export default ProjectList;