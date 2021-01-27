import LoginForm from '@view/organisms/LoginForm';
import React from 'react'
import classes from './style.module.scss';
const LoginTemplate = () => {
    return (
        <div className={classes[ "container" ]}>
            <div className={classes[ "box" ]}>
                <div className={classes[ "heading" ]}></div>
                <LoginForm />
            </div>
            <div className={classes[ "box" ]}>
                <p>Don't have an account? <a className={classes[ "signup" ]} href="#">Sign Up</a></p>
            </div>
        </div>
    )
}

export default LoginTemplate
