import React from 'react';
import logo from './logo.svg';
import './App.css';

const Headers = () => (
	<React.Fragment>
		<h1>This is an h1.</h1>
		<h2>This is an h2.</h2>
		<h3>This is an h3.</h3>
		<h4>This is an h4.</h4>
		<h5>This is an h5.</h5>
		<h6>This is an h6.</h6>
	</React.Fragment>
);
function App() {
	return (
		<div className='App'>
			<Headers />
			<a href='https://www.garethfield.com/bounce'>This is a link!</a>
		</div>
	);
}

export default App;
