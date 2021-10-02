import React from 'react';
import EducationForm from './EducationForm';
import EducationEntry from './EducationEntry';
import '../styles/Education.css';

function Education(props) {

    return(
        <div className="container education-container">
            <h2>Education</h2>
            {props.educationHistory.map(entry => {
                return(
                    entry.editable ?
                        <EducationForm
                            {...entry}
                            handleEdit={props.handleSubmit}
                            handleChange={props.handleChange}
                            handleDelete={props.handleDelete}
                            key={entry.id}
                        /> :
                        <EducationEntry
                            {...entry}
                            handleEdit={props.handleSubmit}
                            handleChange={props.handleChange}
                            handleDelete={props.handleDelete}
                            key={entry.id} />)
            })}
            <button
                onClick={props.handleAdd}
                name="education">
                Add
            </button>
        </div>
    )
}
export default Education;