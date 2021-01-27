import React, { useState, useEffect } from 'react'

import Box from '@view/atoms/Box'

import Header from '@view/organisms/Header'

import classes from './style.module.scss'
import AuthPresenter from 'src/adapters/presentation/auth'
import useUser from 'src/ui/viewModels/useUser'

export interface LayoutProps {
    children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = (props) => {
    const { children } = props
    const { getToken } = new AuthPresenter()
    const { getProfile } = useUser()

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
        const token = getToken()
        if (token) {
            getProfile()
        }
    }, [])

    if (true) {
        return (
            <Box className={classes['layout']} data-device={state.device}>
                <Box className={classes['layout-header']} bordered>
                    <Header />
                </Box>
                <Box className={classes['layout-content']}>{children}</Box>
            </Box>
        )
    } else {
    }
}

export default Layout
