import React from "react";
import styled from "styled-components";

import { FiEdit } from "react-icons/fi";

const AutoModSettings = ({ autoModSettings, twitchName }) => {
  const AMS = autoModSettings;

  const getSettingName = (setting) => {
    switch (setting) {
      case 0:
        return "No Filtering";
      case 1:
        return "Less Filtering";
      case 2:
        return "Some Filtering";
      case 3:
        return "More Filtering";
      case 4:
        return "Max Filtering";
      default:
        return "No Filtering";
    }
  };

  return (
    <ModSettings>
      <div className="autoMod-settings-title">
        <h3> Current AutoMod Settings </h3>
        <a 
            href= {`https://dashboard.twitch.tv/u/${twitchName}/settings/moderation/automod`}
            className = 'edit-mod-link'
            target = '_blank' rel="noreferrer"> <FiEdit className = 'edit-icon' title = 'Edit Moderation Settings'/> </a>
      </div>
      <div className="settings-container">
        <div className="mod-setting">
          <span className="setting-name">Aggression: </span>
          <span className={`setting-value value-${AMS.aggression}`}>
            {getSettingName(AMS.aggression)}
          </span>
        </div>
        <div className="mod-setting">
          <span className="setting-name">Bullying: </span>
          <span className={`setting-value value-${AMS.bullying}`}>
            {getSettingName(AMS.bullying)}
          </span>
        </div>
        <div className="mod-setting">
          <span className="setting-name">Disability: </span>
          <span className={`setting-value value-${AMS.disability}`}>
            {getSettingName(AMS.disability)}
          </span>
        </div>
        <div className="mod-setting">
          <span className="setting-name">Misogyny: </span>
          <span className={`setting-value value-${AMS.misogyny}`}>
            {getSettingName(AMS.misogyny)}
          </span>
        </div>
        <div className="mod-setting">
          <span className="setting-name">Racism: </span>
          <span
            className={`setting-value value-${AMS.race_ethnicity_or_religion}`}
          >
            {getSettingName(AMS.race_ethnicity_or_religion)}
          </span>
        </div>
        <div className="mod-setting">
          <span className="setting-name"> Sexual Terms: </span>
          <span className={`setting-value value-${AMS.sex_based_terms}`}>
            {getSettingName(AMS.sex_based_terms)}
          </span>
        </div>
        <div className="mod-setting">
          <span className="setting-name">Sexuality/Gender: </span>
          <span
            className={`setting-value value-${AMS.sexuality_sex_or_gender}`}
          >
            {getSettingName(AMS.sexuality_sex_or_gender)}
          </span>
        </div>
        <div className="mod-setting">
          <span className="setting-name">Swearing: </span>
          <span className={`setting-value value-${AMS.swearing}`}>
            {getSettingName(AMS.swearing)}
          </span>
        </div>
      </div>
    </ModSettings>
  );
};

export default AutoModSettings;

const ModSettings = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: auto;
  padding: 10px;
  animation: fadeIn 0.2s ease-in;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .autoMod-settings-title {
    font-size: ${(pr) => pr.theme.fontSizes.large};
    font-weight: bold;
    color: ${(pr) => pr.theme.colors.berry};
    margin-bottom: 0.5rem;
    text-align: center;
    display: flex;
    justify-content: center;
  }

    .edit-mod-link {
        color: ${(pr) => pr.theme.colors.secondary};
        text-decoration: none;
        font-size: ${(pr) => pr.theme.fontSizes.medium};
        font-weight: bold;
        margin-left: 0.5rem;
    }

  .mod-setting {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
  }

  .setting-name {
    font-size: ${(pr) => pr.theme.fontSizes.medium};
    font-weight: bold;
    color: ${(pr) => pr.theme.colors.secondary};
    margin-bottom: 0.5rem;
  }

  .setting-value {
    font-size: ${(pr) => pr.theme.fontSizes.medium};
    font-weight: bold;
  }

  .value-0 {
    color: green;
  }

  .value-1 {
    color: yellow;
  }

  .value-2 {
    color: orange;
  }

  .value-3 {
    color: red;
  }

  .value-4 {
    color: purple;
  }
`;
