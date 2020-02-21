// 1
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postSmurfs } from '../actions';

// 2
const SmurfForm = props => {
	// 2.1

	const [smurf, setSmurf] = useState({
		name: '',
		age: '',
		height: '',
		id: ''
	});

	const inputHandler = e => {
		setSmurf({ ...smurf, [e.target.name]: e.target.value });
	};

	const submitHandler = e => {
		e.preventDefault();
		props.postSmurfs(smurf);
	};
	return (
		<div>
			<form className='SmurfForm'>
				<h1 className='formTitle'>Enter Smurf Data</h1>
				<label htmlFor='name'></label>
				<input
					className='input'
					type='text'
					name='name'
					label='name'
					placeholder='Name'
					value={props.name}
					onChange={inputHandler}
				/>
				<label htmlFor='age'></label>
				<input
					className='input'
					type='text'
					name='age'
					label='age'
					placeholder='Age'
					value={props.age}
					onChange={inputHandler}
				/>
				<label htmlFor='height'></label>
				<input
					className='input'
					type='text'
					name='height'
					label='height'
					placeholder='Height'
					value={props.height}
					onChange={inputHandler}
				/>{' '}
				<button onClick={submitHandler} className='btn'>
					Add Smurfs
				</button>
			</form>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		smurfs: state.smurfs,
		errors: state.errors
	};
};

// 3
export default connect(mapStateToProps, { postSmurfs })(SmurfForm);
