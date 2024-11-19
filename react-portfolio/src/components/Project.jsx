import React from 'react';

const Project = ({ image, title, appLink, repoLink }) => (
    <div className="col-md-4 mb-4">
        <div className="card h-100">
            <img src={image} className="card-img-top" alt={`${title} screenshot`} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <a href={appLink} target="_blank" className="btn btn-primary me-2">Live App</a>
                <a href={repoLink} target="_blank" className="btn btn-secondary">GitHub</a>
            </div>
        </div>
    </div>
);

export default Project;