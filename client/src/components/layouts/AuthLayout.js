import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Container from "../../components/common/Container";
import Paper from "@material-ui/core/Paper";

const Wrapper = styled.div`
  .grid {
    display: grid;
    grid-template-columns: 34% 1fr;
    grid-gap: 3rem;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
display:block;
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
        padding-bottom: 2rem;
                  }
      img{
        @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
          display:none;
              }
      }
      .link {
        color: ${(props) => props.theme.color.ui_01};
        &:hover {
          text-decoration: underline;
          transition: 0.3s;
        }
      }
    }
    .form {
      padding: 2rem;
      border: 1px solid #0073a1;
    }
  }
`;

function AuthLayout({ children, greeting, info, img }) {
  return (
    <Wrapper>
      <Container bg="centered">
        <div className="grid">
          <div className="info">
            <img src={img} alt=""/>
  <h1>{greeting}</h1>
            <p>
             {info}
            </p>
          </div>
          <Paper className="form" elevation={1}>
            {children}
          </Paper>
        </div>
      </Container>
    </Wrapper>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.any.isRequired,
  greeting:PropTypes.string.isRequired,
  info:PropTypes.string.isRequired,
};

export default AuthLayout;
