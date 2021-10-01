import Image from "next/image"
import styled from "styled-components"

import Img from "../../../public/img/pastel.jpg"
import { ThumbButton } from "./ThumbButton"
import { ThumbnailContent } from "./ThumbnailContent"

const ThumbWrapper = styled.div`
    width:100vw;
    height:15vh;
    background: url('/img/pastel.jpg');
    text-align:center;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    color:white;
`

export const ThumbnailImg = () => {
    return (
        <>
        <ThumbWrapper>
            <ThumbnailContent text='test' />
            <ThumbButton />
        </ThumbWrapper>
        </>
    )
}