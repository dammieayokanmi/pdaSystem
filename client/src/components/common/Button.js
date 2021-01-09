/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
// width: 100%;
.blueBtn {
	border: 1px solid ${props => props.theme.color.ui_01};
    color: ${props => props.theme.color.text_01};
	background-color: ${props => props.theme.color.ui_01};
;
}
.blueBtn:hover {
    color: ${props => props.theme.color.ui_01};
	background-color: ${props => props.theme.color.text_01};
	transition: 0.4s;
}
.whiteBtn {
    color: ${props => props.theme.color.ui_01};
	background-color: ${props => props.theme.color.text_01};
	border: 1px solid ${props => props.theme.color.ui_01};
}
.whiteBtn:hover{
	color: ${props => props.theme.color.text_01};
	background-color: ${props => props.theme.color.ui_01};
	transition: 0.4s;
}
.blackBtn {
	color: ${props => props.theme.color.ui_03};
	background-color: ${props => props.theme.color.text_01};
	border: 1px solid ${props => props.theme.color.ui_03};
}
.blackBtn:hover{
	color: ${props => props.theme.color.ui_01};
	border: 1px solid ${props => props.theme.color.ui_01};
	transition: 0.4s;
}
.redBtn {
	color: red;
	background-color: ${props => props.theme.color.text_01};
	border: 1px solid red;
}
.redBtn:hover{
	color: ${props => props.theme.color.ui_03};
	border: 1px solid ${props => props.theme.color.ui_03};
	transition: 0.4s;
}


.button {
	display: flex;
	align-items: center;
	justify-content: center;
	span {
		padding-right: 0.5rem;
	}
}
`;


function Button({style, theme, children, text, ...rest}) {
	const themeClassName = theme ? `${theme}Btn`: '';
	return (
		<Wrapper>

			<button
				type="button" className={`${themeClassName} ${theme} button`}
				style={{ borderRadius: '0.5rem', fontSize: '1.2rem', fontWeight: 'bold', minWidth: '13rem', fontFamily: 'Sofia', outline: 'none', cursor: 'pointer', boxShadow: "0px 10px 40px rgba(0, 0, 0, 0.1)", padding: '1.1rem 0.4rem', ...style }}
				{...rest }
			>
				<span>{text}</span>
				{children}
			</button>
		</Wrapper>

	);
}

Button.propTypes = {
	style: PropTypes.object,
	theme: PropTypes.oneOf([
				'black',
		'blue',
		"red",
		'white',
		])
};

export default Button;
