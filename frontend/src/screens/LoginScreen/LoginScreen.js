import React, { /*useEffect*/ useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import MainScreen from '../../components/MainScreen';
import "./LoginScreen.css";
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import { useDispatch, useSelector } from "react-redux";
import { login } from '../../actions/userActions';

const LoginScreen = ({history}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const dispatch = useDispatch();

  const userLogin = useSelector(state => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push("/MyKitchen");
    }
  }, [history, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();

    dispatch(login(email, password));
  };
  return (
      <MainScreen title='Kitchen Login'>
          <div className="loginContainer">
              {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
              {loading && <Loading/>}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        value={email}
                        placeholder="Enter email"
                        onChange={(e)=>setEmail(e.target.value)}       
                    />
                 </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
                type="password"
                value={password}
                placeholder="Enter password"
                onChange={(e)=>setPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Button variant="primary" type="Reset">
            Reset
          </Button>
        </Form>
        <Row className="py-3">
          <Col>Not registered yet? <a href="/register">Register</a></Col>
        </Row>
      </div>
    </MainScreen>
  )
}

export default LoginScreen