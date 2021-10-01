import styled from "styled-components"


const ContentWrapper = styled.div`
    margin-left: 5vw;
`
const Text = styled.p`
    margin-bottom: 20px;
    font-size: 18px;
    letter-spacing:1px;
`

export const ProfileContent = () => {
    return (
        <ContentWrapper>
            <Text>test</Text>
            <Text>test</Text>
            <Text>test</Text>
        </ContentWrapper>
    )
}
