import React from 'react'

class YouTubeDebugger extends React.Component{

    constructor(){
        super()
        this.state= {
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

          bitrateUpdater = () =>{
              this.setState({
                  settings: {
                      ...this.state.settings,
                      bitrate: 12
                  }
              })
          }

          resolutionUpdater = () => {
            this.setState({
              settings: {
                ...this.state.settings,
                video: {
                  ...this.state.settings.video,
                  resolution: '720p'
                }
              }
            })
        }
        
    
    render(){
        return( 
            <div>
        <button className='bitrate' onClick={this.bitrateUpdater}></button> 
        <button className='resolution' onClick={this.resolutionUpdater}></button>
        </div>
        )
    }

          }

export default YouTubeDebugger