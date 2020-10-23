import React from 'react';
import './CustomButton.styles.scss';

const CustomButton = ({ children, googleSignIn, ...buttonProps }) => {
	return (
		<button {...buttonProps} className={`custom-button ${googleSignIn ? 'google-sign-in' : false}`}>
			{children}
		</button>
	);
};
export default CustomButton;
