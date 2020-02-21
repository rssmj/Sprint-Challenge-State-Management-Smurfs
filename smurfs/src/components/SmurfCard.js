// 1
import React from 'react';

// 2
const SmurfCard = props => {
	console.log(`smurf card props -->`, props);
	// 2.1
	return (
		<div>
			<div className='card'>
				<h2>{props.smurf.name}</h2>
				<h3>{props.smurf.age}</h3>
				<h3>{props.smurf.height}</h3>
			</div>
		</div>
	);
};

// 3
export default SmurfCard;
