import React from 'react';

function CareerEntry(props) {
    return(
        <div>
        <button
            name="careerHistory"
            id={props.id}
            onClick={props.handleEdit}>
            Edit
        </button>
        <button
                name="careerHistory"
                id={props.id}
                onClick={props.handleDelete}>
                Delete
            </button>
            <div className="entry-row">
                <span className="label school-name-label">Company:</span>
                <span className="entry company-name">{props.company}</span>
            </div>
            <div className="entry-row">
                <span className="label job-title-label">Job Title:</span>
                <span className="entry degree-name">{props.jobTitle}</span>
            </div>
            <div className="entry-row">
                <span className="label job-start-label">Start Date:</span>
                <span className="entry school-start">{props.startDate}</span>
            </div>
            <div className="entry-row">
                <span className="label job-end-label">End Date:</span>
                <span className="entry job-end">{props.enspanate}</span>
            </div>
            <div className="entry-row">
                <span className="label job-description-label">Description:</span>
                <span className="entry job-description">{props.description}</span>
            </div>
        </div>
    )
}

export default CareerEntry;