import React, { useEffect } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import AuthPresenter from "src/adapters/presentation/auth";

function PrivateLogin(Component: React.ComponentType<any | string>) {
  return withRouter(({ history }: RouteComponentProps) => {

    const { getToken } = new AuthPresenter()
    const token = getToken()

    return (
      <>
        <Component privateLogin={!!token} />
      </>
    );
  });
}

export default PrivateLogin;
