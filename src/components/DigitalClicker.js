import React, { Component } from 'react';

export default class DigitalClicker extends Component{
    constructor(){
        super()
        this.state={
            timesClicked:0
        }
    }

    changeTime = () =>{
        this.setState({
            timesClicked : this.state.timesClicked + 1
        })
    }
    render(){
        // console.log(this.state.timesClicked)
        return(
            <div>
                Click Me
                <button onClick={this.changeTime}>{this.state.timesClicked}</button>
            </div>
        )
    }
}