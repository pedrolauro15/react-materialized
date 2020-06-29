import React from 'react';
import { Bar, Highlight, Input, Label, TextField as InputField } from './styles';

export interface TextFieldProps {
	color?: string;
	elementColor?: string;
	label?: string;
	highlight?: boolean;
}

export type InputProps = JSX.IntrinsicElements['input'] & TextFieldProps;

export function TextField({
	color,
	elementColor,
	label,
	highlight,
	...rest
}: InputProps) {
	return (
		<InputField color={color}>
			<Input required name="user" />
			{highlight && <Highlight className="highlight" />}
			<Bar className="bar" color={color} />
			<Label>{label}</Label>
		</InputField>
	);
}
