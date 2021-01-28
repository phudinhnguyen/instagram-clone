import Gallery from '@view/molecules/gallery'
import React from 'react'
import classes from "./style.module.scss"
const GalleryList = () => {
    const image = [
        {
            id: 1,
            src: "https://st.quantrimang.com/photos/image/2020/06/19/Hinh-Nen-Meo-Ngao-44.jpg"
        },
        {
            id: 2,
            src: "https://st.quantrimang.com/photos/image/2020/06/19/Hinh-Nen-Meo-Ngao-42.jpg"
        },
        {
            id: 3,
            src: "https://st.quantrimang.com/photos/image/2020/06/19/Hinh-Nen-Meo-Ngao-33.jpg"
        },
        {
            id: 4,
            src: "https://st.quantrimang.com/photos/image/2020/06/19/Hinh-Nen-Meo-Ngao-7.jpg"
        },
        {
            id: 5,
            src: "https://st.quantrimang.com/photos/image/2020/06/19/Hinh-Nen-Meo-Ngao-2.jpg"
        },
        {
            id: 6,
            src: "https://st.quantrimang.com/photos/image/2020/06/19/Hinh-Nen-Meo-Ngao-17.jpg"
        },
        {
            id: 7,
            src: "https://st.quantrimang.com/photos/image/2020/06/19/Hinh-Nen-Meo-Ngao-46.jpg"
        },
        {
            id: 8,
            src: "https://static.catsoncatnip.co/images/qHNzRjZWnILx_4333_700.jpg"
        },
        {
            id: 9,
            src: "https://static.catsoncatnip.co/images/mCLGXozirjMq_4333_700.jpg"
        },

    ]
    return (
        <div className={classes[ "gallery" ]}>
            {image.map((item) => {
                return <Gallery src={item.src} key={item.id} />
            })}
        </div>
    )
}

export default GalleryList
