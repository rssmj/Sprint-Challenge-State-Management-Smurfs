// 1
import React, { useEffect } from 'react';
import SmurfCard from './SmurfCard.js';
import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions';

// 2
const SmurfList = props => {
	// 2.1
	console.log(props);

	useEffect(
		() => {
			props.fetchSmurfs();
		},
		[
			// props
		]
	);
	return (
		<div>
			{/* <h1 className='titleList'></h1> */}
			<div className='smurfContainer'>
				{props.smurfs.map(smurf => (
					<SmurfCard key={smurf.id} smurf={smurf} />
				))}
			</div>
		</div>
	);
};

// 3
const mapStateToProps = state => {
	return {
		smurfs: state.smurfs,
		isFetching: state.isFetching,
		errors: state.errors
	};
};

export default connect(mapStateToProps, { fetchSmurfs })(SmurfList);
