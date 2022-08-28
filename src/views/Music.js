/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import * as songActions from '../store/musicState/musicState.actions'

import SubmitSong from '../components/Music/SubmitSong.form'

const Music = (props) => {
    const { userData, addSong  } = props;


    

    return (
      <div>
          <SubmitSong userData = { userData } addSong = { addSong } />
      </div>
    )
}



export default connect(null, songActions)(Music)