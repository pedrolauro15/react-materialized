import styled from 'styled-components';
import { InputProps } from './index';

export const TextField = styled.div<InputProps>`
	position: relative;
	margin-bottom: 45px;
	background: transparent;

	> input {
		color: ${(props) => (props.elementColor ? props.elementColor : '#333')};
	}

	> input:focus ~ label,
	input:valid ~ label {
		top: -20px;
		font-size: 14px;
		color: ${(props) => (props.color ? props.color : '#2574BA')};
	}

	> input:focus ~ .bar:before,
	input:focus ~ .bar:after {
		width: 100%;
	}

	> input:valid ~ .bar:before,
	input:valid ~ .bar:after {
		width: 100%;
	}

	> input:focus ~ .highlight {
		-webkit-animation: inputHighlighter 0.3s ease;
		-moz-animation: inputHighlighter 0.3s ease;
		animation: inputHighlighter 0.3s ease;
	}

	@-webkit-keyframes inputHighlighter {
		from {
			background: ${(porps) => (porps.color ? porps.color : '#2574BA')};
		}
		to {
			width: 0;
			background: transparent;
		}
	}
	@-moz-keyframes inputHighlighter {
		from {
			background: ${(porps) => (porps.color ? porps.color : '#2574BA')};
		}
		to {
			width: 0;
			background: transparent;
		}
	}
	@keyframes inputHighlighter {
		from {
			background: ${(porps) => (porps.color ? porps.color : '#2574BA')};
		}
		to {
			width: 0;
			background: transparent;
		}
	}
`;

export const Input = styled.input`
	font-size: 18px;
	padding: 10px 10px 10px 5px;
	display: block;
	width: 300px;
	border: none;
	border-bottom: 1px solid #757575;
	background-color: transparent;

	&:focus {
		outline: none;
	}
`;

export const Label = styled.label`
	color: #999;
	font-size: 18px;
	font-weight: normal;
	position: absolute;
	pointer-events: none;
	left: 5px;
	top: 10px;
	transition: 0.2s ease all;
	-moz-transition: 0.2s ease all;
	-webkit-transition: 0.2s ease all;
`;

export const Highlight = styled.span`
	position: absolute;
	height: 60%;
	width: 100px;
	top: 25%;
	left: 0;
	pointer-events: none;
	opacity: 0.5;
`;

export const Bar = styled.span`
	position: relative;
	display: block;
	width: 300px;

	&:before,
	&:after {
		content: '';
		height: 2px;
		width: 0;
		bottom: 1px;
		position: absolute;
		background: ${(porps) => (porps.color ? porps.color : '#2574BA')};
		transition: 0.2s ease all;
		-moz-transition: 0.2s ease all;
		-webkit-transition: 0.2s ease all;
	}
`;
