import styled from "styled-components"
import Image from "next/image"

import { SpeechBalloon } from "../components/atoms/design/main/post/SpeechBalloon"
import { Text } from '../components/atoms/design/main/Text'

export const result = (i, t1, t2, t3, t4, t5, t6, t7, t8, t9) => {
    if (i == 3) {
        return (
            <>
                <Text text={t1} />
                <Text text={t2} />
                <Text text={t3} />
            </>
        )
    }
    if (i == 4) {
        return (
            <>
                <Text text={t1} />
                <Text text={t2} />
                <Text text={t3} />
                <Text text={t4} />
            </>
        )
    }
    if (i == 5) {
        return (
            <>
                <Text text={t1} />
                <Text text={t2} />
                <Text text={t3} />
                <Text text={t4} />
                <Text text={t5} />
                <Text text={t6} />
                <Text text={t7} />
            </>
        )
    }
    if (i == 6) {
        return (
            <>
                <Text text={t1} />
                <Text text={t2} />
                <Text text={t3} />
                <Text text={t4} />
                <Text text={t5} />
                <Text text={t6} />
            </>
        )
    }
    if (i == 7) {
        return (
            <>
                <Text text={t1} />
                <Text text={t2} />
                <Text text={t3} />
                <Text text={t4} />
                <Text text={t5} />
                <Text text={t6} />
                <Text text={t7} />
            </>
        )
    }
    if (i == 8) {
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
            </>
        )
    }
    else {
        ''
    }
}

//  talk  //


type Props = {
    me: boolean,
}


const Wrapper = styled.div<Props>`
    display:flex;
    align-items:center;
    ${({ me }) => me ? `
    flex-direction: row-reverse;
    `: `
    `}
`
const ImgWrapper = styled.div<Props>`
    width:55px;
    height:55px;
    position:relative;
    overflow:hidden;
    border-radius:100px;
    ${({ me }) => me ? `
    margin-left: 20px;
    ` : `
    margin-right: 20px;
    `}
`


export const talkRoop = (i, talk1, talk2, talk3, talk4, talk5, talk6) => {
    if (i == 2) {
        return (
            <>
                <Wrapper me={false}>
                    <ImgWrapper me={false}>
                        <Image src="/img/customer.jpg" layout="fill" objectFit="cover" />
                    </ImgWrapper>
                    <SpeechBalloon me={false} text={talk1} />
                </Wrapper>
                <Wrapper me={true}>
                    <ImgWrapper me={true}>
                        <Image src="/img/profile2.jpg" layout="fill" objectFit="cover" />
                    </ImgWrapper>
                    <SpeechBalloon me={true} text={talk2} />
                </Wrapper>
                <Wrapper me={false}>
                    <ImgWrapper me={false}>
                        <Image src="/img/customer.jpg" layout="fill" objectFit="cover" />
                    </ImgWrapper>
                    <SpeechBalloon me={false} text={talk3} />
                </Wrapper>
                <Wrapper me={true}>
                    <ImgWrapper me={true}>
                        <Image src="/img/profile2.jpg" layout="fill" objectFit="cover" />
                    </ImgWrapper>
                    <SpeechBalloon me={true} text={talk4} />
                </Wrapper>
            </>
        )
    }else if (i == 3) {
        return (
            <>
                <Wrapper me={false}>
                    <ImgWrapper me={false}>
                        <Image src="/img/customer.jpg" layout="fill" objectFit="cover" />
                    </ImgWrapper>
                    <SpeechBalloon me={false} text={talk1} />
                </Wrapper>
                <Wrapper me={true}>
                    <ImgWrapper me={true}>
                        <Image src="/img/profile2.jpg" layout="fill" objectFit="cover" />
                    </ImgWrapper>
                    <SpeechBalloon me={true} text={talk2} />
                </Wrapper>
                <Wrapper me={false}>
                    <ImgWrapper me={false}>
                        <Image src="/img/customer.jpg" layout="fill" objectFit="cover" />
                    </ImgWrapper>
                    <SpeechBalloon me={false} text={talk3} />
                </Wrapper>
                <Wrapper me={true}>
                    <ImgWrapper me={true}>
                        <Image src="/img/profile2.jpg" layout="fill" objectFit="cover" />
                    </ImgWrapper>
                    <SpeechBalloon me={true} text={talk4} />
                </Wrapper>
                <Wrapper me={false}>
                    <ImgWrapper me={false}>
                        <Image src="/img/customer.jpg" layout="fill" objectFit="cover" />
                    </ImgWrapper>
                    <SpeechBalloon me={false} text={talk5} />
                </Wrapper>
                <Wrapper me={true}>
                    <ImgWrapper me={true}>
                        <Image src="/img/profile2.jpg" layout="fill" objectFit="cover" />
                    </ImgWrapper>
                    <SpeechBalloon me={true} text={talk6} />
                </Wrapper>
            </>
        )
    }
}