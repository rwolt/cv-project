import React from 'react';

function EducationEntry(props) {
    return(
        <div>
            <button>Edit</button>
            <button>Delete</button>
            <dl className="school-entry" name="education">
                <dt className="school-name-label">School:</dt>
                    <dd className="school-name">{props.school}</dd>
                <dt className="degree-name-label">Degree:</dt>
                    <dd className="degree-name">{props.degree}</dd>
                <dt className="school-start-label">Start Date:</dt>
                    <dd className="school-start">{props.startDate}</dd>
                <dt className="school-end-label">End Date:</dt>
                    <dd className="school-end">{props.endDate}</dd>
            </dl>
        </div>

    )
}

export default EducationEntry;