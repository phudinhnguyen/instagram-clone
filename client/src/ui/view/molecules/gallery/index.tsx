import React from 'react'
import classes from "./style.module.scss"
import { FaRegComment, FaRegHeart } from "react-icons/fa"
const Gallery = (props) => {
    return (
        <div className={classes[ "gallery-item" ]} tabIndex={0}>

            <img src={props.src} className={classes[ "gallery-image" ]} alt="" />

            <div className={classes[ "gallery-item-info" ]}>

                <ul>
                    <li className={classes[ "gallery-item-likes" ]}><span className={classes[ "visually-hidden" ]}></span><FaRegHeart className={classes[ "fa-heart" ]} /> 56</li>
                    <li className={classes[ "gallery-item-comments" ]}><span className={classes[ "visually-hidden" ]}></span><FaRegComment className={classes[ "fa-comment" ]} /> 2</li>
                </ul>

            </div>

        </div>
    )
}

export default Gallery
