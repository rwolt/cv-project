import React from 'react';
import GeneralInformationForm from './GeneralInformationForm';
import GeneralInformationEntry from './GeneralInformationEntry';


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
                <GeneralInformationForm  {...props}/> :
                <GeneralInformationEntry {...props}/>}
        </div>

    )
}


export default Info;