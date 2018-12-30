import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import ErrorDisplay from './ErrorDisplay';

class App extends React.Component {
	state = { lat: null, errorMessage: '' };

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			position => this.setState({ lat: position.coords.latitude }),
			err => this.setState({errorMessage: err.message })
		);
	}

	renderContent () {
		if(this.state.lat && !this.state.errorMessage){
			return <div><SeasonDisplay lat={this.state.lat} /></div>
		}

		if(!this.state.lat && this.state.errorMessage){
			return <div><ErrorDisplay errorMessage={this.state.errorMessage} /></div>
		}
	
		return <div><Spinner message="Please accept location request..."/></div>;
	}

	render() {
		return (
			<div>{this.renderContent()}</div>
		);

	}
}

ReactDOM.render(<App />, document.querySelector('#root'));