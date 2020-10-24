import React from 'react';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import CustomButton from '../CustomButton/CustomButton.component';
import FormInput from '../FormInput/FormInput.component';
import './SignIn.styles.scss';

class SignIn extends React.Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
		};
	}

	changeHandler = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	submitHandler = (event) => {
		event.preventDefault();
		this.setState({
			email: '',
			password: '',
		});
	};

	render() {
		const { email, password } = this.state;
		return (
			<div className='sign-in'>
				<h1 className='title'>Sign In</h1>
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>
				<form onSubmit={this.submitHandler}>
					<FormInput
						type='text'
						value={email}
						name='email'
						id='email'
						handelOfChange={this.changeHandler}
						labelText='Email Address'
					/>
					<FormInput
						type='password'
						value={password}
						name='password'
						id='password'
						handelOfChange={this.changeHandler}
						labelText='Password'
					/>
					<div className='buttons'>
						<CustomButton type='submit'>Submit Form</CustomButton>
						<CustomButton onClick={signInWithGoogle} googleSignIn>
							Sign In With Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}
export default SignIn;
