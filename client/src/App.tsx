import PrivateLogin from "src/ui/shared/hoc/PrivateLogin"
import React, { useEffect, useMemo } from "react"
import { Route, Switch, useHistory } from "react-router-dom"
import "./../src/ui/styles/styles.scss"
import { privateRouter, publicRouter } from "./ui/routers"
import useUser from "./ui/viewModels/useUser"
import AuthPresenter from "@presentation/auth"

const App = () => {
  const { getToken } = new AuthPresenter()
  const { getProfile } = useUser()
  const history = useHistory()
  const token = getToken()

  useEffect(() => {
    if (token) {
      getProfile()
    } else {
      history.push('/login')
    }
  }, [])

  const routers = useMemo(() => {
    if (token) return privateRouter
    return publicRouter
  }, [token])

  return (
    <Switch>
      {
        routers.map(router => {
          return <Route
            key={router.path}
            path={router.path}
            exact={router.exact}
            component={router.Component}
          />
        })
      }
    </Switch>
  )
}

export default PrivateLogin(App)