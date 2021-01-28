import React from 'react';

import Box from '@view/atoms/Box';
import Text from '@view/atoms/Text';

import classes from './style.module.scss';
import NotificationEntity from '@entities/notification';
import Avatar from '@view/atoms/Avatar';
import Button from '@view/atoms/Button';

export interface NotificationProps {
    notification: NotificationEntity
}

const Notification: React.FC<NotificationProps> = (props) => {

    const { notification } = props

    return (
        <Box className={classes[ 'profile-card' ]} bordered>
            <Box className={classes[ 'profile-card-icon' ]}>
                <Avatar src={notification.createdby.avatar} />
            </Box>
            <Box className={classes[ 'profile-card-info' ]}>
                <Box className={classes[ 'profile-card-info-title' ]}>
                    <Text fontWeight="bold">{notification.createdby.userName}</Text>
                    <Text>{notification.content}</Text>
                </Box>
            </Box>
            {
                notification.type == 3 && <Box className={classes[ 'profile-card-actions' ]}>
                    <React.Fragment>
                        <Button variant="contained">Theo dõi</Button>
                        <Button variant="outlined">Xóa</Button>
                    </React.Fragment>
                </Box>
            }

            {
                notification.post?.medias && <Box className={classes[ 'post' ]}>
                    <img src={notification.post.medias[ 0 ]} alt="" />
                </Box>
            }
        </Box>
    );
};

export default Notification;