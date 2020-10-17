import React from 'react'
// import PropTypes from 'prop-types'
import styled from "styled-components";
import Button from "../../components/common/Button";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
 
  .buttons {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 60%;
    grid-gap: 1rem;
    margin-left: auto;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
      width: 100%;
      justify-items: center;
    }
}
  .hr {
    margin: 4rem 0;
  }
`;

function PatientProfile({btnText, to}) {
    return (
        <Wrapper>
             <hr className="hr" />
        <div className="buttons">
          <Link to={to}>
    <Button theme="whiteBtn">{btnText}</Button>
</Link>
<Link to='/login'>
<Button theme="blackBtn">Logout</Button>
</Link>
        </div>
        </Wrapper>
    )
}

PatientProfile.propTypes = {

}

export default PatientProfile

