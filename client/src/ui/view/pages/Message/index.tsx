import Layout from "@view/templates/Layout"
import { EditIcon, DownIcon, InfomationIcon } from "@view/atoms/SvgIcon"
import React from "react"
import classes from './style.module.scss'
import Text from "@view/atoms/Text"
import Avatar from "@view/atoms/Avatar"
import ProfileCard from "@view/molecules/ProfileCard"
const avataSrc = "https://instagram.fsgn5-7.fna.fbcdn.net/v/t51.2885-19/s150x150/119054746_313241306437907_905832959585036686_n.jpg?_nc_ht=instagram.fsgn5-7.fna.fbcdn.net&_nc_ohc=2tgYZLn7lJkAX-t2UG4&tp=1&oh=d489aece97bd5522bc6c890e039fcafc&oe=603C86F7"

const Message = props => {
    return <Layout>
        <div className={classes[ "message-page" ]}>
            <div className={classes[ "wrap" ]}>
                <div className={classes[ "header" ]}>
                    <span className={classes[ "myprofile" ]}>
                        <Text className={classes[ "name" ]}>devphuc</Text>
                        <DownIcon />
                    </span>
                    <div className={classes[ "edit-icon" ]}>
                        <EditIcon />
                    </div>
                </div>

                <div className={classes[ "list-boxchat" ]}>
                    <ProfileCard
                        bordered={false}
                        key={'_id'}
                        icon={<Avatar className={classes[ "avatar" ]} src={avataSrc} />}
                        title={"devphuc"}
                        subtitle={<div className={classes[ "message-info" ]}>
                            <Text className={classes[ "last-message" ]}>Good morning . </Text>
                            <Text className={classes[ "last-time" ]}>3w</Text>
                        </div>}
                    />
                </div>
            </div>

            <div className={classes[ "wrap-list-messages" ]}>
                <div className={classes[ "header" ]}>
                    <ProfileCard
                        bordered={false}
                        key={'_id'}
                        icon={<Avatar className={classes[ "avatar" ]} src={avataSrc} />}
                        title={"devphuc"}
                        subtitle="active 3m ago"
                    />
                    <div className={classes[ "infomation-icon" ]}>
                        <InfomationIcon />
                    </div>
                </div>
                <div className={classes[ "list-messages" ]}>
                    <div className={`${ classes[ "wrap-message" ] } ${ classes[ `author` ] }`}>
                        <span className={`${ classes[ `message` ] }`}>
                            helu1
                        </span>
                    </div>

                    <div className={`${ classes[ "wrap-message" ] } ${ classes[ `other` ] }`}>
                        <span className={`${ classes[ `message` ] }`}>
                            helu1
                        </span>
                    </div>

                    <div className={`${ classes[ "wrap-message" ] } ${ classes[ `other` ] }`}>
                        <span className={`${ classes[ `message` ] }`}>
                            helu1
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
}

export default Message