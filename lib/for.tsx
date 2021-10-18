import styled from "styled-components"
import Image from "next/image"
import { useEffect } from "react"

import { SpeechBalloon } from "../components/atoms/design/main/post/SpeechBalloon"
import { Text } from '../components/atoms/design/main/Text'
import { InternalLink } from "../components/Layout/InternalLink/InternalLink"

export const Result = ({t1, t2, t3, t4, t5, t6, t7, t8, t9, isLink, linkText, link, headText, img, contentText }) => {
    return (
        <>
            <Text text={t1} />
            <Text text={t2} />
            <Text text={t3} />
            <Text text={t4} />
            <Text text={t5} />
            <Text text={t6} />
            <Text text={t7} />
            <Text text={t8} />
            <InternalLink isLink={isLink} headText={headText} linkText={linkText}  img={img} link={link} contentText={contentText} />
        </>
    )
}

//  talk  //


type Props = {
    me: boolean,
}


const Wrapper = styled.div<Props>`
    display:flex;
    align-items:center;
    margin-bottom: 10px;
    ${({ me }) => me ? `
    flex-direction: row-reverse;
    `: `
    `}
`
const ImgWrapper = styled.div<Props>`
    width:calc(2.5rem + ((1vw - 3.5px) * 2.1053));
    height:calc(2.5rem + ((1vw - 3.5px) * 2.1053));
    min-height:40px;
    min-width:40px;
    position:relative;
    overflow:hidden;
    border-radius:50%;
    ${({ me }) => me ? `
    margin-left: 20px;
    ` : `
    margin-right: 20px;
    `}
`


export const talkRoop = (i, talk1, talk2, talk3, talk4, talk5, talk6) => {
    useEffect(() => {
        const result = document.getElementById('result')
        if (i == 2) {
            result.removeChild(result.children[2])
        }
        if (i == 1) {
            result.removeChild(result.children[2])
            result.removeChild(result.children[1])
        }
    },[])
        return (
            <div id="result" >
                <div>
                    <Wrapper me={false}>
                        <ImgWrapper me={false}>
                            <Image src="/img/customer.jpg" layout="fill" objectFit="cover" />
                        </ImgWrapper>
                        <SpeechBalloon me={false} text={talk1} />
                    </Wrapper>
                    <Wrapper me={true}>
                        <ImgWrapper me={true}>
                            <Image src="/img/profile.jpg" layout="fill" objectFit="cover" />
                        </ImgWrapper>
                        <SpeechBalloon me={true} text={talk2} />
                    </Wrapper>
                </div>
                <div>
                    <Wrapper me={false}>
                        <ImgWrapper me={false}>
                            <Image src="/img/customer.jpg" layout="fill" objectFit="cover" />
                        </ImgWrapper>
                        <SpeechBalloon me={false} text={talk3} />
                    </Wrapper>
                    <Wrapper me={true}>
                        <ImgWrapper me={true}>
                            <Image src="/img/profile.jpg" layout="fill" objectFit="cover" />
                        </ImgWrapper>
                        <SpeechBalloon me={true} text={talk4} />
                    </Wrapper>
                </div>
                <div>
                    <Wrapper me={false}>
                        <ImgWrapper me={false}>
                            <Image src="/img/customer.jpg" layout="fill" objectFit="cover" />
                        </ImgWrapper>
                        <SpeechBalloon me={false} text={talk5} />
                    </Wrapper>
                    <Wrapper me={true}>
                        <ImgWrapper me={true}>
                            <Image src="/img/profile.jpg" layout="fill" objectFit="cover" />
                        </ImgWrapper>
                        <SpeechBalloon me={true} text={talk6} />
                    </Wrapper>
                </div>
            </div>
        )
}