import React from 'react'
import classes from "./style.module.scss"
import { FiSettings } from "react-icons/fi"
const ProfileUserSetting = () => {
    return (
        <div className={classes[ "profile-user-settings" ]}>

            <h1 className={classes[ "profile-user-name" ]}>janedoe_</h1>

            <button className={classes[ "profile-edit-btn" ]}>Edit Profile</button>

            <button className={classes[ "profile-settings-btn" ]} aria-label="profile settings"><FiSettings /></button>

        </div>
    )
}

export default ProfileUserSetting
