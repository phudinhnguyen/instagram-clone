import React from 'react';

import Box from '@view/atoms/Box';
import Modal from '@view/atoms/Modal';

import PostHeader from '@view/molecules/Post/PostHeader';
import PostContent from '@view/molecules/Post/PostContent';
import PostActions from '@view/molecules/Post/PostActions';
import PostCountHeart from '@view/molecules/Post/PostCountHeart';
import PostStatus from '@view/molecules/Post/PostStatus';
import PostCountComment from '@view/molecules/Post/PostCountComment';
import PostComment from '@view/molecules/Post/PostComment';
import PostAddComment from '@view/molecules/Post/PostAddComment';

import classes from '@view/molecules/Post/style.module.scss';
import PostEntities from '@entities/post';

interface IProps {
    post: PostEntities
}

const Post = (props: IProps) => {
    const { post } = props

    return (
        <Box className={classes[ 'post' ]} bordered>
            <PostHeader post={post} />
            <PostContent post={post} />
            <Box className={classes[ 'post-footer' ]}>
                <PostActions post={post} />
                <PostCountHeart />
                <PostStatus post={post} />
                <PostCountComment />
                <PostComment />
                <PostAddComment />
            </Box>

            <Modal>
                <Box className={classes[ 'post-modal' ]}>
                    <Box className={classes[ 'post-modal-content' ]}>
                        <PostContent post={post} />
                    </Box>
                    <Box className={classes[ 'post-modal-sidebar' ]}>
                        <PostHeader post={post} />
                        <Box style={{ flexGrow: 1 }}>
                            <Box>
                                <PostStatus post={post} />
                                <PostComment />
                            </Box>
                        </Box>
                        <PostActions post={post} />
                        <PostCountHeart />
                        <PostAddComment />
                    </Box>
                </Box>
            </Modal>
        </Box>
    );
};

export default Post;
