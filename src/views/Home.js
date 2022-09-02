/* eslint-disable no-unused-vars */

import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import * as authActions from "../store/authState/authState.creators";

import ButtonPanel from "../components/control-panel/ButtonPanel";
import ClipIt from "../components/home/ClipIt";
import Commercial from "../components/home/Commercial";
import Poll from "../components/home/poll/Poll";
import SettingsDisplay from "../components/home/chat-settings/SettingsDisplay";
import TitleBox from "../components/home/TitleBox";
import ModerationPanel from "../components/home/moderation-panel/ModerationPanel";
import MusicHome from "../components/home/music/Music-home";



function Home(props) {

  const { userData, refreshUserData, getAccessToken, verifyAccessToken, twitchVerified, accessToken, logoutUser } = props;

  const [token] = useState(localStorage.getItem('jwtToken'))

  const navigate = useNavigate()

  const checkTwitchAccess = useCallback( async () => {
    console.log('Checking Twitch Status...') //!REMOVE
    await verifyAccessToken(accessToken, userData.twitch_user, userData.unx_id, token, userData.twitch_id )

    if (!twitchVerified){
      await logoutUser()
      navigate('/')
    }

  }, [verifyAccessToken, accessToken, userData.twitch_user, userData.unx_id, userData.twitch_id, token, twitchVerified, logoutUser, navigate])


  useEffect(() => {
    console.log('Refreshing.....') //!REMOVE
    refreshUserData();
    getAccessToken(token, userData.unx_id, userData.twitch_user)

  }, [ getAccessToken, refreshUserData, token, userData.twitch_user, userData.unx_id]);

  // useEffect(() => {
  //   checkTwitchAccess()
  // }, [checkTwitchAccess])
  

  return (
    <HomeStyled>
      <div className="profile-information">
        <div className="profile-image">
          <NavLink to="/">
            <img src={userData.profile_img} alt="profile-pic" />
          </NavLink>
          <span className="profile-name">{userData.twitch_user}</span>
        </div>
      </div>
      <div className="home-body">
        <div className="column-1">
          <TitleBox />
          <ButtonPanel />
          <Poll />
          <ClipIt />
          <Commercial />
          <SettingsDisplay />
        </div>
        <div className="column-2">
          <ModerationPanel />
        </div>
        <div className="column-3">
          <MusicHome  />
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
    songsData: state.songsData,
    accessToken: state.accessToken,
    twitchVerified: state.twitchVerified
  };
};

export default connect(mapStateToProps, authActions)(Home);

const HomeStyled = styled.div`
  background: radial-gradient(circle, rgba(37,70,94,1) 0%, rgba(32,18,42,1) 70%);

  .profile-information {
    display: flex;
    color: ${pr => pr.theme.fontColors.white};
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
    color: ${pr => pr.theme.fontColors.white};
    width: 100px;
    height: 100px;
  }

  .profile-name {
    margin-left: 10px;
    font-size: ${(pr) => pr.theme.fontSizes.large};
    font-weight: bold;
    color: ${(pr) => pr.theme.fontColors.secondary};
    text-transform: uppercase;
  }

  .home-body {
    min-width: 90%;
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
