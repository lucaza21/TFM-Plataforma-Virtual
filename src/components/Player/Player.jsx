import React from 'react'
import ReactPlayer from 'react-player'

function Player({url}) {
  return (
    <>
    <ReactPlayer url={url}
        controls 

        />
    </>
  )
}

export default Player