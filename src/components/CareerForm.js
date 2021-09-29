import React from 'react';

function CareerForm(props) {
    return(
        <div>
            <button
                name="careerHistory"
                id={props.id}
                onClick={props.handleEdit}>
                Save
            </button>
            <form className="career-entry" name="career">
                <label
                    className="company-name-label"
                    htmlFor="company-name"
                />
                Company:
                <input
                    type="text"
                    name="company"
                    value={props.company}
                    id={props.id}
                    onChange={props.handleChange}
                />
                <label
                    className="job-title-lable"
                    htmlFor="job-title"
                />
                Job Title:
                <input
                    type="text"
                    name="jobTitle"
                    value={props.jobTitle}
                    id={props.id}
                    onChange={props.handleChange}
                />
                <label
                    className="job-start-label"
                    htmlFor="job-start"
                />
                Start Date:
                <input
                    type="date"
                    className="job-start"
                    name="startDate"
                    value={props.startDate}
                    id={props.id}
                    onChange={props.handleChange}
                />
                <label
                    className="job-end-label"
                    htmlFor="job-end"
                />
                End Date:
                <input
                    type="date"
                    className="job-end"
                    name="endDate"
                    value={props.endDate}
                    id={props.id}
                    onChange={props.handleChange}
                />
                <label
                    className="job-description-label"
                    htmlFor="job-description"
                />
                Description:
                <input
                    type="text"
                    className="job-description"
                    name="description"
                    value={props.description}
                    id={props.id}
                    onChange={props.handleChange}
                />
            </form>
        </div>

    )
}

export default CareerForm;