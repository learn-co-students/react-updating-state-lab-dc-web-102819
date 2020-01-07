// Code DigitalClicker Component Here

import React from 'react'

export default class DigitalClicker extends React.Component {
	constructor() {
		super()

		this.state = {
			timesClicked: 0
		}
	}

	incrementButton = () => {
		this.setState(previousState => {
			console.log(previousState)
			return {

				timesClicked: previousState.timesClicked + 1
			}
		})
	}



	render() {
		return (
			<button onClick={this.incrementButton}>{this.state.timesClicked}</button>

			)
	}
}
