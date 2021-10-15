import styled from "styled-components"
import { pc } from "../../../../Layout/media"

const Wrapper = styled.div`
    width:90%;
    margin:0px auto;
`
const LineWrapper = styled.div`
    display:flex;
    margin-top: 10px;
`
const ColorLine = styled.div`
    width:100%;
    height: 3px;
    border-radius:5px;
    background-color: #E2C9D1;
`
const Line = styled.div`
    width:10px;
    height:calc(3.4375rem + ((1vw - 3.5px) * 3.1579));
    border-radius:0px;
    margin-right: 5px;
    background-color: #E2C9D1;
`
const Text = styled.h2`
    font-weight: 300;
    font-size: calc(1.0625rem + ((1vw - 3.5px) * 0.9474));
`

export const PostTitle = ({ text }) => {
    return (
        <>
            <Wrapper>
                <LineWrapper>
                    <Line />
                    <Text>{text}</Text>
                </LineWrapper>
                <ColorLine />
            </Wrapper>
        </>
    )
}
