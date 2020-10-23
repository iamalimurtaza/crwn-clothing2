import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage.component';
import ShopPage from './pages/ShopPage/ShopPage.component';
import signInSignUpPage from './pages/SignInSignUpPage/SignInSignUpPage.component';

function App() {
	return (
		<div>
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/shop' component={ShopPage} />
				<Route path='/sign-in' component={signInSignUpPage} />
			</Switch>
		</div>
	);
}

export default App;
