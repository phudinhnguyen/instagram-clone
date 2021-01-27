import NotificationEntity from "@entities/notification"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type IStore = Array<NotificationEntity>

const notificationsStore = createSlice({
    name: 'notifications',
    initialState: [] as IStore,
    reducers: {
        fetchList: (state, action: PayloadAction<IStore>) => {
            if (!Array.isArray(action.payload)) return state

            return action.payload
        },
        updateList: (state, action: PayloadAction<IStore>) => {
            if (!Array.isArray(action.payload)) return state

            let newState = [ ...state ]

            newState.push(...action.payload)

            return newState
        }
    }
})

export default notificationsStore