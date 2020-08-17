import React, { useReducer } from "react";
import LoginComponent from "../components/LoginComponent";
import apiHelper from "../api/apiHelper";
import * as yup from "yup";

const LoginContainer = () => {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  const initialState = { username: "", password: "" };

  const reducer = (state, action) => {
    console.log("state", state);
    console.log("action", action);
    switch (action.type) {
      case "setUsername":
        return { username: state.value }; // How do I tell it to use the form field value?
      case "setPassword":
        return { password: state.value };
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

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
          .then((response) => {
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

  return (
    <LoginComponent
      logValues={logValues}
      username={state.username}
      password={state.password}
      reducer={reducer}
      dispatch={dispatch}
      state={state}
      validateData={validateData}
    />
  );
};

export default LoginContainer;
