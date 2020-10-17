import React from 'react';
import styled from 'styled-components';
import { IconButton } from '@material-ui/core';
import show from '../../../assets/show.svg';
// import VisibilityOff from '@material-ui/icons/VisibilityOff';
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
display: grid;
grid-template-columns: 1fr max-content;
border-radius: 8px;
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
	background-color: rgba(255, 255, 255, 0);
	margin: 0;
outline: none;
border: none;
height: 100%;
// min-width: 100%;
width: 100%;
padding-left: 1rem;
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

const PasswordInput = ({ label, onChange, value, placeholder, error, name }) => {
	const [values, setValues] = React.useState({
		showPassword: false,
	});



	const handleClickShowPassword = () => {
		setValues({ showPassword: !values.showPassword });
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	return (
		<Wrapper>
			<h6 className="input_label">{label}</h6>
			<div className="input_div">
				<input
					placeholder={placeholder}
					className="input"
					type={values.showPassword ? 'text' : 'password'}
					value={value}
					name={name}
					onChange={onChange}
				/>
				<div className="adornment">
					<IconButton
						onClick={handleClickShowPassword}
						onMouseDown={handleMouseDownPassword}
						edge="end"
					>
						{values.showPassword ? 	<img src={show} alt="showPassword"/>: "off"}
					</IconButton>
				</div>
				<p className="error">{error && error}</p>
			</div>
		</Wrapper>
	);
};

PasswordInput.propTypes = {
	label: PropTypes.string,
	error: PropTypes.string,
	placeholder: PropTypes.string,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};

export { PasswordInput };
