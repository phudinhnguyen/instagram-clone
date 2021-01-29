import Home from "@view/pages/Home/index";
import Direct from "@view/pages/Message";

export const routers: Array<{
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
            path: "/direct",
            exact: true,
            isPrivate: true,
            Component: Direct
        },
    ]