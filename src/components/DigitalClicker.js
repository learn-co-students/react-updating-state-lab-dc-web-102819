import React, { Component } from "react";

// Code DigitalClicker Component Here

export default class DigitalClicker extends Component {
    constructor() {
        super();
        this.state = {
            timesClicked: 0
        }
    }

    clickHandler = () => {
        this.setState(prevState => {
            return {
                timesClicked: prevState.timesClicked + 1
            }
        })
    }


    render() {
        return <button onClick={this.clickHandler}>{this.state.timesClicked}</button>
    }
    
}
