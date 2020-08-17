import React, { useState } from "react";
import LoginComponent from "../components/LoginComponent";
import apiHelper from "../api/apiHelper";
import * as yup from "yup";

const LoginContainer = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const logValues = () => {
    console.log(username);
    console.log(password);
  };

  let schema = yup.object().shape({
    username: yup.string().min(3).required(),
    password: yup.string().min(6).required(),
  });

  const validateData = () => {
    // TODO: Validate data
    schema
      .validate(
        { username: username, password: password },
        { abortEarly: false }
      )
      .then(() => {
        apiHelper("post", "https://api.taiga.io/api/v1/auth", {
          username: username,
          password: password,
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
      username={username}
      password={password}
      setUsername={setUsername}
      setPassword={setPassword}
      validateData={validateData}
    />
  );
};

export default LoginContainer;
