import React from 'react';

function CareerForm(props) {
    return(
        <div>
            <button
                name="career"
                onClick={props.handleSubmit}>
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
                    onChange={props.handleChange}
                />
            </form>
        </div>

    )
}

export default CareerForm;