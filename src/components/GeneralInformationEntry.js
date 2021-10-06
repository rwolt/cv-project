import React from 'react';
import '../styles/GeneralInformation.css';

function GeneralInformation(props) {
    return(
        <div className="person-details">
            <button
                className="info-button"
                name="info"
                onClick={props.handleSubmit}>
                Edit
            </button>
            <div className="person-entry" name="info">
                    <div className="entry-row">
                        <span className="label person-name-label">Name:</span>
                        <span className="entry person-name">{props.personName}</span>
                    </div>
                    <div className="entry-row">
                        <span className="label person-email-label">Email:</span>
                        <span className="entry person-email">{props.email}</span>
                    </div>
                    <div className="entry-row">
                        <span className="label person-phone-label">Phone: </span>
                        <span className="entry person-phone">{props.phone}</span>
                    </div>
            </div>
        </div>

    )
}

export default GeneralInformation;