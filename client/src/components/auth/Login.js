import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import smileDoc from '../../assets/pexels-photo-3714743.png'
import styled from "styled-components";
import {
  TextInput,
  PasswordInput,
} from "../../components/common/inputs";
import { Grid } from "@material-ui/core";
import AuthLayout from "../../components/layouts/AuthLayout";
import AlertContext from '../../context/alert/alertContext'
import AuthContext from '../../context/auth/authContext'

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

const Login = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const {login,error, clearErrors, isAuthenticated} = authContext;

  useEffect (() => {
    if(isAuthenticated) {
      props.history.push('/')
    }
    
        if(error === 'Invalid Credentials'){
          setAlert( error, 'error');
          clearErrors();
        } 
        //eslint-disable-next-line
      }, [error, isAuthenticated, props.history]);
    
  const [user, setUser] = useState({
    
    email: "",
        password: "",
  });

  const { email, password } = user;



  const onChange  = e => setUser({...user, [e.target.name]: e.target.value});

  const onSubmit = e => {
    e.preventDefault();
    if (email === '' || password === '') {
      setAlert('Please fill in all fields', 'error');
    } else {
      login({
        email, password
      });
    }
  };
  return (
    <Wrapper>
     <AuthLayout
      img={smileDoc}
        >
          <p>
        Welcome back. Kindly input your username and password to gain access or{" "}
          <Link className="link" to="/register">
            signup
          </Link>{" "}
          if you are new to the platform. Note that only authorized personnel
          can access this site.</p>
        <form name="form" onSubmit={onSubmit}>
          <Grid container>
           

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

            <Grid item xs={12} sm={12}>
              <PasswordInput
                label="Password"
                name="password"
                value={password}
                onChange={onChange}
              />
            </Grid>

           
          </Grid>

          <div className="submit">
            <input type="submit" value="Login"/>
            {/* {registering && <CircularProgress className="spinner" />} */}
          </div>
        </form>
      </AuthLayout>
    </Wrapper>
  );
};

export default Login;
