import React, { useEffect } from 'react';

import Box from '@view/atoms/Box';

import Post from '@view/molecules/Post';

import classes from '@view/organisms/PostList/style.module.scss';
import uselistPosts from 'src/ui/viewModels/useListPosts';
import { useSelector } from 'react-redux';
import PostEntities from '@entities/post';
import { RootState } from '@stores/index';

const PostList = () => {
    const listPostsStore = useSelector((state: RootState) => state.listPosts)
    const { getlistPosts, listPosts } = uselistPosts(listPostsStore)

    useEffect(() => {
        getlistPosts.execute()
    }, [])

    return (
        <Box className={classes['post-list']}>
            {
                listPosts.map((post: PostEntities) => {
                    return <Post post={post} />
                })
            }
        </Box>
    );
};

export default PostList;