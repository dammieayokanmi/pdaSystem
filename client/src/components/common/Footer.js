import React, {useContext} from 'react'
// import PropTypes from 'prop-types'
import styled from "styled-components";
import Button from "../../components/common/Button";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

const Wrapper = styled.div`
 
  .buttons {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: max-content;
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

function PatientProfile() {
  const authContext = useContext(AuthContext);

  const {  logout } = authContext;

  const onLogout = () =>{
	  logout();
  }
    return (
        <Wrapper>
             <hr className="hr" />
        <div className="buttons">
        
<Link to='#!'>
<Button theme="blackBtn" onClick={onLogout}>Logout</Button>
</Link>
        </div>
        </Wrapper>
    )
}

PatientProfile.propTypes = {

}

export default PatientProfile

