import React from "react";
import { Route, Redirect } from "react-router-dom";
import Footer from "../../components/Footer";
import HeaderLogin from "../../components/HeaderLogin";
import { useIsLogin } from "./../../hooks/useIsLogin";
function LoginTemplate(props) {
  return (
    <>
      <HeaderLogin />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}

const RouterSignTemplate = ({ path, exact, Component }) => {
  const { isLogin } = useIsLogin();
  return (
    <Route
      path={path}
      exact={exact}
      render={() =>
        !isLogin ? (
          <LoginTemplate>
            <Component />
          </LoginTemplate>
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

export default RouterSignTemplate;
