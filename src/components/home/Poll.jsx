import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as authActions from '../../store/authState/authState.creators'

import PollsHome from "./modals/PollsHome";

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
  font-family: ${(pr) => pr.theme.fonts.primary};

  .poll-tile-button {
    width: 300px;
    height: 75px;
    background: rgba(19, 19, 19, 1);
    box-shadow: 0px 0px 10px 0px ${pr => pr.theme.colors.secondary};
    border: none;
    outline: none;
    border-radius: 0.5rem;
    color: ${(pr) => pr.theme.colors.berry};
    font-size: ${(pr) => pr.theme.fontSizes.large};
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      background-color: ${(pr) => pr.theme.colors.berry};
      color: ${(pr) => pr.theme.colors.secondary};
    }
  }
`;
