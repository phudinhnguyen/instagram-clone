import React, { useState } from 'react';

import Avatar from '@view/atoms/Avatar';
import Box from '@view/atoms/Box';
import Button from '@view/atoms/Button';
import SvgIcon, { HomeIcon, ChatIcon, CompassIcon, HeartIcon } from '@view/atoms/SvgIcon';

import classes from './style.module.scss';

const avatarSrc =
    'https://instagram.fhan3-2.fna.fbcdn.net/v/t51.2885-19/s150x150/112331157_764326777646280_8349960478372336396_n.jpg?_nc_ht=instagram.fhan3-2.fna.fbcdn.net&_nc_ohc=h5_ux_YvNv4AX-3j9Z_&tp=1&oh=034ab902659ba8c1df000c8117c7efd9&oe=603457D9';

export interface TopNavigationProps {
    openNotification?: boolean;
    onOpenNotification?: () => void;
}

const TopNavigation: React.FC<TopNavigationProps> = (props) => {
    const { openNotification, onOpenNotification } = props;

    return (
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
                <Button onClick={() => onOpenNotification && onOpenNotification()}>
                    <HeartIcon isActive={openNotification} />
                </Button>
            </Box>
            <Box className={classes['nav-item']}>
                <Button>
                    <Avatar src={avatarSrc} size="small" />
                </Button>
            </Box>
        </Box>
    );
};

export default TopNavigation;
