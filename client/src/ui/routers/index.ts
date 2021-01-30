import Home from "@view/pages/Home/index";
import LoginPage from "@view/pages/Login";
import Message from "@view/pages/Message";
import ProFilePage from "@view/pages/Profile";

export const privateRouter: Array<{
    path: string,
    exact: boolean,
    isPrivate: boolean,
    Component: any
}> = [
        {
            path: "/",
            exact: true,
            isPrivate: true,
            Component: Home
        },
        {
            path: "/profile/:userId",
            exact: true,
            isPrivate: true,
            Component: ProFilePage
        },
        {
            path: "/direct/:userId",
            exact: true,
            isPrivate: true,
            Component: Message
        },
    ]

export const publicRouter: Array<{
    path: string,
    exact: boolean,
    isPrivate: boolean,
    Component: any
}> = [
        {
            path: "/login",
            exact: true,
            isPrivate: false,
            Component: LoginPage
        },
    ]