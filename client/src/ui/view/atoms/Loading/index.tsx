import React from "react"
import classes from './style.module.scss'

interface IProps {
    className?: string
}

const Loading = (props: IProps) => {
    const { className } = props
    return <div className={`
        ${ classes[ 'lds-spinner' ] }
        ${ className }
    `}>
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
    </div>
}

export default Loading