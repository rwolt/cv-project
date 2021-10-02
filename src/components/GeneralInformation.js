import React from 'react';
import GeneralInformationForm from './GeneralInformationForm';
import GeneralInformationEntry from './GeneralInformationEntry';
import ProfilePicture from './ProfilePicture';


function Info(props) {
    return(
        <div className="container">
             <h2>Contact Information</h2>
            <div className="container information-container">
                {props.editable ?
                    <GeneralInformationForm  {...props}/> :
                    <GeneralInformationEntry {...props}/>}
                <ProfilePicture />
            </div>
        </div>


    )
}


export default Info;