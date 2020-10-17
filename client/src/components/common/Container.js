import React from "react";
import { Container } from "@material-ui/core";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
padding: 3rem 0;
  .centered {
    display: flex;
    align-items: center;
    min-height: 550px;
  }
  .container {
    max-width: ${(props) => props.theme.breakpoint.lg};
  }
  .midi {
    max-width: ${(props) => props.theme.breakpoint.md};
  }

`;

const MyContainer = ({ children, bg }) => {
  return (
    <Wrapper>
      <Container className={`${bg} container`}>{children}</Container>
    </Wrapper>
  );
};

MyContainer.propTypes = {
  children: PropTypes.any.isRequired,
  flexy: PropTypes.any,
};

export default MyContainer;
