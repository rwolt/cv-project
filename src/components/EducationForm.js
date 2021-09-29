import React from 'react';

function EducationForm(props) {
    return(
        <div>
            <button
                name="educationHistory"
                id={props.id}
                onClick={props.handleEdit}>
                Save
            </button>
            <form className="school-entry" name="education">
                <label
                    className="school-name-label"
                    htmlFor="school-name">
                    School:
                </label>
                <input
                    type="text"
                    name="school"
                    className="school-name"
                    id={props.id}
                    value={props.school}
                    onChange={props.handleChange}
                />
                <label
                    className="degree-name-label"
                    htmlFor="degree-name">
                    Degree:
                </label>
                <input
                    type="text"
                    name="degree"
                    className="degree-name"
                    id={props.id}
                    value={props.degree}
                    onChange={props.handleChange}
                />
                <label
                    htmlFor="school-start"
                    className="school-start-label">
                    Start Date:
                </label>
                <input
                    type="date"
                    name="startDate"
                    className="school-start"
                    id={props.id}
                    value={props.startDate}
                    onChange={props.handleChange}
                />
                <label
                    htmlFor="school-end"
                    className="school-end-label">
                    Start Date:
                </label>
                <input
                    type="date"
                    name="endDate"
                    className="school-end"
                    id={props.id}
                    value={props.endDate}
                    onChange={props.handleChange}
                />
            </form>
        </div>

    )
}

export default EducationForm;