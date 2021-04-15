import {VscSettingsGear} from "react-icons/all";
import React from "react";
import styled from "styled-components";
interface Props {
    handleClickOnButton: any
}

const SettingsBtn = styled.div`
  display: flex;
  flex-direction: column;
`;

const MiniGamesSettingsButton: React.FC<Props> = ({handleClickOnButton}) => {
    return (
        <SettingsBtn>
        <button
            type="button"
            className="btn btn-dark"
            onClick={() => handleClickOnButton()}
        >
            <div className="d-flex align-items-center">
                <VscSettingsGear/>
                Settings
            </div>
        </button>
    </SettingsBtn>
    );
};

export default MiniGamesSettingsButton;