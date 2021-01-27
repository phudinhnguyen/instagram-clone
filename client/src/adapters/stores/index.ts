import { combineReducers, configureStore } from "@reduxjs/toolkit"
import listPostsStore from "./listPosts";
import notificationsStore from "./notification";
import profileStore from "./profile"
import userInfoStore from "./userInfo";

const rootReducer = combineReducers({
    profile: profileStore.reducer,
    listPosts: listPostsStore.reducer,
    userInfo: userInfoStore.reducer,
    notification: notificationsStore.reducer,
})

const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>

export default store