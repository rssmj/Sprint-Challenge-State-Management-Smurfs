// 1
import React from 'react';
import { connect } from 'react-redux';
import { deleteSmurfs } from '../actions';

// 2
const SmurfCard = ({ smurf, deleteSmurfs }) => {
	// 2.1
	console.log(`smurf card props -->`, smurf);

	return (
		<div>
			<div className='smurfCard'>
				<h2>{smurf.name}</h2>
				<h3>{smurf.age}</h3>
				<h3>{smurf.height}</h3>
				<button className='deleteBtn' onClick={() => deleteSmurfs(smurf)}>
					<div className='deathContainer'>
						{' '}
						<span className='imTooYoungToDie'>X</span>
						<span className='deleteSmurf'>I dont want to die!</span>
					</div>
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
export default connect(mapStateToProps, { deleteSmurfs })(SmurfCard);
