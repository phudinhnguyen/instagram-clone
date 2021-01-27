import React from 'react';
import classnames from 'classnames';

import classes from './style.module.scss';

export interface TextProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
    children?: React.ReactNode;
    fontWeight?: 'initial' | 'bold';
    size?: 'large' | 'medium' | 'small';
    color?: 'primary' | 'secondary' | 'info' | 'danger';
}

const Text: React.FC<TextProps> = (props) => {
    const { fontWeight, size, color, ...textProps } = props;
    return (
        <span
            className={classnames(
                classes['text'],
                fontWeight !== 'initial' && classes[`text-${fontWeight}`],
                size !== 'medium' && classes[`text-${size}`],
                color !== 'primary' && classes[`text-${color}`]
            )}
            {...textProps}
        />
    );
};

export default Text;