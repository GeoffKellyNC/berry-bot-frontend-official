import React from "react";
import styled from "styled-components";

const CreatePollForm = ({ formValues, onChange, onSubmit }) => {
  return (
    <PollForm>
      <label className="poll-title-text">Poll Title</label>
      <input
        type="text"
        name="title"
        value={formValues.title}
        onChange={onChange}
        className="poll-title-input"
      />
      <label
        className="poll-bit-text"
        title="How many bits it will cost to participate. Leave plank to disable"
      >
        Bits:{" "}
      </label>
      <input
        type="number"
        name="bitVote"
        value={formValues.bitVote}
        onChange={onChange}
        className="poll-bit-input"
      />
      <label
        className="poll-cPoint-text"
        title="How many channel points it will cost to participate. Leave blank to disable"
      >
        {" "}
        Channel Points:{" "}
      </label>
      <input
        type="number"
        name="channelPoints"
        value={formValues.channelPoints}
        onChange={onChange}
        className="poll-cPoint-input"
      />
      <label
        className="poll-set-choice-text"
        title="Input Choices seperated by & symbol"
      >
        Poll Choices. Separate each choice with & symbol:
      </label>
      <input
        type="textarea"
        name="choiceArray"
        value={formValues.choiceArray}
        onChange={onChange}
        className="poll-set-choice-input"
      />
      <label
        className="poll-duration-text"
        title="How long the poll will last in seconds. "
      >
        Duration:{" "}
      </label>
      <input
        type="number"
        name="duration"
        value={formValues.duration}
        onChange={onChange}
        className="poll-duration-input"
      />
      <button onClick={onSubmit} className="poll-submit-button">
        Submit
      </button>
    </PollForm>
  );
};

export default CreatePollForm;

const PollForm = styled.form`
  display: flex;
  flex-direction: column;

  & > label {
    font-size: ${(pr) => pr.theme.fontSizes.large};
    font-weight: bold;
    color: ${(pr) => pr.theme.colors.secondary};
    margin: 1rem 0;
  }

  & > input {
    font-size: ${(pr) => pr.theme.fontSizes.medium};
    font-weight: bold;
    color: ${(pr) => pr.theme.colors.berry};
    border-radius: 5px;
    height: 2rem;

    &:focus {
      outline: none;
    }

  }

  .poll-submit-button {
    font-size: ${(pr) => pr.theme.fontSizes.large};
    font-weight: bold;
    color: ${(pr) => pr.theme.colors.berry};
    border: none;
    border-radius: 5px;
    background-color: ${(pr) => pr.theme.colors.secondary};
    height: 2rem;
    margin-top: 1rem;
    outline: none;
    cursor: pointer;

    &:hover {
      background-color: ${(pr) => pr.theme.colors.berry};
      color: ${(pr) => pr.theme.colors.secondary};
    }
  }


`;
