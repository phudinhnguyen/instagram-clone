import React, { createRef, useState, useEffect, useRef } from 'react'

import Avatar from '@view/atoms/Avatar'
import Box from '@view/atoms/Box'
import Button from '@view/atoms/Button'

import Logo from '@view/molecules/Logo'
import TopSearch from '@view/molecules/TopSearch'
import TopNavigation from '@view/molecules/TopNavigation'
import ProfileCard from '@view/molecules/ProfileCard'

import classes from './style.module.scss'
import useUser from 'src/ui/viewModels/useUser'
import User from '@entities/user'
import useNotification from 'src/ui/viewModels/useNotification'
import { useSelector } from 'react-redux'
import { RootState } from '@stores/index'
import NotificationEntity from '@entities/notification'
import { debounce } from '@helper/functions'
import Notification from '@view/molecules/Notification'
import Loading from '@view/atoms/Loading'
import { useHistory } from 'react-router'

const Header = () => {
    const { search } = useUser()
    const listNotificationStore = useSelector((state: RootState) => state.notification)
    const { getListNotification, listNotification } = useNotification(listNotificationStore)
    const history = useHistory()
    const searchFormRef: any = createRef()
    const searchDataRef: any = createRef()
    const notificationRef: any = createRef()

    const [state, setState] = useState({
        openNotification: false,
        openSearchBox: false
    })

    useEffect(() => {
        document.addEventListener('mousedown', onClickOutside)
        document.addEventListener('touchstart', onClickOutside)

        return () => {
            document.removeEventListener('mousedown', onClickOutside)
            document.removeEventListener('touchstart', onClickOutside)
        }
    })

    const onClickOutside = (event) => {
        let newState = { ...state }
        if (
            !searchDataRef.current.contains(event.target) &&
            !searchFormRef.current.contains(event.target)
        ) {
            newState.openSearchBox = false
        }

        if (!notificationRef.current.contains(event.target)) {
            newState.openNotification = false
        }

        setState(newState)
    }

    const handleSearch = debounce(function (value) {
        if (value == "") {
            setState((prevState) => {
                return { ...prevState, openSearchBox: false }
            })
        }
        search.execute({ userName: value == "" ? null : value }).then(res => {
            if (value) {
                setState((prevState) => {
                    return { ...prevState, openSearchBox: true }
                })
            }
        })
    }, 500);

    return (
        <Box className={classes['header']}>
            <Box className={classes['header-logo']}>
                <Logo />
            </Box>
            <div className={classes['header-search']} ref={searchFormRef}>
                <TopSearch
                    onFocus={(e) => {
                        if (e.target.value != "") {
                            setState(prev => ({ ...prev, openSearchBox: true }))
                        }
                    }}
                    onSearch={handleSearch}
                />
                <div ref={searchDataRef}>
                    {
                        state.openSearchBox && search?.value &&
                        <Box className={classes['header-search-data']} bordered>
                            {
                                search?.value?.length != 0 ?
                                    search?.value?.map((user: User, index) => (
                                        <div onClick={() => history.push(`/profile/${user._id}`)}>
                                            <ProfileCard
                                                key={user._id}
                                                icon={<Avatar src={user.avatar} />}
                                                title={user.userName}
                                                subtitle={user.fullName}
                                            />
                                        </div>
                                    )) : "nodata"
                            }
                        </Box>
                    }
                </div>
            </div>
            <Box className={classes['header-navigation']}>
                <TopNavigation
                    openNotification={state.openNotification}
                    onOpenNotification={() => {
                        getListNotification.execute()
                        setState((prevState) => {
                            return { ...prevState, openNotification: true }
                        })
                    }}
                />
            </Box>

            <div ref={notificationRef}>
                {state.openNotification && (
                    <Box className={classes[`header-notification`]} bordered>
                        {
                            getListNotification.status == "loading" ? <Loading /> :
                                <>
                                    {listNotification.map((notification: NotificationEntity, index) => {
                                        return <Notification key={index} notification={notification} />
                                    })}
                                </>
                        }
                    </Box>
                )}
            </div>
        </Box>
    )
}

export default Header