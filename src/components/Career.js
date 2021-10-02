import React from 'react';
import CareerForm from './CareerForm';
import CareerEntry from './CareerEntry';
import '../styles/Career.css';

function Career(props) {
    return(
        <div className="container career-container">
            <h2>Experience</h2>
            {props.careerHistory.map(entry => {
                return(
                    entry.editable ?
                        <CareerForm
                            {...entry}
                            handleChange={props.handleChange}
                            handleEdit={props.handleSubmit}
                            handleDelete={props.handleDelete}
                            key={entry.id}
                        /> :
                        <CareerEntry
                            {...entry}
                            handleChange={props.handleChange}
                            handleEdit={props.handleSubmit}
                            handleDelete={props.handleDelete}
                            key={entry.id}
                        />
                )
            })}
            <button
                onClick={props.handleAdd}
                name="career">
                Add Experience
            </button>
        </div>
    )
}

export default Career;