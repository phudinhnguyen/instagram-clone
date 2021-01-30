import React, { createRef, useState, useEffect } from 'react'

import Box from '@view/atoms/Box'

import Logo from '@view/molecules/Logo'
import TopSearch from '@view/molecules/TopSearch'

import classes from './style.module.scss'
import useNotification from 'src/ui/viewModels/useNotification'
import { useSelector } from 'react-redux'
import { RootState } from '@stores/index'
import NotificationEntity from '@entities/notification'
import Notification from '@view/molecules/Notification'
import Loading from '@view/atoms/Loading'
import { useHistory } from 'react-router'
import Button from '@view/atoms/Button'
import { ChatIcon, CompassIcon, HomeIcon } from '@view/atoms/SvgIcon'
import HeaderNotification from '@view/molecules/HeaderNotification'
import HeaderProfile from '@view/molecules/HeaderProfile'

const Header = () => {
    const listNotificationStore = useSelector((state: RootState) => state.notification)
    const { getListNotification, listNotification } = useNotification(listNotificationStore)
    const history = useHistory()
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

        if (!notificationRef.current.contains(event.target)) {
            newState.openNotification = false
        }

        setState(newState)
    }

    return (
        <Box className={classes['header']}>
            <Box className={classes['header-logo']} onClick={() => history.push("/")}>
                <Logo />
            </Box>
            <TopSearch />
            <Box className={classes['header-navigation']}>
                <Box className={classes['nav']}>
                    <Box className={classes['nav-item']}>
                        <Button>
                            <HomeIcon />
                        </Button>
                    </Box>
                    <Box className={classes['nav-item']}>
                        <Button>
                            <ChatIcon />
                        </Button>
                    </Box>
                    <Box className={classes['nav-item']}>
                        <Button>
                            <CompassIcon />
                        </Button>
                    </Box>
                    <Box className={classes['nav-item']}>
                        <HeaderNotification />
                    </Box>
                    <Box className={classes['nav-item']}>
                        <HeaderProfile />
                    </Box>
                </Box>
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