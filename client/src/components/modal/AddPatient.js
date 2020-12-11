import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Modal from '../../components/modal';
import Button from '../../components/common/Button';
import PatientForm from '../patients/PatientForm'


const Wrapper = styled.div`

`;

class AddPatient extends React.Component {
    state = {
      show: false,
      meals: "",
    };
  
    showModal = () => {
      this.setState({ show: true });
    };
  
    hideModal = () => {
      this.setState({ show: false });
    };


    render() {
	return (
		<Wrapper>
			<Modal
			          show={this.state.show}
                      handleClose={this.hideModal}
				position="modal-right"
				heading={
					"Add a new Patient"
				}
			>
			<PatientForm/>
			</Modal>

			<div onClick={this.showModal}>
			<Button theme="blueBtn">Add new patient</Button>

			</div>
		</Wrapper>
	);
}};

AddPatient.propTypes = {
};

export default AddPatient;
