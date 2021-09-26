import React from 'react';
import CareerForm from './CareerForm';
import CareerEntry from './CareerEntry';

function Career(props) {
    return(
        <div>
            <button
                name="career"
                onClick={props.handleSubmit}
                className="edit-button">
                {props.editable ? 'Submit' : 'Edit'}
            </button>
            {props.editable ?
                <CareerForm {...props} /> :
                <CareerEntry {...props} />}
        </div>
    )
}

export default Career;