import styled from "styled-components"

const Wrapper = styled.div`
    display:flex;
    align-items:center;
    margin-bottom:calc(0.75rem + ((1vw - 3.5px) * 1.3684));
`
const Icon = styled.div`
    background-color: #FC1C05;
    width:10px;
    height:10px;
    border-radius:50%;
`
const Text = styled.p`
    margin-left: 5px;
`
const Arrow = styled.div`
`

export const LinkHead = ({text}) => {
    return (
        <Wrapper>
            <Icon><Arrow></Arrow></Icon>
            <Text>{text}</Text>
        </Wrapper>
    )
}
