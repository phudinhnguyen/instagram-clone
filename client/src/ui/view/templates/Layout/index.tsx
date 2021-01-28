import React, { useState, useEffect } from 'react'

import Box from '@view/atoms/Box'

import Header from '@view/organisms/Header'

import classes from './style.module.scss'

export interface LayoutProps {
    children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = (props) => {
    const { children } = props

    const [state, setState] = useState(() => {
        return {
            device: 'desktop',
        }
    })

    useEffect(() => {
        if (/Android|webOS|iPhone|iPad|iPod|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            setState((prevState) => {
                return { ...prevState, device: 'mobile' }
            })
        }
    }, [])

    return (
        <Box className={classes['layout']} data-device={state.device}>
            <Box className={classes['layout-header']} bordered>
                <Header />
            </Box>
            <Box className={classes['layout-content']}>{children}</Box>
        </Box>
    )
}

export default Layout
