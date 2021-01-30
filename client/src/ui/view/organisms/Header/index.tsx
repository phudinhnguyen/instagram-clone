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
import useNotification from 'src/ui/viewModels/useNotification'
import { useSelector } from 'react-redux'
import { RootState } from '@stores/index'
import NotificationEntity from '@entities/notification'
import Notification from '@view/molecules/Notification'
import Loading from '@view/atoms/Loading'
import { useHistory } from 'react-router'

const Header = () => {
    const listNotificationStore = useSelector((state: RootState) => state.notification)
    const { getListNotification, listNotification } = useNotification(listNotificationStore)
    const history = useHistory()
    const notificationRef: any = createRef()

    const [ state, setState ] = useState({
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

        if (!notificationRef.current.contains(event.target)) {
            newState.openNotification = false
        }

        setState(newState)
    }

    return (
        <Box className={classes[ 'header' ]}>
            <Box className={classes[ 'header-logo' ]} onClick={() => history.push("/")}>
                <Logo />
            </Box>
            <TopSearch />
            <Box className={classes[ 'header-navigation' ]}>
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
                    <Box className={classes[ `header-notification` ]} bordered>
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