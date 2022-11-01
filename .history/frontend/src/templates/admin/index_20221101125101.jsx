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
