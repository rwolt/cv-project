import React from 'react';
import GeneralInformationForm from './GeneralInformationForm';
import GeneralInformationEntry from './GeneralInformationEntry';


function Info(props) {
    return(
        <div>
            <h2>Contact Information</h2>
            {props.editable ?
                <GeneralInformationForm  {...props}/> :
                <GeneralInformationEntry {...props}/>}
        </div>

    )
}


export default Info;