import Image from "next/image"
import { VFC } from "react"
import styled from "styled-components"

import { pc, sp, tab } from '../../../Layout/media'

type Props = {
    side: boolean,
}

const ImgWrapper = styled.div<Props>`
        position:relative;
        border-radius:50%;
        overflow:hidden;
        margin-bottom: 15px;
        width:calc(6.25rem + ((1vw - 3.5px) * 15.7895));
        height:calc(6.25rem + ((1vw - 3.5px) * 15.7895));
    ${({ side }) => side && `
        width:calc(7.5rem + ((1vw - 6px) * 4.2857));
        height: calc(7.5rem + ((1vw - 6px) * 4.2857));
    `}
`


export const ProfileImg: VFC<Props> = ({ side }) => {
    return (
        <ImgWrapper side={side} >
            <Image src='/img/profile.jpg' layout='fill' objectFit='cover' />
        </ImgWrapper>
    )
}
