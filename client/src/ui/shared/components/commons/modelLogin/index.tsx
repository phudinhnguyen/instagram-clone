import React, { useState } from 'react'
import AuthPresenter from 'src/adapters/presentation/auth';
import "./style.scss"

const ModelLogin = (props) => {
    const [state, setState] = useState({
        register: true,
        login: false
    });
    const [inputs, setInputs] = useState({
        userName: '',
        email: '',
        password: ''
    })
    const handleInput = (e: any) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value,
            [e.target.name]: e.target.value,
            [e.target.name]: e.target.value
        });
    }

    const formToogle = () => {
        setState({
            ...state,
            register: !state.register,
            login: !state.login
        })

    }

    const closeModel = (e: any) => {
        const className = e.target.getAttribute("class");
        if (className === "model") {
            props.setVisible(false);
        }
    }

    const onSubmit = (e: any) => {
        e.preventDefault();
        new AuthPresenter().login(inputs)
    }

    return (
        <div className="model" onClick={closeModel}>
            <div className="model__container">
                {
                    state.register ? <div className="model__model__form">
                        <form onSubmit={onSubmit}>
                            <div className="model__group">
                                <img src="/images/logo_header.png" alt="image" />
                            </div>
                            <div className="model__group">
                                <input type="text" name="userName" className="model__input" placeholder="UserName..."
                                    value={inputs.userName}
                                    onChange={handleInput}
                                />
                            </div>
                            <div className="model__group">
                                <input type="email" name="email" className="model__input" placeholder="Email..."
                                    value={inputs.email}
                                    onChange={handleInput} />
                            </div>
                            <div className="model__group">
                                <input type="password" name="password" className="model__input" placeholder="Password..."
                                    value={inputs.password}
                                    onChange={handleInput} />
                            </div>
                            <div className="model__group">
                                <input type="submit" value="Register" className="btn btn-smart" />
                            </div>
                            <div className="model__group">
                                <span onClick={formToogle}>Already have an account?</span>
                            </div>
                        </form>
                    </div> : <div className="model__model__form">
                            {/* <form> */}
                            <div className="model__group">
                                <img src="/images/logo_header.png" alt="image" />
                            </div>
                            <div className="model__group">
                                <input type="text"
                                    value={inputs.userName}
                                    onChange={handleInput}
                                    name="userName"
                                    className="model__input" placeholder="User name" />
                            </div>
                            <div className="model__group">
                                <input
                                    value={inputs.password}
                                    onChange={handleInput}
                                    type="password" name="password" className="model__input" placeholder="Password..." />
                            </div>
                            <div className="model__group">
                                <button onClick={onSubmit} className="btn btn-smart">submit</button>
                            </div>
                            <div className="model__group">
                                <span onClick={formToogle}>Create a new account ?</span>
                            </div>
                            {/* </form> */}
                        </div>
                }

            </div>
        </div>
    )
}

export default ModelLogin
