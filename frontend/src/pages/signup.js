import React, { Fragment, useState } from "react";
import { HeaderContainer, FooterContainer } from "../containers";
import { Signup, Form } from "../components";
import axios from "axios";

const Signupp = () => {
  const [input, setInput] = useState({
    title: '',
    content: ''
  })
  function handleChange(event) {
    const {name, value} = event.target;

    setInput(prevInput => {
      return {
        ...prevInput,
        [name]: value
      }
    })
  }

  function handleClick(event) {
    event.preventDefault();
    const newNote = {
      title: input.title,
      email: input.email,
      password: input.password
    }
    
    axios.post('http://localhost:8000/create', newNote)
  }

  return (
    <Fragment>
      <HeaderContainer bg="false" />
      <Signup>
        <Signup.Container>
          <Signup.Content>
            <Signup.Header>
              <Signup.Title>Signup</Signup.Title>
            </Signup.Header>
            <Signup.InnerContent>
              <Form>
                <Form.FormGroup>
                  <Form.Label onChange={handleChange}>Name</Form.Label>
                  <Form.Input onChange={handleChange} name="title" value={input.title} type="text" />
                </Form.FormGroup>
                <Form.FormGroup>
                  <Form.Label onChange={handleChange}>Email</Form.Label>
                  <Form.Input onChange={handleChange} name="email" value={input.email} type="text" />
                </Form.FormGroup>
                <Form.FormGroup>
                  <Form.Label onChange={handleChange}>Password</Form.Label>
                  <Form.Input onChange={handleChange} name="password" value={input.password} type="text" />
                </Form.FormGroup>
                <Form.FormGroup>
                  <Form.Label onChange={handleChange}>Confirm Password</Form.Label>
                  <Form.Input onChange={handleChange} name="confimation" value={input.confirmation} type="text" />
                </Form.FormGroup>
                <Form.FormGroup>
                  <Form.SubmitInput onClick={handleClick} type="submit" value="Signup" />
                </Form.FormGroup>
              </Form>
            </Signup.InnerContent>
            <Signup.Footer>
              <Signup.Text>
                Already Have Account ?{" "}
                <Signup.Anchor to="/login">Login</Signup.Anchor>
              </Signup.Text>
            </Signup.Footer>
          </Signup.Content>
        </Signup.Container>
      </Signup>
      <FooterContainer />
    </Fragment>
  );
};

export default Signupp;
