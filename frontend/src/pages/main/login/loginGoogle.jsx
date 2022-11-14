import React, { useEffect } from "react";
import GoogleLogin from "react-google-login";
import axios from "axios";
import { useDispatch } from "react-redux";
import { postLoginSuccess } from "../../../store/actions/user.action";
import { gapi } from "gapi-script";
import { NotificationManager } from "react-notifications";

const clientId =
  "874015971178-0461l5tlksvspu487u08779128bn5rn7.apps.googleusercontent.com";
export default function LoginGoogle() {
  const dispatch = useDispatch();

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "email",
      });
    }
    gapi.load("client:auth2", start);
  }, []);

  const config = {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  };
  const onSuccess = async (res) => {
    try {
      let jwtToken = await axios.post(
        `${process.env.REACT_APP_API_URL}/oauth2`,
        JSON.stringify(res),
        config
      );
      if (jwtToken.status === 200) {
        localStorage.setItem("userLogin", JSON.stringify(jwtToken.data));
      }
      dispatch(postLoginSuccess(jwtToken.data));
      console.log(JSON.stringify(res));
    } catch (err) {
      NotificationManager.error("Account has been blocked!!!");
    }
  };
  const onFailure = (res) => {
    console.log("onFailure", res);
  };
  return (
    <GoogleLogin
      render={(renderProps) => (
        <div className="wr-btn">
          <button
            className="btn btn-google btn--m"
            type="button"
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            <i className="ic ic-google" /> Google
          </button>
        </div>
      )}
      buttonText="Login"
      clientId={clientId}
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={"single_host_origin"}
    />
  );
}
