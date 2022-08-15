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
  flex-flow: column;
  justify-content: center;
  align-items: center;
  font-family: ${(pr) => pr.theme.fonts.primary};

  & > input {
    width: 50%;
    height: 1rem;
    border: 1px solid ${(pr) => pr.theme.colors.primary};
    border-radius: 5px;
    margin-bottom: 1rem;
    padding: 0.5rem;
    font-size: 1.5rem;
  }

  .poll-title-text {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  .poll-bit-text {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  .poll-cPoint-text {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  .poll-set-choice-text {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  .poll-duration-text {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  .poll-submit-button {
    font-size: 1.5rem;
    margin-top: 1rem;
    background: rgb(0, 185, 255);

    background: linear-gradient(
      180deg,
      rgba(0, 185, 255, 1) 0%,
      rgba(24, 24, 24, 1) 3%,
      rgba(46, 46, 46, 1) 97%,
      rgba(0, 185, 255, 1) 100%
    );
    border: 1px solid black;
    border-radius: 5px;
    padding: 1rem;
    color: white;
    cursor: pointer;

    &:hover {
        background: #0b0b0b;
        color: white;
    }
  }

  .poll-set-choice-input {
    width: 100%;
  }
`;
