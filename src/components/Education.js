import React from 'react';
import EducationForm from './EducationForm';
import EducationEntry from './EducationEntry';
import '../styles/Education.css';

function Education(props) {

    return(
        <div>
            <h2>Education History</h2>
            {props.editable ?
                <EducationForm {...props} /> :
                <EducationEntry {...props} />}
            <button>Add</button>
        </div>
    )
}
export default Education;