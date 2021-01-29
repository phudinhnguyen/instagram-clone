import User from '@entities/user'
import { RootState } from '@stores/index'
import Avatar from '@view/atoms/Avatar'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router'
import useUser from 'src/ui/viewModels/useUser'
import classes from "./style.module.scss"

const ProfileHeader = () => {
    const { userId }: { userId: string } = useParams()
    const { getUserInfo, getRelationship } = useUser()

    const profile = useSelector((state: RootState) => state.profile)

    const userInfo: User = getUserInfo.value || new User({})
    const relationship = getRelationship.value

    useEffect(() => {
        getRelationship.execute(userId)
        getUserInfo.execute(userId)
    }, [userId])

    return (
        <div className={classes["profile"]}>
            <div className={classes["profile-image"]}>
                <Avatar className={classes["avatar"]} src={userInfo.avatar} />
            </div>
            <div className={classes["profile-user-settings"]}>
                <h1 className={classes["profile-user-name"]}>{userInfo.userName}</h1>
                {
                    userInfo._id == profile._id ?
                        <button className={classes["profile-btn"]}>Edit Profile</button>
                        :
                        <>
                            {
                                relationship?.isFollowing &&
                                <>
                                    <button className={classes["profile-btn"]}>Message</button>
                                    <button className={classes["profile-btn"]}>Unfollow</button>
                                </>
                            }

                            {
                                !relationship?.isFollowing && relationship?.isFollower &&
                                <button className={classes["profile-btn"]}>Follow back</button>
                            }

                            {
                                !relationship?.isFollowing && !relationship?.isFollower &&
                                <button className={classes["profile-btn"]}>Follow</button>
                            }
                        </>
                }



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
