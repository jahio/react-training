import React, { useReducer } from "react";
import LoginComponent from "../components/LoginComponent";
import apiHelper from "../api/apiHelper";
import * as yup from "yup";
import { Redirect } from "react-router-dom";
import DashboardContainer from "./DashboardContainer";
import loginReducer from "../reducers/loginReducer";

const LoginContainer = () => {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  const initialState = { username: "", password: "", userDetails: {} };

  const [state, dispatch] = useReducer(loginReducer, initialState);

  const logValues = () => {
    console.log(state.username);
    console.log(state.password);
  };

  let schema = yup.object().shape({
    username: yup.string().min(3).required(),
    password: yup.string().min(6).required(),
  });

  const validateData = () => {
    schema
      .validate(
        { username: state.username, password: state.password },
        { abortEarly: false }
      )
      .then(() => {
        apiHelper("post", "https://api.taiga.io/api/v1/auth", {
          username: state.username,
          password: state.password,
          type: "normal",
        })
          .then(({ response }) => {
            dispatch({ type: "SET_USER_DETAILS", value: response });
            console.log(response);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log("validation error", err);
      });
  };

  if (state.userDetails.auth_token) {
    Redirect(<DashboardContainer state={state} dispatch={dispatch} />);
  }

  return (
    <LoginComponent
      logValues={logValues}
      username={state.username}
      password={state.password}
      reducer={loginReducer}
      dispatch={dispatch}
      state={state}
      validateData={validateData}
    />
  );
};

export default LoginContainer;
