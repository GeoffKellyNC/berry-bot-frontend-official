/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import * as actions from "../store/authState/authState.creators";

import ClipIt from '../components/home/ClipIt'
import ModerationPanel from "../components/home/moderation-panel/ModerationPanel";
import ButtonPanel from "../components/control-panel/ButtonPanel";
import TitleBox from "../components/home/TitleBox";
import TwitchChat from "../components/iframe/TwitchChat";
import Poll from "../components/home/Poll";
import Commercial from "../components/home/Commercial";
import SettingsDisplay from "../components/home/chat-settings/SettingsDisplay"
import CustomCommands from "../components/home/custom-commands/CustomCommands";
import MusicPlayer from "../components/home/MusicPlayer";

import { getUserToken } from "../util/localData";

import twinkle_bg from "../assets/clouds.svg"

function Home(props) {
  const [selected, setSelected] = useState(null);
  const [token, setToken] = useState(getUserToken());

  const { userData, refreshUserData } = props;

  useEffect(() => {
    refreshUserData();
  }, []);

  
  return (
    <HomeStyled>
      <div className="profile-information">
        <div className="profile-image">
          <NavLink to="/">
            <img
              src={userData.profile_img}
              alt="profile-pic"
            />
          </NavLink>
          <span className="profile-name">{userData.twitch_user}</span>
        </div>
      </div>
      <div className="home-body">
        <div className="column-1">
          <TitleBox userData = { userData } />
          <ButtonPanel />
          <Poll
            target={userData.twitch_user}
            userData={userData}
            selected={selected}
            setSelected={setSelected}
          />
          <ClipIt userData = { userData } token = { token } />
          <Commercial token={token} userData={userData} />
          <SettingsDisplay userData = { userData } token = { token } />
        </div>
        <div className="column-2">
          <ModerationPanel token = { token } />
        </div>
        <div className="column-3">
          <MusicPlayer />
        </div>
      </div>
      <div className="footer-text">
        <span>
          Made with <span className="heart">&hearts;</span> by{" "}
          <a href="geoffkelly.dev">Geoff Kelly </a>
        </span>
      </div>
    </HomeStyled>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.userData,
  };
};

export default connect(mapStateToProps, actions)(Home);

const HomeStyled = styled.div`
    ${'' /* background-image: url(${twinkle_bg}); */}
    ${'' /* background-color: #0B0B0B; */}
    background: rgba(19, 19, 19, 1);
    width: 100%;


  .profile-information {
    display: flex;
    color: white;
    font-size: ${(pr) => pr.theme.fontSizes.medium};
    width: 100%;
    margin-left: 3%;
  }

  .profile-image img {
    width: 65px;
    height: 65px;
    cursor: pointer;
    padding: 5px;
    margin-left: 10px;
  }

  .profile-image {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    color: white;
    width: 100px;
    height: 100px;
  }

  .profile-name {
    margin-left: 10px;
    font-size: ${(pr) => pr.theme.fontSizes.large};
    font-weight: bold;
    color: ${pr => pr.theme.colors.secondary};
    text-transform: uppercase;
  }

  .home-body {
    min-width: 90%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 2rem;
    align-items: center;
  }

  .column-1 {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }

  .column-2 {
    display: flex;
    flex-direction: column;
    ${'' /* align-items: center; */}
    gap: 1rem;
  }

  .test-modal {
    background: rgb(0, 185, 255);
    background: linear-gradient(
      180deg,
      rgba(0, 185, 255, 1) 0%,
      rgba(24, 24, 24, 1) 3%,
      rgba(46, 46, 46, 1) 97%,
      rgba(0, 185, 255, 1) 100%
    );
    width: 50%;
    height: 25vh;
    margin: 0 auto;
    padding: 2%;
    border-radius: 5px;
    border: 1px solid black;
    text-align: center;
    font-size: 1.5rem;
  }

  .footer-text {
    text-align: center;
    font-size: ${(pr) => pr.theme.fontSizes.small};
    color: white;
    margin-top: 1.7rem;
    font-family: ${(pr) => pr.theme.fonts.primary};
  }


  @media (max-width: 880px) {
    .home-body {
      flex-direction: column;
      width: 100%;
    }
  }
`;
