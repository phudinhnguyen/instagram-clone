import React from 'react';
import classnames from 'classnames';

import classes from './style.module.scss';

export interface BoxProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children?: React.ReactNode;
    bordered?: boolean;
    isLoading?: boolean;
}
export type Ref = HTMLDivElement;

const Box: React.FC<BoxProps> = (props) => {
    const { children, className, bordered, isLoading, ...boxProps } = props;

    return (
        <div
            className={classnames(
                classes[ 'box' ],
                bordered && classes[ 'box-bordered' ],
                isLoading && classes[ 'box-loading' ],
                className
            )}
            {...boxProps}
        >
            {children}
        </div>
    );
};

export default Box;
