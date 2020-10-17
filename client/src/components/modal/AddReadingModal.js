import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Modal from '../../components/modal';
import Button from '../../components/common/Button';


const Wrapper = styled.div`

`;

class AddReadingModal extends React.Component {
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
					"Upload patient's readings here"
				}
			>
			hell
			</Modal>

			<div onClick={this.showModal}>
			<Button theme="blueBtn">Upload reading</Button>

			</div>
		</Wrapper>
	);
}};

AddReadingModal.propTypes = {
};

export default AddReadingModal;
