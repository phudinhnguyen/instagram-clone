import React from "react"
import classes from './style.module.scss'

const Loading = () => {
    return <div className={classes[ 'lds-spinner' ]}>
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
    </div>
}

export default Loading