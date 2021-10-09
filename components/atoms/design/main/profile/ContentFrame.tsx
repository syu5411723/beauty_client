import styled from "styled-components"

const Wrapper = styled.div`
    border:1px solid rgba(0,0,0,0.1);
    border-radius:7px;
    width:100%;
    padding: 20px 0 20px 25px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`
const Text = styled.div`

`

export const ContentFrame = ({text1, text2, text3,}) => {
    return (
        <Wrapper>
            <Text>{text1}</Text>
            <Text>{text2}</Text>
            <Text>{text3}</Text>
        </Wrapper>
    )
}
