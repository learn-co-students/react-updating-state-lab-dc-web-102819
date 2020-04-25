import React, { Component } from 'react';

export default class YouTubeDebugger extends Component{
    constructor(){
        super()
        this.state={
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
        }
    }

    ChangeBitrate=()=>{
        this.setState({
            settings:{
                ...this.state.settings,
                bitrate:12
            }
        })
    }

    ChangeRes=()=>{
        this.setState({
            settings:{
                ...this.state.settings,
                video: {
                    resolution: '720p'
                }
            }
        })
    }

    render(){
        console.log(this.state.settings.bitrate)
        return(
            <div> 
                Click Me
                <button className="bitrate" onClick={this.ChangeBitrate}>{this.state.settings.bitrate}</button>
                <button className="resolution" onClick={this.ChangeRes}>{this.state.settings.video.resolution}</button>
            </div>
        )
    }
}