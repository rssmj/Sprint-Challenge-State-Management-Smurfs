// 1
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postSmurfs } from '../actions';

// 2
const SmurfForm = props => {
	// 2.1

	const [smurf, setSmurf] = useState({
		name: '',
		age: 0,
		height: '',
		id: Date.now()
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
			<form className='smurfForm'>
				{/* <h1 className='formTitle'></h1> */}
				<label htmlFor='name'></label>
				<input
					className='smurfInput'
					type='text'
					name='name'
					label='name'
					placeholder='NAME'
					value={props.name}
					onChange={inputHandler}
				/>
				<label htmlFor='age'></label>
				<input
					className='smurfInput'
					type='text'
					name='age'
					label='age'
					placeholder='AGE'
					value={props.age}
					onChange={inputHandler}
				/>
				<label htmlFor='height'></label>
				<input
					className='smurfInput'
					type='text'
					name='height'
					label='height'
					placeholder='HEIGHT'
					value={props.height}
					onChange={inputHandler}
				/>{' '}
			</form>
			<div>
				<button onClick={submitHandler} className='btn'>
					SMURF HERE{' '}
				</button>
			</div>
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
