import styled from "styled-components"
import { pc, sp, tab } from "../../../Layout/media"



const ContentWrapper = styled.div`
    margin-bottom: 60px;
`
const Text = styled.p`

    ${sp`
        line-height:28px;
        margin-bottom: 25px;
        font-size: 16px;
        letter-spacing:1px;
    `}

`

export const ProfileContent = () => {
    return (
        <ContentWrapper>
            <Text>東京都出身20代の人間。美容師をしながら、ITエンジニアとしても働いています。</Text>
            <Text>お店でお客さんにおすすめしている「美容」に関することをここでも共有していきます。</Text>
            <Text></Text>
        </ContentWrapper>
    )
}
