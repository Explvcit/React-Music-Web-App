import React from 'react'
import ReactPlayer from 'react-player'

const More = () => {
    return (
        <div>
           <h3 className="recentWork">
          Recent Work on<h3 className="yt">Youtube</h3></h3>
        <ReactPlayer className="links"
            url="https://www.youtube.com/watch?v=Vzo_p8jMFXw"
            controls
            playbackRate = {2}
            width = "796px"
            height = "504px"
        />
        <ReactPlayer className="links"
            url="https://www.youtube.com/watch?v=nWJA8if83fU"
            controls
            playbackRate = {2}
            width = "796px"
            height = "504px"
        />
        </div>
    )
}

export default More
