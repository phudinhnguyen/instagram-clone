import React from 'react';
import classnames from 'classnames';

import classes from './style.module.scss';

export interface ButtonProps
    extends React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    children?: React.ReactNode;
    disabled?: boolean;
    fullWidth?: boolean;
    variant?: 'contained' | 'outlined' | 'text';
}

const Button: React.FC<ButtonProps> = (props) => {
    const { children, className, fullWidth, variant = 'text', ...buttonProps} = props;

    return (
        <button
            className={classnames(
                classes['button'],
                fullWidth && classes['button-full-width'],
                variant && classes[`button-${variant}`],
                className
            )}
            {...buttonProps}
        >
            {children}
        </button>
    );
};

export default Button;
