import React, {useState, useContext} from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Modal from '../../components/modal';
import Button from '../../components/common/Button';
import PatientForm from '../patients/PatientForm'
import AuthContext from "../../context/auth/authContext";


const Wrapper = styled.div`

`;

function AddPatient() {
	const authContext = useContext(AuthContext);

	const { user } = authContext;
  
	const [show, setShow] = useState(false)
  
    const showModal = () => {
		setShow(true) ;
    };
  
    const hideModal = () => {
		setShow(false);
    };



	return (
		<Wrapper>
			<Modal
			          show={show}
                      handleClose={hideModal}
				position="modal-right"
				heading={
					"Add a new Patient"
				}
			>
			<PatientForm/>
			</Modal>

			<div onClick={showModal}>
			{/* {user && user.field==="Nurse" && <Button theme="blueBtn">Add new patient</Button>} */}
			<Button theme="blueBtn">Add new patient</Button>

			</div>
		</Wrapper>
	);
};

AddPatient.propTypes = {
};

export default AddPatient;
