import React, { useEffect, useState } from 'react'
import { Form,Button,Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { register } from '../../actions/userActions';
import ErrorMessage from '../../components/ErrorMessage';
import Loading from '../../components/Loading';
import MainScreen from '../../components/MainScreen';
const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pic, setPic] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [picMessage, setPicMessage] = useState(null);

  const dispatch = useDispatch();

  const userRegister = useSelector(state => state.userRegister);
  const { loading, error, userInfo } = userRegister;
  const history = useHistory();
  
  useEffect(() => {
    if (userInfo) {
      history.push("/MyKitchen");
    }
  }, [history, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    
    if (password !== confirmpassword) {
      setMessage("Passwords didn't match!")
    } else {
      dispatch(register(name, email, password, pic));
    }

  };

  const postDetails = (pics) => {
    if (!pics) {
      return setPicMessage("Select an Image");
    }
    setPicMessage(null);
    if (pics.type === 'image/jpeg' || pics.type === 'image/png') {
      const data = new FormData();
      data.append('file', pics)
      data.append('upload_preset', 'flavourfetch')
      data.append('cloud_name', 'saisreea')
      fetch("https://api.cloudinary.com/v1_1/saisreea/image/upload", {
        method: "post",
        body: data,
      }).then((res) => res.json()).then((data) => {
        console.log(data);
        setPic(data.url.toString());
      })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return setPicMessage("Please select an image");
    }
  };

  return (
    <MainScreen title="Kitchen Registration">
      <div className="loginContainer">
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
        {loading && <Loading/>}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
            value={name}
              placeholder="Enter name"
            onChange={(e)=>setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
            value={email}
              placeholder="Enter email"
            onChange={(e)=>setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicpassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
            value={password}
              placeholder="Enter password"
            onChange={(e)=>setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="confirmpassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
            value={confirmpassword}
              placeholder="Confirm password"
            onChange={(e)=>setConfirmPassword(e.target.value)}
            />
          </Form.Group>
          {picMessage &&(<ErrorMessage variant="danger">{picMessage}</ErrorMessage>)}
          <Form.Group controlId="pic">
            <Form.Label>Profile Picture</Form.Label>
            <Form.Control
              onChange={(e) => postDetails(e.target.files[0])}
              type="file"
              label="Upload Profile Picture"
              accept="image/*"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
        <Row className="py-3">
          <Col>Already registered?<a href="/login"> Login</a></Col>
        </Row>
      </div>
    </MainScreen>
  );
};

export default RegisterScreen;