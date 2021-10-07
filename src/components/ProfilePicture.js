import React, {Component} from 'react';
import defaultProfilePicture from '../images/profile.png';
import '../styles/ProfilePicture.css';

class ProfilePicture extends Component {
    constructor(props) {
        super(props)
    }

    handleChange = (e) => {
        const files = e.target.files;
        console.log(files);
        const url = window.URL.createObjectURL(files[0]);
        console.log(url);
        document.querySelector('.profile-picture').src = url;
    }


    render() {
        return(
            <div className="profile-container">
                <input type='file'
                    id="image-upload"
                    onChange={this.handleChange}
                />
                <img className="profile-picture"
                    onClick={() => document.getElementById('image-upload').click()}
                    src={defaultProfilePicture} alt="Default Profile"
                />
                <p className="profile-text">Edit</p>
            </div>
        )
    }
}

export default ProfilePicture;