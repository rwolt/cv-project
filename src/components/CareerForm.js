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
            <button
                name="careerHistory"
                id={props.id}
                onClick={props.handleDelete}>
                Delete
            </button>
            <form className="career-entry" name="career">
                <div className="form-row">
                    <label
                        className="company-name-label"
                        htmlFor="company-name">
                    Company:
                    </label>
                    <input
                        type="text"
                        name="company"
                        value={props.company}
                        id={props.id}
                        onChange={props.handleChange}
                    />
                </div>
                <div className="form-row">
                    <label
                        className="job-title-lable"
                        htmlFor="job-title">
                    Job Title:
                    </label>
                    <input
                        type="text"
                        name="jobTitle"
                        value={props.jobTitle}
                        id={props.id}
                        onChange={props.handleChange}
                    />
                </div>
                <div className="form-row">
                    <label
                        className="job-start-label"
                        htmlFor="job-start">
                    Start Date:
                    </label>
                    <input
                        type="date"
                        className="job-start"
                        name="startDate"
                        value={props.startDate}
                        id={props.id}
                        onChange={props.handleChange}
                    />
                </div>
                <div className="form-row">
                    <label
                        className="job-end-label"
                        htmlFor="job-end">
                    End Date:
                    </label>
                    <input
                        type="date"
                        className="job-end"
                        name="endDate"
                        value={props.endDate}
                        id={props.id}
                        onChange={props.handleChange}
                    />
                </div>
                <div className="form-row">
                    <label
                        className="job-description-label"
                        htmlFor="job-description">
                    Description:
                    </label>
                    <input
                        type="text"
                        className="job-description"
                        name="description"
                        value={props.description}
                        id={props.id}
                        onChange={props.handleChange}
                    />
                </div>
            </form>
        </div>
    )
}

export default CareerForm;