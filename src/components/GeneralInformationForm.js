import React from 'react';
import '../styles/GeneralInformation.css';

function GeneralInformationForm(props) {
    return(
        <form className="person-details">
            <label
                className="person-name-label"
                htmlFor="person-name">
                Name:
                <input
                    name="name"
                    value={props.name}
                    onChange={props.handleChange}
                    id="person-name"
                    type="text"
                />
            </label>
            <label
                className="person-email-label"
                htmlFor="person-email">
                Email:
                <input
                    name="email"
                    value={props.email}
                    onChange={props.handleChange}
                    id="person-email"
                    type="email"
                />
            </label>
            <label
                className="person-phone-label"
                htmlFor="person-phone">
                Phone:
                <input
                    name="phone"
                    value={props.phone}
                    onChange={props.handleChange}
                    id="person-phone"
                    type="phone"
                />
            </label>
        </form>
    )
}

export default GeneralInformationForm;