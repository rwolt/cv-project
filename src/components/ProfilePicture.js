import React from 'react';
import defaultProfilePicture from '../images/profile.png';
import '../styles/ProfilePicture.css';

function ProfilePicture() {
    return(
        <div className="profile-container">
            <img className='profile-picture' src={defaultProfilePicture} alt="Default Profile" />
        </div>
    )
}

export default ProfilePicture;