import React from "react";
import { Container } from "@material-ui/core";
import PropTypes from "prop-types";
import styled from "styled-components";
import Navbar from "../common/Navbar";

const Wrapper = styled.div`
padding: 0 0 3rem 0;
  .centered {
    display: flex;
    align-items: center;
    min-height: 550px;
  }
  .container {
    max-width: 1200px;
    margin-top: 70px;
  }
  .midi {
    max-width: ${(props) => props.theme.breakpoint.md};
  }

`;

const MyContainer = ({ children, bg }) => {
  return (
    <Wrapper>
       <Navbar/>
      <Container className={`${bg} container`}>{children}</Container>
    </Wrapper>
  );
};

MyContainer.propTypes = {
  children: PropTypes.any.isRequired,
  flexy: PropTypes.any,
};

export default MyContainer;
