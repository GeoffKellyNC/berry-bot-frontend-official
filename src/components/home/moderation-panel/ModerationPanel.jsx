/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as action from "../../../store/botState/botState.actions";

import { getUserData, getUserToken } from "../../../util/localData";

import PointsMod5 from "./Points-Mod-5";
import AutoMod from "./AutoMod";
import BanUser from "./BanUser";
import BlockedTerms from './BlockedTerms'

import { FiRefreshCw } from "react-icons/fi";
import { TbSettings } from "react-icons/tb";



const ModerationPanel = (props) => {
  const { modPlayerPointData, getPlayerModPoints } = props;
  const [userData, setUserData] = useState(getUserData());
  const [token, setToken] = useState(localStorage.getItem('jwtToken'))



  useEffect(() => {
    getPlayerModPoints(userData.unx_id);
  }, [getPlayerModPoints, userData.unx_id]);

  const refreshPoints = () => {
    getPlayerModPoints(userData.unx_id);
  };

  return (
    <ModPanel>
      <div className="mod-header">
        <TbSettings className="mod-icon" />
        <h1 className="mod-panel-title">Moderation Panel</h1>
        <FiRefreshCw className="refresh-icon" onClick={refreshPoints} />
      </div>
      <div className="mod-points">
        <PointsMod5 pointData={modPlayerPointData} />
      </div>
      <div className="mod-panel-bottom">
        <BlockedTerms />
        <BanUser token={token} userData={userData} />
        <AutoMod userData={userData} token={token} />
      </div>
    </ModPanel>
  );
};

const mapStateToProps = (state) => {
  return {
    modPlayerPointData: state.modPlayerPointData,
  };
};

export default connect(mapStateToProps, action)(ModerationPanel);

const ModPanel = styled.div`
    min-width: 500px;
    height: auto;
    font-family: ${(pr) => pr.theme.fonts.primary};
    border-radius: 5px;
    box-sizing: border-box;
    background: ${(pr) => pr.theme.gradients.primary}
    color: ${pr => pr.theme.fontColors.primary};

    &:hover {
        box-shadow: 0px 0px 20px 0px ${(pr) => pr.theme.colors.secondary};
    }

    .mod-header{
        justify-content: space-around;
        display: flex;
        align-items: center;
        padding: 10px;

    }

    .mod-panel-title{
        font-size: ${(pr) => pr.theme.fontSizes.large};
        font-weight: bold;
        color: ${ pr => pr.theme.fontColors.primary };
        margin-bottom: 0.5rem;

    }

    .refresh-icon{
        font-size: ${(pr) => pr.theme.fontSizes.large};
        color: ${(pr) => pr.theme.colors.berry};
        cursor: pointer;
        
        &:hover{
            color: ${(pr) => pr.theme.colors.berry};
        }
    }

    .mod-icon{
        font-size: ${(pr) => pr.theme.fontSizes.large};
        color: ${(pr) => pr.theme.colors.secondary};
        cursor: pointer;

        &:hover{
            color: ${(pr) => pr.theme.colors.berry};
        }
    }


    @media(max-width: 520px){
        width: 50%;
    }

`;
