import styled from "styled-components"
import { pc, sp, tab } from "../../../Layout/media"

type Style = {
    side: boolean,
}

const ContentWrapper = styled.div<Style>`
    margin-bottom: 60px;
    width:calc(16.25rem + ((1vw - 3.5px) * 25.2632));
    margin:0 auto;
    ${({side}) => side && `
        width: 95%;
    `}
`
const Text = styled.p`
    ${sp`
        line-height:25px;
        margin-bottom: 22px;
        font-size: 13px;
        letter-spacing:1px;
    `}
        ${tab`
        line-height:25px;
        margin-bottom: 25px;
        font-size: 15px;
        letter-spacing:1px;
    `}
        ${pc`
        line-height:25px;
        margin-bottom: 25px;
        font-size: 16px;
        letter-spacing:1px;
    `}
`

export const ProfileContent = ({side}) => {
    return (
        <ContentWrapper side={side}>
            <Text>東京都出身20代の人間。美容師をしながら、ITエンジニアとしても働いています。</Text>
            <Text>お店でお客さんにおすすめしている「美容」に関することをここでも共有していきます。</Text>
            <Text></Text>
        </ContentWrapper>
    )
}
