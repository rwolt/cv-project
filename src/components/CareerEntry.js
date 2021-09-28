import React from 'react';

function CareerEntry(props) {
    return(
        <div>
        <button
            name="career"
            onClick={props.handleSubmit}>
            Edit
        </button>
            <dl className="career-entry" name="career">
                <dt className="school-name-label">Company:</dt>
                    <dd className="company-name">{props.company}</dd>
                <dt className="job-title-label">Job Title:</dt>
                    <dd className="degree-name">{props.jobTitle}</dd>
                <dt className="job-start-label">Start Date:</dt>
                    <dd className="school-start">{props.startDate}</dd>
                <dt className="job-end-label">End Date:</dt>
                    <dd className="job-end">{props.endDate}</dd>
                <dt className="job-description-label">Description:</dt>
                    <dd className="job-description">{props.description}</dd>
            </dl>
        </div>

    )
}

export default CareerEntry;