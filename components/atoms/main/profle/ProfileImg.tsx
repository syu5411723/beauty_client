import Image from "next/dist/client/image"
import styled from "styled-components"
import {pc,sp} from '../../../Layout/media'

const ImgWrapper = styled.div`
        position:relative;
        border-radius:100px;
    ${sp`
        width:30vw;
        height:30vw;
        margin-bottom: 15px;
    `}
`


export const ProfileImg = () => {
    return (
        <ImgWrapper>
            <Image src='/img/profile.jpeg' layout='fill' objectFit='cover' />
        </ImgWrapper>
    )
}
