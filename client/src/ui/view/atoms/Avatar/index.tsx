import React from 'react';
import classnames from 'classnames';

import classes from './style.module.scss';

export interface AvatarProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    alt?: string;
    className?: string;
    size?: 'large' | 'medium' | 'small';
    src?: string;
    story?: boolean;
    storyActive?: boolean;
    storyLoading?: boolean;
}

const Avatar: React.FC<AvatarProps> = (props) => {
    const {
        alt,
        className,
        size,
        src,
        story,
        storyActive,
        storyLoading,
        ...avatarProps
    } = props;

    return (
        <div
            className={classnames(
                classes['avatar'],
                size !== 'medium' && classes[`avatar-${size}`],
                className
            )}
            {...avatarProps}
        >
            {story && (
                <svg
                    className={classnames(
                        classes['avatar-story'],
                        storyLoading && classes['avatar-story-loading'],
                        storyActive && classes['avatar-story-active']
                    )}
                >
                    <circle cx="50%" cy="50%" r="calc(50% - 2px)" />
                </svg>
            )}
            <img src={src} alt={alt} className={classes['avatar-image']} />
        </div>
    );
};

export default Avatar;
