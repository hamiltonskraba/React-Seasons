import './ErrorDisplay.css';
import React from 'react';

const ErrorDisplay = (props) => {
	return (
		<div className="errDisplay">
			<i class="stop circle icon icon-left massive"></i>
				<div>
					<h1>
						<p>Error: {props.errorMessage} </p>
					</h1>
				</div>
			<i class="stop circle icon icon-right massive"></i>	
		</div>	
	);
}

export default ErrorDisplay;