import React from 'react';
import FullScreener from "../../helpers/FullScreener";
import styled from "styled-components";
import MiniGamesSettingsButton from "./MiniGamesSettingsButton";

const GameControlsContainer = styled.div`

`;

interface Props {
    showSettingWindow: any;
}

const GameControls: React.FC<Props> = ({showSettingWindow}) => {
    return <GameControlsContainer>
        <FullScreener targetObjectId="game"/>
        {(showSettingWindow) && (
            <MiniGamesSettingsButton handleClickOnButton={() => {
                showSettingWindow()
            }}/>
        )}
    </GameControlsContainer>;
};

export default GameControls;
