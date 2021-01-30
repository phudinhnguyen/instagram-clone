import User from '@entities/user'
import { RootState } from '@stores/index'
import Avatar from '@view/atoms/Avatar'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router'
import useUser from 'src/ui/viewModels/useUser'
import classes from "./style.module.scss"

const ProfileHeader = () => {
    const history = useHistory()
    const { userId }: { userId: string } = useParams()
    const { getUserInfo, getRelationship, follow, unfollow } = useUser()

    const profile = useSelector((state: RootState) => state.profile)

    const userInfo: User = getUserInfo.value || new User({})
    const relationship = getRelationship.value

    useEffect(() => {
        fetchUserInfo(userId)
    }, [ userId ])

    const fetchUserInfo = (_userId) => {
        getRelationship.execute(_userId)
        getUserInfo.execute(_userId)
    }

    const followAndRefetch = () => {
        follow.execute(userId).then(res => {
            fetchUserInfo(userId)
        })
    }

    const unfollowAndRefetch = () => {
        unfollow.execute(userId).then(res => {
            fetchUserInfo(userId)
        })
    }

    return (
        <div className={classes[ "profile" ]}>
            <div className={classes[ "profile-image" ]}>
                <Avatar className={classes[ "avatar" ]} src={userInfo.avatar} />
            </div>
            <div className={classes[ "profile-user-settings" ]}>
                <h1 className={classes[ "profile-user-name" ]}>{userInfo.userName}</h1>
                {
                    userInfo._id == profile._id ?
                        <button className={classes[ "profile-btn" ]}>Edit Profile</button>
                        :
                        <>
                            {
                                relationship?.isFollowing &&
                                <>
                                    <button
                                        className={classes[ "profile-btn" ]}
                                        onClick={() => {
                                            history.push(`/direct/${ userId }`)
                                        }}>Message</button>
                                    <button onClick={unfollowAndRefetch} className={classes[ "profile-btn" ]}>Unfollow</button>
                                </>
                            }

                            {
                                !relationship?.isFollowing && relationship?.isFollower &&
                                <button onClick={followAndRefetch} className={classes[ "profile-btn" ]}>Follow back</button>
                            }

                            {
                                !relationship?.isFollowing && !relationship?.isFollower &&
                                <button onClick={followAndRefetch} className={classes[ "profile-btn" ]}>Follow</button>
                            }
                        </>
                }



            </div>
            <div className={classes[ "profile-status" ]}>
                <span className={classes[ "profile-stat-count" ]}><b>{userInfo.totalPost}</b> posts</span>
                <span className={classes[ "profile-stat-count" ]}><b>{userInfo.totalFollower}</b> followers</span>
                <span className={classes[ "profile-stat-count" ]}><b>{userInfo.totalFollowing}</b> following</span>
            </div>
            <div className={classes[ "profile-bio" ]}>
                <p>
                    <span className={classes[ "profile-real-name" ]}>{userInfo.fullName}</span>
                    {profile.aboutMe || profile.fullName}
                </p>
            </div>
        </div>
    )
}

export default ProfileHeader
