import React from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import CustomButton from '../CustomButton/CustomButton.component';
import FormInput from '../FormInput/FormInput.component';
import './SignUp.styles.scss';

class SignUp extends React.Component {
	constructor() {
		super();
		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: '',
		};
	}

	submitHandler = async (event) => {
		event.preventDefault();
		const { displayName, email, password, confirmPassword } = this.state;
		if (password !== confirmPassword) {
			alert("Passwords don't match");
			return;
		}
		try {
			const { user } = await auth.createUserWithEmailAndPassword(email, password);
			createUserProfileDocument(user, { displayName });
			this.setState({
				displayName: '',
				email: '',
				password: '',
				confirmPassword: '',
			});
		} catch (error) {
			console.error(error);
		}
	};

	changeHandler = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		const { displayName, email, password, confirmPassword } = this.state;
		return (
			<div className='sign-up'>
				<h1 className='title'>Sign Up</h1>
				<h2>I do not have an account</h2>
				<span>Sign up with your email and password</span>
				<form className='sign-up-form' onSubmit={this.submitHandler}>
					<FormInput
						type='text'
						name='displayName'
						value={displayName}
						handelOfChange={this.changeHandler}
						labelText='Display Name'
					/>
					<FormInput
						type='email'
						name='email'
						handelOfChange={this.changeHandler}
						value={email}
						labelText='Email Address'
					/>
					<FormInput
						type='password'
						name='password'
						handelOfChange={this.changeHandler}
						value={password}
						labelText='Password'
					/>
					<FormInput
						type='password'
						name='confirmPassword'
						handelOfChange={this.changeHandler}
						value={confirmPassword}
						labelText='Confirm Password'
					/>
					<CustomButton type='submit'>Register Now</CustomButton>
				</form>
			</div>
		);
	}
}
export default SignUp;
