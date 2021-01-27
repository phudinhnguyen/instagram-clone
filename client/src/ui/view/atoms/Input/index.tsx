import React from 'react';
import classnames from 'classnames';

export interface InputProps
    extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
    > { }

import classes from './style.module.scss';

const Input: React.FC<InputProps> = (props) => {
    const { ...inputProps } = props;
    return <input className={classnames(classes['input'])} {...inputProps} />;
};

export default Input;
