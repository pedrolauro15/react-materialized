import React from 'react';
import { Bar, Highlight, Input, Label, TextField as InputField } from './styles';

export interface TextFieldProps {
	color?: string;
	elementColor?: string;
	label?: string;
	highlight?: boolean;
	onChange?(): void | undefined;
	value?: string;
	defaultValue?: string;
	onFocus?(): void;
	onBlur?(): void;
}

export type InputProps = JSX.IntrinsicElements['input'] & TextFieldProps;

export function TextField({
	color,
	elementColor,
	label,
	highlight,
	onChange,
	onBlur,
	onFocus,
	value,
	defaultValue,
}: TextFieldProps) {
	return (
		<InputField color={color}>
			<Input
				onFocus={onFocus}
				onBlur={onBlur}
				onChange={onChange}
				elementColor={elementColor}
				required
				name="materialized-input"
				value={value}
				defaultValue={defaultValue}
			/>
			{highlight && <Highlight className="highlight" />}
			<Bar className="bar" color={color} />
			<Label>{label}</Label>
		</InputField>
	);
}
