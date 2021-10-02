import React from 'react';
import '../styles/GeneralInformation.css';

function GeneralInformationForm(props) {
    return(
        <div className="person-details">
            <button
                name="info"
                onClick={props.handleSubmit}>
                Save
            </button>
            <form className="person-entry" name="info">
                <div className="form-row">
                    <label
                        className="person-name-label"
                        htmlFor="person-name">
                        Name:
                    </label>
                    <input
                        type="text"
                        name="personName"
                        className="person-name"
                        value={props.personName}
                        onChange={props.handleChange}
                    />
                </div>
                <div className="form-row">
                    <label
                        className="person-email-label"
                        htmlFor="person-email">
                        Email:
                    </label>
                    <input
                        type="email"
                        name="email"
                        className="person-email"
                        value={props.email}
                        onChange={props.handleChange}
                    />
                </div>
                <div className="form-row">
                    <label
                        className="person-phone-label"
                        htmlFor="person-phone">
                        Phone:
                    </label>
                    <input
                        type="phone"
                        name="phone"
                        className="person-phone"
                        value={props.phone}
                        onChange={props.handleChange}
                    />
                </div>
            </form>
        </div>
    )
}

export default GeneralInformationForm;