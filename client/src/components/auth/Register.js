import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AlertContext from '../../context/alert/alertContext'
import AuthContext from '../../context/auth/authContext'

import styled from "styled-components";
import {
  TextInput,
  PasswordInput,
  SelectInput,
} from "../../components/common/inputs";
import { Grid } from "@material-ui/core";
import AuthLayout from "../../components/layouts/AuthLayout";

const Wrapper = styled.div`
  .submit {
    padding-top: 2rem;
  }
  .link {
    color: ${(props) => props.theme.color.ui_01};
    font-weight: bold;
    &:hover {
      text-decoration: underline;
      transition: 0.3s;
    }
  }
  .help-block {
    font-weight: normal;
    font-family: Futura;
    font-size: 14px;
    line-height: 16px;
    color: ${(props) => props.theme.color.ui_05};
  }
  .submit {
    button {
      border-radius: 0.5rem;
      font-size: 1.2rem;
      font-weight: bold;
      min-width: 15rem;
      font-family: Sofia;
      outline: none;
      cursor: pointer;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 40px;
      padding: 1.1rem 0.4rem;
      margin-right: 0.3rem;
      border: 1px solid ${(props) => props.theme.color.ui_01};
      color: ${(props) => props.theme.color.text_01};
      background-color: ${(props) => props.theme.color.ui_01};
      &:hover {
        color: ${(props) => props.theme.color.ui_01};
        background-color: ${(props) => props.theme.color.text_01};
        transition: 0.4s;
      }
    }

    .MuiCircularProgress-colorPrimary {
      color: ${(props) => props.theme.color.ui_01};
      width: 20px !important;
      height: 20px !important;
      margin-left: 1rem;
    }
  }
`;

const Register = props => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const {register,error, clearErrors, isAuthenticated} = authContext;

  useEffect (() => {
if(isAuthenticated) {
  props.history.push('/')
}

    if(error === 'User already exists'){
      setAlert( error, 'error');
      clearErrors();
    } 
    //eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    name: "",
    email: "",
    // id: "",
    field: "",
    phoneNumber: "",
    password: "",
    password2: "",
  });

  const { name, email,  field, phoneNumber, password, password2 } = user;

  const optionField = [
    { value: "Doctor", text: "Doctor" },
    { value: "Nurse", text: "Nurse" },
  ];

  const onChange  = e => setUser({...user, [e.target.name]: e.target.value});

  const onSubmit = e => {
    e.preventDefault();
    if (name === '' || email === '' || field === '' || phoneNumber === ''  || password === ''){
      setAlert('Please enter all fields', 'error');
      console.log('Register field error')
    } else if (password !== password2){
      setAlert('Passwords do not match', 'error');
      console.log('Register pass error')

    } else{
      register({
        name,
        email,
        // id,
        field,
        phoneNumber,
        password
      }
      )
    }
  }
  return (
    <Wrapper>
      <AuthLayout
        greeting="
      👨‍⚕️👩‍⚕️ Welcome"
        info={
          <>
            Kindly input only correct details, you can{" "}
            <Link className="link" to="/login">
              login
            </Link>{" "}
            if you already have an account. Note that only authorized personnel
            can access this site.
          </>
        }
      >
        <form name="form" onSubmit={onSubmit}>
          <Grid container>
            <Grid item xs={12} sm={12}>
              <TextInput
                label="First Name"
                type="text"
                name="name"
                value={name}
                onChange={onChange}
                placeholder="Type here..."
              />
            </Grid>

            <Grid item xs={12} sm={12}>
              <TextInput
                label="Email Address"
                type="text"
                name="email"
                value={email}
                onChange={onChange}
                placeholder="Type here..."
              />
            </Grid>

            <Grid item xs={12} sm={12}> id
              {/* <TextInput
                label="ID"
                name="id"
                value={id}
                type="number"
                onChange={onChange}
                placeholder="Type your unique id here..."
              /> */}
            </Grid>
            <Grid item xs={12} sm={12}>
              <SelectInput
                label="Select Field"
                name="field"
                options={optionField}
                value={field}
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextInput
                label="Phone Number"
                name="phoneNumber"
                value={phoneNumber}
                type="number"
                onChange={onChange}
                placeholder="08000..."
              />
            </Grid>

            <Grid item xs={12} sm={12}>
              <PasswordInput
                label="Password"
                name="password"
                value={password}
                onChange={onChange}
              />
            </Grid>

            <Grid item xs={12} sm={12}>
              <PasswordInput
                label="Confirm Password"
                name="password2"
                value={password2}
                onChange={onChange}
              />
            </Grid>
          </Grid>

          <div className="submit">
            <input type="submit" value="Register"/>
            {/* {registering && <CircularProgress className="spinner" />} */}
          </div>
        </form>
      </AuthLayout>
    </Wrapper>
  );
};

export default Register;
