import React from 'react';

import Box from '@view/atoms/Box';

import classes from '@view/organisms/layout/style.module.scss';

export interface LayoutProps {
    children?: React.ReactNode;
}

export interface LayoutInterface extends React.FC<LayoutProps> {
    Header: typeof LayoutHeader;
    Main: typeof LayoutMain;
}

const Layout: LayoutInterface = (props) => {
    return <Box className={classes[ 'layout' ]}>{props.children}</Box>;
};

const LayoutHeader: React.FC<LayoutProps> = (props) => {
    return <Box className={classes[ 'layout-header' ]}>{props.children}</Box>;
};

const LayoutMain: React.FC<LayoutProps> = (props) => {
    return <Box className={classes[ 'layout-main' ]}>{props.children}</Box>;
};

Layout.Header = LayoutHeader;
Layout.Main = LayoutMain;

export default Layout;
