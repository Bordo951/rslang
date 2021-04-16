import {VscSettingsGear} from "react-icons/all";
import React from "react";
import styled from "styled-components";

interface Props {
    handleClickOnButton: any
}

const StyledButton = styled.div`
    button {
        padding: 5px 8px;
    }
    svg {
        margin-right: 5px;
    }
`;

const MiniGamesSettingsButton: React.FC<Props> = ({handleClickOnButton}) => {
    return (
        <StyledButton>
            <button type="button" onClick={() => handleClickOnButton()}>
                <div className="d-flex align-items-center">
                    <VscSettingsGear/> Settings
                </div>
            </button>
        </StyledButton>
    );
};

export default MiniGamesSettingsButton;