import React from "react";
import {useSelector} from "react-redux";
const Profile = () => {
    const profileName = useSelector(state => state.profile.name);
    return (<div>Hi {profileName}, this is your profile!</div>);
};
export default Profile;