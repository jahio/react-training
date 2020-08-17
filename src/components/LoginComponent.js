import React from "react";
import {
  FormFeedback,
  Button,
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardBody,
} from "reactstrap";
import PropTypes from "prop-types";

const LoginComponent = ({
  username,
  password,
  reducer,
  dispatch,
  state,
  validateData,
}) => {
  const setUsernameWrapper = (evt) => {
    // setUsername(evt.target.value);
  };
  const setPasswordWrapper = (evt) => {
    // setPassword(evt.target.value);
  };
  return (
    <Container className="h-100-vh">
      <Row className="d-flex justify-content-center align-items-center">
        <Col sm={{ size: 6, offset: 3 }} className="m-auto">
          <Card>
            <CardBody>
              <Form>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="with a placeholder"
                    value={username}
                    onChange={() => dispatch({ type: "setUsername" })}
                  />
                  <FormFeedback>
                    Oh noes! That email is already taken
                  </FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="password placeholder"
                    value={password}
                    onChange={() => dispatch({ type: "setPassword" })}
                  />
                  <FormFeedback>Oh noes! Wrong Password</FormFeedback>
                </FormGroup>
                <Button onClick={validateData}>Login</Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginComponent;

// LoginComponent.propTypes = {
//   username: PropTypes.string.isRequired,
//   password: PropTypes.string.isRequired,
//   setUsername: PropTypes.func.isRequired,
//   setPassword: PropTypes.func.isRequired,
//   logValues: PropTypes.func.isRequired,
//   validateData: PropTypes.func.isRequired,
// };

// LoginComponent.defaultProps = {
//   // username: 'test'
// };
