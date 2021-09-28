import React from 'react';
import CareerForm from './CareerForm';
import CareerEntry from './CareerEntry';
import '../styles/Career.css';

function Career(props) {
    return(
        <div>
            <h2>Career</h2>
            {props.editable ?
                <CareerForm {...props} /> :
                <CareerEntry {...props} />}
            <button>Add</button>
        </div>
    )
}

export default Career;