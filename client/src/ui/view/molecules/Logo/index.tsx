import React from 'react';

import Box from '@view/atoms/Box';
import classes from './style.module.scss';

const Logo = () => {
    return (
        <Box className={classes['logo']}>
            <img
                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                alt="Logo"
            />
        </Box>
    );
};

export default Logo;
