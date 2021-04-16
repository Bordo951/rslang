import {Button, Form, Spinner} from "react-bootstrap";
import React from "react";
import styled from "styled-components";

interface Props {
    idSpeed: string
    handleSpeedChange: any;
    isMusic: boolean;
    handleSwitchMusic: any;
    closeSettingWindow: any;
}

const SettingsWindow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: max-content;
  height: max-content;
  background: url(/images/settings.png) center center/cover no-repeat;
  font-family: "BubblegumSans-Regular", cursive;
  border-radius: 10px;
  form {
    display: flex;
    justify-content: center;

    > div {
      margin: 0 5px 15px 5px;
    }
  }
`;

const MiniGamesSettingsWindows: React.FC<Props> = ({idSpeed, handleSpeedChange, isMusic, handleSwitchMusic, closeSettingWindow}) => {
    return (
        <SettingsWindow>
            Скорость игры:
            <Form>
                <Form.Check
                    checked={idSpeed === "beginner"}
                    type="radio"
                    id="beginner"
                    value="15"
                    label="Начинающий"
                    onChange={(e) => handleSpeedChange(e)}
                />

                <Form.Check
                    checked={idSpeed === "midle"}
                    type="radio"
                    id="midle"
                    value="8"
                    label="Средний"
                    onChange={(e) => handleSpeedChange(e)}
                />
                <Form.Check
                    checked={idSpeed === "high"}
                    type="radio"
                    value="4"
                    id="high"
                    label="Полиглот"
                    onChange={(e) => handleSpeedChange(e)}
                />
            </Form>
            <Form>
                <Form.Check
                    type="switch"
                    id="custom-switch"
                    label="Music"
                    checked={isMusic}
                    onChange={() => handleSwitchMusic()}
                />
            </Form>
            <Button variant="success" onClick={() => closeSettingWindow()}>
                OK
            </Button>
        </SettingsWindow>
    );
};

export default MiniGamesSettingsWindows;