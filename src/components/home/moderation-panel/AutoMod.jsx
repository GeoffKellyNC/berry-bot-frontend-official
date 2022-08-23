/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as actions from "../../../store/botState/botState.actions";

import AutoModSettings from "./AutoModSettings";

const AutoMod = (props) => {
  const { currentAutoModSettings, userData, token, getAutoModSettings } = props;

  useEffect(() => {
    getAutoModSettings(token, userData);
  }, []);

  return (
    <AutoModStyled>
      <div>
        <AutoModSettings autoModSettings={currentAutoModSettings} twitchName = {userData.twitch_user} />
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

const AutoModStyled = styled.div``;
