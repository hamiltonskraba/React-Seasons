import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
	summer: {
		text: 'Let\'s hit the beach!',
		iconName: 'sun'
	},
	winter: {
		text: 'Brrr, it\s chilly!',
		iconName: 'snowflake'
	}
};

const getSeason = (lat, month) => {
	//console.log(lat, month);
	if(month > 2 && month < 9) {
		return lat < 0 ? 'winter' : 'summer';
	} else{
		return lat < 0 ? 'summer' : 'winter';
	}
}

const SeasonDisplay = (props) => {
	const season = getSeason(props.lat, new Date().getMonth());

	const { text, iconName } = seasonConfig[season];

	return(
		<div className={`season-display ${season}`}>
			<i className={`icon-left massive ${iconName} icon`} />
				<div><h1>{text}</h1></div>
			<i className={`icon-right massive ${iconName} icon`} />
		</div>
	);
}

export default SeasonDisplay;