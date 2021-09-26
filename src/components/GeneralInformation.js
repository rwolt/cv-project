import React from 'react';
import '../styles/GeneralInformation.css';

function GeneralInformation(props) {
    return(
        <dl className="person-details">
            <dt className="person-name-label">Name: </dt>
                <dd id="person-name">{props.name}</dd>
            <dt className="person-email-label">Email:</dt>
                <dd id="person-email">{props.email}</dd>
            <dt className="person-phone-label">Phone: </dt>
                <dd id="person-phone">{props.phone}</dd>
        </dl>
    )
}

export default GeneralInformation;