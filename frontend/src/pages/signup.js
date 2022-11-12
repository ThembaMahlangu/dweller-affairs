import React, { Fragment, useState, useEffect } from "react";
import { HeaderContainer, FooterContainer } from "../containers";
import { Signup, Form } from "../components";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Input } from "../components/form/styles/form";

const Signupp = () => {
    const validationSchema = Yup.object().shape({
        fullname: Yup.string().required('Fullname is required'),
        email: Yup.string()
          .required('Email is required')
          .email('Email is invalid'),
        password: Yup.string()
          .required('Password is required')
          .min(6, 'Password must be at least 6 characters')
          .max(40, 'Password must not exceed 40 characters'),
        confirmPassword: Yup.string()
          .required('Confirm Password is required')
          .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
      });

      const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
      } = useForm({
        resolver: yupResolver(validationSchema)
      });
    
      const onSubmit = data => {
        console.log(JSON.stringify(data, null, 2));
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
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.FormGroup>
                  <Form.Label>Full Name</Form.Label>
                  <Form.Input name="title" value={Form.Input.title} type="text" {...register('fullname')} className={`form-control ${errors.fullname ? 'is-invalid' : ''}`}/>
                  <div className="invalid-feedback">{errors.fullname?.message}</div>
                </Form.FormGroup>
                <Form.FormGroup>
                  <Form.Label>Email</Form.Label>
                  <Form.Input name="email" value={Form.Input.email} type="text" {...register('email')} className={`form-control ${errors.email ? 'is-invalid' : ''}`}/>
                  <div className="invalid-feedback">{errors.email?.message}</div>
                </Form.FormGroup>
                <Form.FormGroup>
                  <Form.Label>Password</Form.Label>
                  <Form.Input name="password" value={Form.Input.password} type="text" {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`}/>
                  <div className="invalid-feedback">{errors.password?.message}</div>
                </Form.FormGroup>
                <Form.FormGroup>
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Input name="confimation" value={Form.Input.confirmation} type="text"  {...register('confirmPassword')} className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}/>
                  <div className="invalid-feedback">{errors.confirmPassword?.message}</div>
                </Form.FormGroup>
                <Form.FormGroup>
                  <Form.SubmitInput type="submit" value="Signup" />
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