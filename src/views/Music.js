import React from 'react'

import SubmitSong from '../components/Music/SubmitSong.form'

const Music = (props) => {
    const { userData } = props;

  return (
    <div>
        <SubmitSong userData = { userData } />
    </div>
  )
}

export default Music