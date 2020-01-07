import React from 'react'

class DigitalClicker extends React.Component{

    constructor(){
        super()
        this.state ={
            timesClicked: 0
        }
    }


    updateTimesClicked = () =>{
        
        let newClick = this.state.timesClicked + 1
        this.setState({
            timesClicked: newClick
        })
    }

    render(){
    return <button onClick={this.updateTimesClicked}>{this.state.timesClicked}</button>
    }

}

export default DigitalClicker