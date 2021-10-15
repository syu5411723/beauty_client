import styled from "styled-components"

const Text = styled.p`
    font-size: calc(0.75rem + ((1vw - 3.5px) * 0.6316));
    letter-spacing:0.05em;
    margin-bottom:calc(0.625rem + ((1vw - 3.5px) * 0.5263));
`
const Wrapper = styled.div`
    width:90%;
    margin:calc(1.25rem + ((1vw - 3.5px) * 2.1053)) auto;
`
export const IntroText = ({text1, text2, text3,}) => {
    return (
        <Wrapper>
            <Text>{text1}</Text>
            <Text>{text2}</Text>
            <Text>{text3}</Text>
        </Wrapper>
    )
}
