import React from 'react';
import CareerForm from './CareerForm';
import CareerEntry from './CareerEntry';
import '../styles/Career.css';

function Career(props) {
    return(
        <div>
            <h2>Career</h2>
            {props.careerHistory.map(entry => {
                return(
                    entry.editable ?
                        <CareerForm
                            {...entry}
                            handleChange={props.handleChange}
                            handleEdit={props.handleSubmit}
                            key={entry.id}
                        /> :
                        <CareerEntry
                            {...entry}
                            handleChange={props.handleChange}
                            handleEdit={props.handleSubmit}
                            key={entry.id}
                        />
                )
            })}
            <button
                onClick={props.handleAdd}
                name="career">
                Add
            </button>
        </div>
    )
}

export default Career;