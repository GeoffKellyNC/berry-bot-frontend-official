import React from "react";
import styled from "styled-components";

import PollsHome from "./modals/PollsHome";

const Poll = ({ userData, target, selected, handelSelection, setSelected }) => {
  return (
    <StyledPoll className="poll-tile">
      <button
        onClick={() => handelSelection("poll")}
        className="poll-tile-button"
      >
        {" "}
        START POLL{" "}
      </button>
      {selected === "poll" && (
        <PollsHome
          userData={userData}
          target={target}
          setSelected={setSelected}
        />
      )}
    </StyledPoll>
  );
};

export default Poll;

const StyledPoll = styled.div`
  color: white;
  font-family: ${(pr) => pr.theme.fonts.primary};

  .poll-tile-button {
    width: 300px;
    height: 75px;
    background-color: ${(pr) => pr.theme.colors.secondary};
    border: none;
    outline: none;
    border-radius: 0.5rem;
    color: ${(pr) => pr.theme.colors.primary};
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
