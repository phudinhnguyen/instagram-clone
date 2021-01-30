import useClickOutside from "@hook/useClickOutside"
import AuthPresenter from "@presentation/auth"
import { RootState } from "@stores/index"
import Avatar from "@view/atoms/Avatar"
import Button from "@view/atoms/Button"
import { UserCircleIcon, HeaderSettingIcon } from "@view/atoms/SvgIcon"
import Text from "@view/atoms/Text"
import React, { createRef, useState } from "react"
import { useSelector } from "react-redux"
import { useHistory } from "react-router"
import classes from './style.module.scss'
const { logout } = new AuthPresenter()

const HeaderProfile = () => {
    const history = useHistory()
    const menuRef: any = createRef()
    const profile = useSelector((state: RootState) => state.profile)
    const [state, setState] = useState({
        openMenu: false
    })

    useClickOutside([menuRef], (event) => {
        setState(prev => ({ ...prev, openMenu: false }))
    })

    return (
        <div className={classes["header-profile"]}>
            <Button onClick={() => setState(prev => ({ ...prev, openMenu: true }))}>
                <Avatar src={profile.avatar} size="small" />
            </Button>
            <div className={classes["menu-action"]} ref={menuRef}>
                {
                    state.openMenu &&
                    <>
                        <div
                            className={classes["menu-item"]} onClick={() => {
                                history.push(`/profile/${profile._id}`)
                                setState(prev => ({ ...prev, openMenu: false }))
                            }}
                        >
                            <UserCircleIcon />
                            <Text className={classes["text"]}> My profile</Text>
                        </div>
                        <div className={classes["menu-item"]}>
                            <HeaderSettingIcon />
                            <Text className={classes["text"]} > Setting</Text>
                        </div>
                        <div
                            className={classes["menu-item"]}
                            onClick={() => {
                                logout()
                                history.push("/login")
                            }}
                        >
                            Log out
                        </div>
                    </>
                }
            </div>
        </div>

    )
}

export default HeaderProfile