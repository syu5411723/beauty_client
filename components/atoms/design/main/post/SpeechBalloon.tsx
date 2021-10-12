import { VFC } from "react"
import styled from "styled-components"

type Style = {
    me:boolean,
}

type Props = {
    me: boolean,
    text: string,
}

const Wrapper = styled.div<Style>`
    position:relative;
    min-width:100px;
    max-width:300px;
    padding:10px;
    line-height:1.5;
    text-align:left;
    color:#333333;
    border:2px solid #E2C9D1;
    font-weight:400;
    font-size: calc(0.75rem + ((1vw - 3.5px) * 0.4211));
    border-radius:12px;
    letter-spacing:0.05em;
    word-wrap:break-word;
    &::after{
        border: solid transparent;
        content:'';
        height:0;
        width:0;
        pointer-events:none;
        position:absolute;
        top:35%;
        border-color: rgba(255, 255, 255, 0);
        ${({me}) => me ? `
        left:100%;
        border-top-width:5px;
        border-bottom-width:5px;
        border-left-width:9px;
        border-right-width:9px;
        margin-top: -5px;
        border-left-color:#FFFFFF;
        ` : `
        right:100%;
        border-top-width:5px;
        border-bottom-width:5px;
        border-left-width:9px;
        border-right-width:9px;
        margin-top: -5px;
        border-right-color:#FFFFFF;
        `}
    }
    &::before{
        border: solid transparent;
        content:'';
        /* height:0;
        width:0; */
        pointer-events:none;
        position:absolute;
        top:35%;
        border-color: rgba(226, 201, 209, 0);
        ${({me}) => me ? `
        left:100%;
        border-top-width:7px;
        border-bottom-width:7px;
        border-left-width:12px;
        border-right-width:12px;
        margin-top: -7px;
        margin-left: 1px;
        border-left-color:#E2C9D1;
        ` : `
        right:100%;
        border-top-width:7px;
        border-bottom-width:7px;
        border-left-width:12px;
        border-right-width:12px;
        margin-top: -7px;
        margin-right: 1px;
        border-right-color:#E2C9D1;
        `}
    }
`

export const SpeechBalloon: VFC<Props> = ({ me, text }) => {
    return (
        <Wrapper me={me}>
            <p>{text}</p>
        </Wrapper>
    )
}
