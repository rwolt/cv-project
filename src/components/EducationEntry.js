import React from 'react';

function EducationEntry(props) {
    return(
        <div>
            <button
                name="educationHistory"
                id={props.id}
                onClick={props.handleEdit}>
                Edit
            </button>
            <button
                name="educationHistory"
                id={props.id}
                onClick={props.handleDelete}>
                Delete
            </button>
            <div className="entry-row">
                <span className="label school-name-label">School:</span>
                <span className="entry school-name">{props.school}</span>
            </div>
            <div className="entry-row">
                <span className="label degree-name-label">Degree:</span>
                <span className="entry degree-name">{props.degree}</span>
            </div>
            <div className="entry-row">
                <span className="label school-start-label">Start Date:</span>
                <span className="entry school-start">{props.startDate}</span>
            </div>
            <div className="entry-row">
                <span className="label school-end-label">End Date:</span>
                <span className="entry school-end">{props.enspanate}</span>
            </div>
        </div>
    )
}

export default EducationEntry;