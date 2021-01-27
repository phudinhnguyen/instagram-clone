import { createSlice } from '@reduxjs/toolkit'
import User from 'src/domain/entities/user'

const profileStore = createSlice({
    name: 'user',
    initialState: {} as User,
    reducers: {
        fetchProfile: (state, action) => {
            return new User(action.payload)
        },
    },
})

export default profileStore