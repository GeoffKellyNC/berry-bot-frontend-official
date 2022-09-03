import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as authActions from '../../../store/authState/authState.creators'

import PollsHome from "./PollsHome";

const Poll = ({ userData }) => {

  const [selected, setSelected] = useState(null)


  return (
    <StyledPoll className="poll-tile">
      <button
        onClick={() => setSelected("poll")}
        className="poll-tile-button"
      >
        START POLL
      </button>
      {selected === "poll" && (
        <PollsHome
          userData={userData}
          target={userData.twitch_user}
          setSelected={setSelected}
        />
      )}
    </StyledPoll>
  );
};

const mapStateToProps = state => {
  return({
    userData: state.userData
  })
}

export default connect(mapStateToProps, authActions) (Poll);

const StyledPoll = styled.div`
  color: white;

  .poll-tile-button {
    font-family: ${(pr) => pr.theme.fonts.primary};
    width: 300px;
    height: 75px;
    background: ${pr => pr.theme.gradients.primary};
    border: none;
    outline: none;
    border-radius: 0.5rem;
    color: ${ pr => pr.theme.fontColors.primary };
    font-size: ${(pr) => pr.theme.fontSizes.large};
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      background-color: ${(pr) => pr.theme.colors.berry};
    }
  }
`;
