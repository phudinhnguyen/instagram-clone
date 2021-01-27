import Home from "@view/pages/Home/index";

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
    ]