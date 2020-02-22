import React from 'react';
import './App.css';
import SmurfList from './components/SmurfList.js';
import SmurfForm from './components/SmurfForm.js';

function App() {
	return (
		<div className='App'>
			<div className='titleContainer'>
				<h1 className='smurfImg'></h1>
			</div>
			<SmurfForm />
			<SmurfList />
		</div>
	);
}

export default App;
