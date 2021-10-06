import React from 'react';

function EducationForm(props) {
    const style = {
        background: `url('${process.env.PUBLIC_URL}/floppy.png') no-repeat center`,
        backgroundSize: '30px'
    }
    return(
        <div
            className="container">
            <div className="hidden control-buttons">
                <button
                    className="edit-button"
                    name="educationHistory"
                    id={props.id}
                    onClick={props.handleEdit}
                    style={style}>
                    Save
                </button>
                <button
                    className="delete-button"
                    name="educationHistory"
                    id={props.id}
                    onClick={props.handleDelete}>
                    Delete
                </button>
            </div>
            <form className="school-entry" name="education">
                <div className="form-row">
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
                </div>
                <div className="form-row">
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
                </div>
                <div className="form-row">
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
                        End Date:
                    </label>
                    <input
                        type="date"
                        name="endDate"
                        className="school-end"
                        id={props.id}
                        value={props.endDate}
                        onChange={props.handleChange}
                    />
                </div>
            </form>
        </div>
    )
}

export default EducationForm;