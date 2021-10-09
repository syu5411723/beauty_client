import styled from "styled-components"

const ContentHeader = styled.div`
    display:flex;
    justify-content:center;
    font-weight:400;
    font-family: 'Quicksand', sans-serif;
    border-bottom:1px solid #E2C9D1;
`
const ContentText = styled.p``
const ContentHide = styled.p``
const Container = styled.div`
    border:2px solid #E2C9D1;
    border-radius:5px;
    width:100%;
    height:100%;
`
const TextWrapper = styled.ul`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    padding: 20px 0 20px 25px;
`
const Text = styled.li`
    list-style:none;
    margin-bottom: 15px;
    &:last-child {
        margin-bottom: 0;
    }
`

export const ContentFrame2 = ({ text1, text2, text3, }) => {
    return (
        <Container>
            <ContentHeader>
                <ContentText>contents</ContentText>
                <ContentHide>[hide]</ContentHide>
            </ContentHeader>
            <TextWrapper>
                <Text>{text1}</Text>
                <Text>{text2}</Text>
                <Text>{text3}</Text>
            </TextWrapper>
        </Container>
    )
}
