import React from 'react';
import moment from 'moment';

function CareerEntry(props) {
    return(
        <div className="container career-entry">
            <div className="control-buttons">
                <button
                    className="edit-button"
                    name="careerHistory"
                    id={props.id}
                    onClick={props.handleEdit}>
                    Edit
                </button>
                <button
                    className="delete-button"
                    name="careerHistory"
                    id={props.id}
                    onClick={props.handleDelete}>
                    Delete
                </button>
            </div>

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
                <span className="entry school-start">{props.startDate ? moment(props.startDate).format('MMMM YYYY') : ''}</span>
                <span className="label job-end-label">End Date:</span>
                <span className="entry job-end">{props.endDate ? moment(props.endDate).format('MMMM YYYY') : ''}</span>
            </div>
            <div className="entry-row">
                <span className="label job-description-label">Description:</span>
                <span className="entry job-description">{props.description}</span>
            </div>
        </div>
    )
}

export default CareerEntry;