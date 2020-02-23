import React from 'react';
import './App.css';
import SmurfList from './components/SmurfList.js';
import SmurfForm from './components/SmurfForm.js';

function App() {
	return (
		<div className='App'>
			<div className='titleContainer'>
				<h1 className='smurfTitle'>SMURFN'</h1>
				<h1 className='smurfTitle'>SMURFS!</h1>
			</div>
			<div className='imgContainer'>
				<div className='smurfImg'></div>
			</div>
			<SmurfForm />
			<SmurfList />
		</div>
	);
}

export default App;
