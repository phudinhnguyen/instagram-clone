import React, { useState } from 'react'
import classes from "@view/molecules/FormLogin/style.module.scss"
import Input from '@view/atoms/Input'
import AuthPresenter from 'src/adapters/presentation/auth'
import { useHistory, withRouter } from 'react-router'

const FormLogin = () => {

    const { login } = new AuthPresenter()
    const history = useHistory()
    const [state, setState] = useState({
        userName: '',
        password: ''
    })

    const onChange = (e) => {
        const { name, value } = e.target
        setState(prev => ({ ...prev, [name]: value }))
    }

    const submit = () => {
        login(state).then(res => {
            history.push('/')
        })
    }

    return (
        <div className={classes["login-form"]}>
            <div className={classes["field"]}>
                <Input id="username"
                    name="userName"
                    type="text"
                    value={state.userName}
                    onChange={onChange}
                    placeholder="Phone number, username, or email" />
                <label htmlFor="username">Phone number, username, or email</label>
            </div>
            <div className={classes["field"]}>
                <Input onChange={onChange} value={state.password} id="password" name="password" type="password" placeholder="password" />
                <label htmlFor="password">Password</label>
            </div>
            <button onClick={submit} className={classes["login-button"]} title="login">Log In</button>
            <div className={classes["separator"]}>
                <div className={classes["line"]}></div>
                <p>OR</p>
                <div className={classes["line"]}></div>
            </div>
            <div className={classes["other"]}>
                <button className={classes["fb-login-btn"]}>
                    <i className="fa fa-facebook-official fb-icon"></i>
                    <span className={classes[""]}>Log in with Facebook</span>
                </button>
                <a className={classes["forgot-password"]} href="#">Forgot password?</a>
            </div>
        </div>
    )
}

export default withRouter(FormLogin)
