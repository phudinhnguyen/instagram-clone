import React from 'react'
import classes from "./style.module.scss"
import GalleryList from '@view/organisms/gallerylist'
import ProfileHeader from '@view/organisms/profileHeader'
import Loading from '@view/atoms/Loading'
const ProFilePage = () => {
    return (
        <div className={classes["profile"]}>
            <header>
                <div className={classes["container"]}>
                    <ProfileHeader />
                </div>
            </header>
            <main>
                <div className={classes["container"]}>
                    <GalleryList />
                    <Loading />
                </div>
            </main>
        </div >
    )
}

export default ProFilePage
