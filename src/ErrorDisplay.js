import './ErrorDisplay.css';
import React from 'react';

const ErrorDisplay = (props) => {
	return (
			<h1>Error:{props.errorMessage} </h1>
	);
}

export default ErrorDisplay;