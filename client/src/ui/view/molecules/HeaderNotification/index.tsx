import React, { createRef, useState } from 'react';

import Box from '@view/atoms/Box';

import classes from './style.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '@stores/index';
import useNotification from 'src/ui/viewModels/useNotification';
import { useHistory } from 'react-router';
import Notification from '../Notification';
import Button from '@view/atoms/Button';
import { HeartIcon } from '@view/atoms/SvgIcon';
import Loading from '@view/atoms/Loading';
import NotificationEntity from '@entities/notification';
import useClickOutside from '@hook/useClickOutside';

const HeaderNotification = (props) => {

    const listNotificationStore = useSelector((state: RootState) => state.notification)
    const { getListNotification, listNotification } = useNotification(listNotificationStore)
    const history = useHistory()
    const notificationRef: any = createRef()
    const buttonNotificationRef: any = createRef()

    const [state, setState] = useState({
        openNotification: false,
    })

    useClickOutside([notificationRef], (event) => {
        setState(prev => ({ ...prev, openNotification: false }))
    })

    return (
        <Box className={classes["wrap-notification"]}>
            <Button ref={buttonNotificationRef} onClick={() => {
                setState(prev => ({ ...prev, openNotification: !prev.openNotification }))
                getListNotification.execute()
            }}>
                <HeartIcon isActive={state.openNotification} />
            </Button>
            <Box className={classes['profile-card']}>
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
        </Box>
    );
};

export default HeaderNotification;