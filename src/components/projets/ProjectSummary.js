import React from 'react-router-dom';

const ProjectSummary = ({ project }) => {
    return (
        <div className="card">
                <div className="card-content">
                    <span className="card-title">{project.title}</span>
                    <p>Posted by Eliot</p>
                    <p className="grey-text">May 25th 11:25</p>
                </div>
            </div>
    );
}
 
export default ProjectSummary;