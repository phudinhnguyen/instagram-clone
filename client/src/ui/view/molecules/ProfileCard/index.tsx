import React from 'react';

import Box from '@view/atoms/Box';
import Text from '@view/atoms/Text';

import classes from './style.module.scss';

export interface ProfileCardProps {
    action?: React.ReactNode;
    context?: React.ReactNode;
    icon?: React.ReactNode;
    subtitle?: React.ReactNode;
    title?: React.ReactNode;
    bordered?: boolean;
}

const ProfileCard: React.FC<ProfileCardProps> = (props) => {
    const { action, context, icon, subtitle, title, bordered = true } = props;
    return (
        <Box className={classes[ 'profile-card' ]} bordered={bordered}>
            {icon && <Box className={classes[ 'profile-card-icon' ]}>{icon}</Box>}
            <Box className={classes[ 'profile-card-info' ]}>
                {title && (
                    <Box className={classes[ 'profile-card-info-title' ]}>
                        <Text fontWeight="bold">{title}</Text>
                    </Box>
                )}
                {subtitle && (
                    <Box className={classes[ 'profile-card-info-subtitle' ]}>
                        <Text>{subtitle}</Text>
                    </Box>
                )}
                {context && <Box className={classes[ 'profile-card-info-context' ]}>{context}</Box>}
            </Box>
            {action && <Box className={classes[ 'profile-card-actions' ]}>{action}</Box>}
        </Box>
    );
};

export default ProfileCard;
