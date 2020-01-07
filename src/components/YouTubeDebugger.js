import React, {Component} from 'react'

class YouTubeDebugger extends Component {
	
	constructor (){
		super()
		this.state = {
		  errors: [],
		  user: null,
		  settings: {
		    bitrate: 8,
		    video: { resolution: '1080p' }
		  }
		}
	}

	bitrateClick = () => {
		this.setState = {
			bitrate: 12
		}
	}


	resolutionClick = () => {
		this.setState = {
			settings: Object.assign({}, this.state.settings.video, {
				resolution: '720p'
			})
		}
	}


	render() {
		return (
			<div>
				<button className="bitrate" onClick={this.bitrateClick}>BitRate</button>
				<button className="resolution" onClick={this.resolutionClick}>Resolution</button>
			</div>
		)
	}
}

export default YouTubeDebugger