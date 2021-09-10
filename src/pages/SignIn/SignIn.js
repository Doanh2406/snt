import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../redux/actions/userActions";
import "./SignIn.css";

export default function SignIn() {
  const [apiKey, setApiKey] = useState("");
  const [secret, setSecret] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfor } = userLogin;

  const handleSignin = () => {
    dispatch(
      login({
        apiKey,
        secret,
      })
    );
  };
  useEffect(() => {
    if (userInfor) {
      history.push("/animal");

      console.log("his login hoat dong")
    }
  }, [history, userInfor]);

  return (
    <div className="sign-container">
      <div className="sign-form">
        <div className="sign-form__left">
          <p>Sign In</p>
          <p>Sign in to continue</p>
          <div className="sign-form__input">
            <input
              required
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="Enter your API key"
            />
            <input
              type="password"
              required
              value={secret}
              onChange={(e) => setSecret(e.target.value)}
              placeholder="Enter your SECRET"
            />

            <div className="sign-form__title">
              <p>Can't access your account?</p>
              <span>Reset your password now.</span>
            </div>
          </div>

          <button
            className="sign-form__button-sign"
            onClick={() => handleSignin()}
          >
            Sign In
          </button>
          {loading && <span className="error">Something went wrong!!!</span>}
        </div>
        <div className="sign-form__line" />
        <div className="sign-form__right">
          <p className="sign-form__text sign-form__text--large">
            Welcome to Ainmal Store
          </p>
          <p className="sign-form__text sign-form__text--medium">
            Copy the content below:
          </p>
          <div className="sign-form__api-key">
            <p className="sign-form__text sign-form__text--medium">API key: </p>
            <p className="sign-form__text sign-form__text--small">
              v3YvEB7MQAmosLDjPHKa3LWyfEikMU5GVzZqNLF77lFP2hsKuQ
            </p>
          </div>

          <p className="sign-form__text sign-form__text--medium">Secret:</p>
          <p className="sign-form__text sign-form__text--small">
            91BEGtP8Iv5UcmGpEljgKTzYCmNwUAvCwMSyFi1H
          </p>
        </div>
      </div>
    </div>
  );
}
