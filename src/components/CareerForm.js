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
                        className="company-name"
                        type="text"
                        name="company"
                        value={props.company}
                        id={props.id}
                        onChange={props.handleChange}
                    />
                </div>
                <div className="form-row">
                    <label
                        className="job-title-label"
                        htmlFor="job-title">
                    Job Title:
                    </label>
                    <input
                        type="text"
                        className="job-title"
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
                    <textarea
                        className="job-description"
                        name="description"
                        value={props.description}
                        id={props.id}
                        onChange={props.handleChange}
                    ></textarea>
                </div>
            </form>
        </div>
    )
}

export default CareerForm;