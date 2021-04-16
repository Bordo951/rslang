import React from "react";
import styled from "styled-components";
import {AiOutlineFullscreen} from "react-icons/all";

const StyledButton = styled.div`
    button {
        padding: 5px 8px;
    }
    svg {
        margin-right: 5px;
    }
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
        <StyledButton>
            <button className='button' onClick={() => enterFullscreen(targetObjectId)}>
                <div className="d-flex align-items-center">
                    <AiOutlineFullscreen />
                    Full Screen
                </div>
            </button>
        </StyledButton>
    );
};

export default FullScreener;