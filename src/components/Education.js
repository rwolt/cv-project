import React from 'react';
import EducationForm from './EducationForm';
import EducationEntry from './EducationEntry';

function Education(props) {

    return(
        <div>
            <button
                name="education"
                onClick={props.handleSubmit}
                className="edit-button">
                {props.editable ? 'Submit' : 'Edit'}
            </button>
            {props.editable ?
                <EducationForm {...props} /> :
                <EducationEntry {...props} />}
        </div>
    )
}
export default Education;