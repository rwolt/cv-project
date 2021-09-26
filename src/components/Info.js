import React from 'react';
import GeneralInformationForm from './GeneralInformationForm';
import GeneralInformation from './GeneralInformation';


function Info(props) {
    return(
        <div>
            <button
                name="info"
                onClick={props.handleSubmit}
                className="edit-button">
                {props.editable ? 'Submit' : 'Edit'}
            </button>
            {props.editable ?
                <GeneralInformationForm  name={props.name} handleChange={props.handleChange}/> :
                <GeneralInformation {...props}/>}
        </div>

    )
}


export default Info;