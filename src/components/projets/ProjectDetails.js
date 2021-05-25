import React from 'react'

const ProjectDetails = (props) => {
    
    const { id } = props.match.params;
    
    return (
        <div className="container section">
            <div className="card">
                <div className="card-content">
                    <span className="card-title">Project title: {id}</span>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis tenetur perspiciatis expedita nam possimus harum distinctio, quaerat impedit. Officia hic nam voluptatum expedita excepturi iure ducimus? Sapiente tenetur adipisci corrupti!
                    </p>
                </div>
                <div className="card-action">
                    <p>Posted by Coucou</p>
                    <p>May 25th , 12:16</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
