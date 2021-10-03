import styled from "styled-components"
import Image from "next/dist/client/image"
import { VFC } from "react"

type Props = {
    src: string
}


const ImgWrapper = styled.div`
    position:relative;
    width: 40%;
    height:20vw;
`


export const ArticleImg:VFC<Props> = ({src}) => {
    return (
        <ImgWrapper>
            <Image src={src} layout='fill' objectFit='cover' />
        </ImgWrapper>
    )
}
