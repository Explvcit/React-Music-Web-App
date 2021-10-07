import React from 'react'
import crush from '../../../songs/crushrocks.mp3'
import long from '../../../songs/longdistance.mp3'
import wind from '../../../songs/windofgod.mp3'
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const crushrocks = new Audio(crush)
const longdistance = new Audio(long)
const windofgod = new Audio(wind)

export default class PlayButton extends React.Component {

constructor(props) {
  super(props)
  this.state = {
    playing: false
  }
}

handlePlayerClick = ({ product }) => {
    let songName = null
    songName = this.props.product.name

  if (!this.state.playing) {
    this.setState({playing: true})
    console.log(songName)
    if(songName === "Crush Rocks" && !this.state.playing) {
        crushrocks.play()
        longdistance.pause()
        windofgod.pause()
        } else if (songName === "Long Distance" && !this.state.playing) {
            longdistance.play()
            crushrocks.pause()
            windofgod.pause()
        } else {
            windofgod.play()
            crushrocks.pause()
            longdistance.pause()
        }

  } else {
    this.setState({playing: false})
    crushrocks.pause()
    longdistance.pause()
    windofgod.pause()
  }
}

  render() {
    return (
      <div className="play" >
        {this.state.playing? <PauseCircleOutlineIcon onClick={this.handlePlayerClick} /> 
        
        : <PlayArrowIcon onClick={this.handlePlayerClick} />}
      </div>
    )
  }
}

