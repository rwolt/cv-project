import React from 'react';
import '../styles/GeneralInformation.css';

function GeneralInformation(props) {
    return(
        <div>
            <button>Edit</button>
            <button>Delete</button>
            <dl className="person-details" name="info">
                <dt className="person-name-label">Name: </dt>
                    <dd id="person-name">{props.personName}</dd>
                <dt className="person-email-label">Email:</dt>
                    <dd id="person-email">{props.email}</dd>
                <dt className="person-phone-label">Phone: </dt>
                    <dd id="person-phone">{props.phone}</dd>
            </dl>
        </div>

    )
}

export default GeneralInformation;