import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useIsLogin } from "../../hooks/useIsLogin";

function AdminTemplate(props) {
  return (
    <>
      <main>{props.children}</main>
    </>
  );
}

const RouterAdminTemplate = ({ path, exact, Component }) => {
  const { isLogin, isLoginToAdmin } = useIsLogin();
  return (
    <Route
      path={path}
      exact={exact}
      render={() =>
        isLogin && isLoginToAdmin === 1 ? (
          <AdminTemplate>
            <Component />
          </AdminTemplate>
        ) : (
          <Redirect
            to={{
              pathname: "/",
            }}
          />
        )
      }
    />
  );
};

export default RouterAdminTemplate;
