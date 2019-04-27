import React, { useState } from 'react';
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
	const [ toggled, setToggled ] = useState(true);
	const toggle = () => {
		setToggled(!toggled);
	};
	const LinksIFrameDemo = () => (
		<React.Fragment>
			<span style={toggled ? {} : { display: 'none' }}>
				<a style={{ display: 'block' }} href='https://www.garethfield.com' target='eyeFrame'>
					This is a link to GarethField.com!
				</a>
				<br />
				<a href='https://www.garethfield.com/bounce' target='eyeFrame'>
					This is a link to GarethField.com/Bounce!
				</a>
				<h2>iFrame Magic! (h2)</h2>
				<iframe height='200px' width='500px' name='eyeFrame' title='Test i-frame' />
			</span>
		</React.Fragment>
	);
	return (
		<div className='App'>
			<Headers />
			<button style={{ display: 'block', margin: 'auto', marginBottom: '12px' }} onClick={() => toggle()}>
				Show/Hide Links, iFrame Demo (button)
			</button>
			<LinksIFrameDemo />
		</div>
	);
}

export default App;
