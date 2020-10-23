import React from 'react';
import './FormInput.styles.scss';

const FormInput = ({ type, name, value, id, handelOfChange, labelText }) => {
	return (
		<div className='group'>
			<input
				className='form-input'
				type={type}
				value={value}
				name={name}
				id={id}
				onChange={handelOfChange}
			/>
			{labelText ? (
				<label className={`form-input-label ${value.length > 0 ? 'shrink' : false}`} htmlFor={id}>
					{labelText}
				</label>
			) : null}
		</div>
	);
};
export default FormInput;
