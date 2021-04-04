import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: white;
  border: 2px solid gray;
`;

interface FullScreenerInterface {
    targetObjectId: string
}

const FullScreener: React.FC<FullScreenerInterface> = ({targetObjectId}) => {
    const document: any = window.document;
    document.cancelFullScreen = document.cancelFullScreen || document.webkitCancelFullScreen || document.mozCancelFullScreen;

    let enterFullscreen = (id:string) => {
        const document: any = window.document;
        let el =  document.getElementById(id);

        if (el.webkitRequestFullScreen) {
            el.webkitRequestFullScreen();
            //el.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        } else {
            el.mozRequestFullScreen();
        }
    };

    return (
        <StyledButton onClick={() => enterFullscreen(targetObjectId)}>
            FullScreen Game
        </StyledButton>
    );
};

export default FullScreener;