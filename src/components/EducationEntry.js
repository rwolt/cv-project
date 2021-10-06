import React from 'react';
import moment from 'moment';

function EducationEntry(props) {

    return(
        <div className="container">
            <div className="hidden control-buttons">
                <button
                    className="edit-button"
                    name="educationHistory"
                    id={props.id}
                    onClick={props.handleEdit}>
                    Edit
                </button>
                <button
                    className="delete-button"
                    name="educationHistory"
                    id={props.id}
                    onClick={props.handleDelete}>
                    Delete
                </button>
            </div>

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
                <span className="entry school-start">{props.startDate ? moment(props.startDate).format('MMMM YYYY') : ''}</span>
                <span className="label school-end-label">End Date:</span>
                <span className="entry school-end">{props.endDate ? moment(props.endDate).format('MMMM YYYY'): ''}</span>
            </div>
        </div>
    )
}

export default EducationEntry;