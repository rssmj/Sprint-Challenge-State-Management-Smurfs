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
			<h1 className='titleSmurfs'>GET SMURFN'!</h1>
			<form className='smurfForm'>
				<h1 className='formTitle'></h1>
				<label htmlFor='name'></label>
				<input
					className='input'
					type='text'
					name='name'
					label='name'
					placeholder='SMURF'
					value={props.name}
					onChange={inputHandler}
				/>
				<label htmlFor='age'></label>
				<input
					className='input'
					type='text'
					name='age'
					label='age'
					placeholder='SMURF'
					value={props.age}
					onChange={inputHandler}
				/>
				<label htmlFor='height'></label>
				<input
					className='input'
					type='text'
					name='height'
					label='height'
					placeholder='SMURF'
					value={props.height}
					onChange={inputHandler}
				/>{' '}
				<button onClick={submitHandler} className='btn'>
					SMURF UP{' '}
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
