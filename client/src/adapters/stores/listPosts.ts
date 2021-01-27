import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Comment from '@entities/comment'
import Post from 'src/domain/entities/post'
import { indexOfArrayObject } from '@helper/functions'

type IStore = {
    [postId: string]: Post
}

const listPostsStore = createSlice({
    name: 'listPosts',
    initialState: {} as IStore,
    reducers: {
        fetchListPost: (state, action: PayloadAction<Array<Post>>) => {
            if (!Array.isArray(action.payload)) return state

            const newState = {}

            action.payload.forEach(item => {
                const post = new Post(item)
                newState[post._id] = post
            })

            return newState
        },
        updateListPost: (state, action: PayloadAction<Array<any>>) => {
            if (!Array.isArray(action.payload)) return state

            const newState = { ...state }

            action.payload.forEach(post => {
                newState[post._id] = {
                    ...newState[post._id],
                    ...post
                }
            })

            return newState
        },
        deleteListPost: (state, action: PayloadAction<Array<Post>>) => {
            if (!Array.isArray(action.payload)) return state

            const newState = { ...state }

            action.payload.forEach(item => {
                const post = new Post(item)
                delete newState[post._id]
            })

            return newState
        },
        fetchListComment: (state, action: PayloadAction<Post>) => {
            const newState = { ...state }
            const newPost = new Post(action.payload)

            newState[newPost._id].listComment = newPost.listComment

            return newState
        },
        updateListComment: (state, action: PayloadAction<Post>) => {
            const newState = { ...state }
            const newPost = action.payload

            newPost.listComment.forEach(comment => {
                // check xem comment này có trong list cũ chưa
                const index = indexOfArrayObject(state.listComment, '_id', comment._id)
                if (index == -1) { // không có
                    newState[newPost._id].listComment.push({
                        ...newState[newPost._id].listComment[index],
                        ...comment
                    })
                } else { // có
                    newState[newPost._id].listComment[index] = {
                        ...newState[newPost._id].listComment[index],
                        ...comment
                    }
                }
            })

            return newState
        },
        deleteListComment: (state, action: PayloadAction<Post>) => {
            const newState = { ...state }
            const newPost = action.payload

            newPost.listComment.forEach(comment => {
                const index = indexOfArrayObject(state.listComment, '_id', comment._id)
                const currentListComment = newState[newPost._id].listComment.slice(index, 1)
                newState[newPost._id].listComment = currentListComment
            })
        }
    },
})

export default listPostsStore