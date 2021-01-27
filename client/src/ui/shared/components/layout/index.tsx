import React, { useEffect, useState } from 'react'
import "./style.scss"
import {
    FaSearch,
    FaTelegramPlane,
    FaRegCompass,
    FaRegHeart
} from "react-icons/fa"
import { MdHome } from "react-icons/md"

import ModelLogin from '@components/commons/modelLogin'
import { useSelector } from 'react-redux'
import User from '@entities/user'
import useUser from 'src/ui/viewModels/useUser'

const DefaultLayout = (props) => {
    const [ visible, setVisible ] = useState(false);
    const profile: User = useSelector(state => state.profile)
    const { getProfile } = useUser()

    useEffect(() => {
        getProfile()
    }, [])

    const onpenForm = () => {
        setVisible(true)
    }

    return (
        <>
            <div className="navbar">
                <div className="navbar__first">
                    <div className="navbar__first-logo">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png" alt="logo" />
                    </div>
                </div>
                <div className="navbar__middle">
                    <div className="navbar__middle-search">
                        <FaSearch className="searchIcon" />
                        <input type="text" className="nav__search" placeholder="Search" />
                        <div className="listuser-dropdown">

                        </div>
                    </div>
                </div>
                <div className="navbar__last">
                    <li>
                        <MdHome className="navbar__icons" />
                    </li>
                    <li>
                        <FaTelegramPlane className="navbar__icons" />
                    </li>
                    <li>
                        <FaRegCompass className="navbar__icons" />
                    </li>
                    <li>
                        <FaRegHeart className="navbar__icons" />
                    </li>
                    {
                        profile._id ? <div className="header-avatar">
                            <img src={profile.avatar} /></div>
                            :
                            <li onClick={onpenForm}>Register/Login</li>
                    }

                </div>
                {
                    visible && <ModelLogin visible={visible} setVisible={setVisible} />
                }
            </div>
            <div className="container">
                {props.children}
            </div>
        </>

    )
}

export default DefaultLayout