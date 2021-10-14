import styled from "styled-components"
import { pc } from "../../../Layout/media"

type HeaderLink = {
    name: string,
}

const Wrapper = styled.div<HeaderLink>`
    width:90%;
    margin:calc(2.1875rem + ((1vw - 3.5px) * 1.5789)) auto 0px;
`
const LineWrapper = styled.div`
    display:flex;
    margin-top: 5px;
    ${pc`
    margin-top:10px;
    `}
`
const ColorLine = styled.div`
    width:30%;
    height: 2px;
    border-radius:5px;
    background-color: #E2C9D1;
`
const Line = styled.div`
    width:70%;
    height: 2px;
    border-radius:5px;
    background-color: rgba(150, 150, 150, 1);
`
const Text = styled.h2`
    font-weight: 300;
    font-size: calc(1.0625rem + ((1vw - 3.5px) * 0.9474));
`

export const Head = ({ head }) => {
    return (
        <>
            <Wrapper name={head} >
                <Text>{head}</Text>
                <LineWrapper>
                    <ColorLine />
                    <Line />
                </LineWrapper>
            </Wrapper>
        </>
    )
}
