import PrivateLogin from "src/ui/shared/hoc/PrivateLogin"
import React from "react"
import { Route, Switch } from "react-router-dom"
import "./../src/ui/styles/styles.scss"
import { routers } from "./ui/routers"

const App = () => {

  return (
    <Switch>
      {
        routers.map(router => {
          return <Route key={router.path} path={router.path} exact={router.exact} component={router.Component} />
        })
      }
    </Switch>
  )
}

export default PrivateLogin(App)
