import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const Wrapper = styled.div`
	margin-top: 1.5rem;
	width: 100%;
	.input_label {
		margin-bottom: 1rem;
		margin-top: 0;
		font-family:Sofia;
		letter-spacing: 0.1px;
		font-weight: 600;
font-size: 1.4rem;
line-height: 1.4rem;
color: ${props => props.theme.color.ui_text_05};
	}
  .input_div {
		border: 1px solid ${props => props.theme.color.ui_01};
		height: 4.8rem;
		border-radius: 8px;
    grid-template-columns: 1fr max-content;
    &:hover {
		border: 1px solid ${props => props.theme.color.ui_text_05};
		transition: .3s;
    }
    &:focus-within{
		outline: none;
		border-color: ${props => props.theme.color.ui_01};
		box-shadow: 0 0 3px ${props => props.theme.color.ui_01};
    }
  }
	.input {
		margin: 0;
    outline: none;
    border: none;
		height: 100%;
		width: 100%;
		max-width: 100%;
		padding-left: 1rem;
	&:-internal-autofill-selected {
		background-color: rgba(255, 255, 255, 0) !important;
	}
	&::placeholder{
		font-family: Sofia;
		font-size: 1.4rem;
		line-height: 2.0rem;
		letter-spacing: 0.2px;
		color: ${props => props.theme.color.text_06};
	}
    :focus :hover {
      outline: none;
    }
	}
	.adornment {
		width: max-content;
    padding-right: 1rem;
	}
	.error {
		color: red;
		font-size: 1.3rem;
		padding-top: 2px;
	}
`;

const TextInput = ({ label, onChange, value, placeholder, error,  type, name }) => {

	

	return (
		<Wrapper>
			<h6 className="input_label">{label}</h6>
			<div className="input_div">
				<input
					placeholder={placeholder}
					className="input"
					value={value}
					name={name}
					// required={true}
					onChange={onChange}
					type={type ? type : 'text'}
				/>
			</div>
			<p className="error">{error && error}</p>
		</Wrapper>
	);
};

TextInput.propTypes = {
	label: PropTypes.string,
	error: PropTypes.string,
	placeholder: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	type: PropTypes.string
};

export { TextInput };