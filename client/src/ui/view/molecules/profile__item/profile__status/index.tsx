import React from 'react'
import classes from "./style.module.scss"

const ProfileStatus = () => {
    return (
        <div className={classes["profile-stats"]}>
            <ul>
                <li><span className={classes["profile-stat-count"]}>164</span> posts</li>
                <li><span className={classes["profile-stat-count"]}>188</span> followers</li>
                <li><span className={classes["profile-stat-count"]}>206</span> following</li>
            </ul>
        </div>
    )
}

export default ProfileStatus
