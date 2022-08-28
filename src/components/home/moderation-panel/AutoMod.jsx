/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as actions from "../../../store/botState/botState.actions";

import { IoIosArrowDown } from "react-icons/io";
import { MdClose } from "react-icons/md";

import AutoModSettings from "./AutoModSettings";

const AutoMod = (props) => {
  const { currentAutoModSettings, userData, token, getAutoModSettings } = props;
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    getAutoModSettings(token, userData);
  }, []);

  return (
    <AutoModStyled>
      <div>
        <div className="view-settings" onClick = {() => setIsOpen(!isOpen)}>
          <span className="view-settings-title">AutoMod Settings</span>
          {
            !isOpen ? 
            <IoIosArrowDown className="view-settings-icon" onClick={() => setIsOpen(!isOpen)} /> :
            <MdClose className="view-settings-icon" onClick={() => setIsOpen(!isOpen)} />
          }
        </div>
        {
          isOpen && 
            <AutoModSettings autoModSettings={currentAutoModSettings} twitchName = {userData.twitch_user} />
        }
      </div>
    </AutoModStyled>
  );
};

const mapStateToProps = (state) => {
  return {
    currentAutoModSettings: state.currentAutoModSettings,
  };
};

export default connect(mapStateToProps, actions)(AutoMod);

const AutoModStyled = styled.div`
  .view-settings {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    border-bottom: 1px solid #e6e6e6;
    cursor: pointer;
  }

  .view-settings-title {
    font-size: ${(pr) => pr.theme.fontSizes.medium};
    font-weight: bold;
    color: ${(pr) => pr.theme.colors.secondary};
    margin-bottom: 0.5rem;
  }

  .view-settings-icon {
    font-size: ${(pr) => pr.theme.fontSizes.large};
    color: ${(pr) => pr.theme.colors.secondary};
    margin-left: 0.5rem;
  }




`;
