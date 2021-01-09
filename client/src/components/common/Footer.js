import React, {useContext} from 'react'
// import PropTypes from 'prop-types'
import styled from "styled-components";
import Button from "../../components/common/Button";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import PatientContext from "../../context/patient/patientContext";

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
  const patientContext = useContext(PatientContext);

  const {  logout } = authContext;
  const { clearPatients} = patientContext;

  const onLogout = () => {
    logout();
    clearPatients();
  }
    return (
        <Wrapper>
             <hr className="hr" />
        <div className="buttons">
        
<Link to='#!'>
<Button theme="black" onClick={onLogout}>Logout</Button>
</Link>
        </div>
        </Wrapper>
    )
}

PatientProfile.propTypes = {

}

export default PatientProfile

