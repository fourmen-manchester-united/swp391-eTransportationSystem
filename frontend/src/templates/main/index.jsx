import React from "react";
import { Route } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HeaderLogin from "../../components/HeaderLogin";
import { useIsLogin } from "../../hooks/useIsLogin";

function MainTemplate(props) {
  const { isLogin } = useIsLogin();
  return (
    <>
      {isLogin ? <Header /> : <HeaderLogin />}
      <main>{props.children}</main>
      <Footer />
    </>
  );
}

const RouterMainTemplate = ({ path, exact, Component }) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={() => (
        <MainTemplate>
          <Component />
        </MainTemplate>
      )}
    />
  );
};

export default RouterMainTemplate;
