import { RootState } from '@stores/index'
import React, { useEffect } from 'react'
import { FiSettings } from 'react-icons/fi'
import { useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router'
import useUser from 'src/ui/viewModels/useUser'
import classes from "./style.module.scss"

const ProfileHeader = () => {
    const { userId }: { userId: string } = useParams()
    const userInfo = useSelector((state: RootState) => state.userInfo)
    const { getUserInfo } = useUser()

    useEffect(() => {
        getUserInfo(userId)
    }, [])

    return (
        <div className={classes["profile"]}>
            <div className={classes["profile-image"]}>
                <img src="https://st.quantrimang.com/photos/image/2020/06/19/Hinh-Nen-Meo-Ngao-38.jpg" alt="" />
            </div>
            <div className={classes["profile-user-settings"]}>
                <h1 className={classes["profile-user-name"]}>{userInfo.userName}</h1>
                <button className={classes["profile-edit-btn"]}>Edit Profile</button>
                <button className={classes["profile-settings-btn"]} aria-label="profile settings"><FiSettings /></button>
            </div>
            <div className={classes["profile-status"]}>
                <span className={classes["profile-stat-count"]}><b>123</b> posts</span>
                <span className={classes["profile-stat-count"]}><b>188</b> followers</span>
                <span className={classes["profile-stat-count"]}><b>950</b> following</span>
            </div>
            <div className={classes["profile-bio"]}>
                <p>
                    <span className={classes["profile-real-name"]}>{userInfo.fullName}</span>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️
                </p>
            </div>
        </div>
    )
}

export default ProfileHeader
