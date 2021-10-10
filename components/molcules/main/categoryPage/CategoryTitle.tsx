import styled from "styled-components"

import { Line } from "../../../Layout/main/Line"
import { tab, pc } from "../../../Layout/media"

const Wrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top: 30px;
    opacity:0.6;
    ${tab`
        transform: translateX(20%);
    `}
    ${pc`
        transform: translateX(20%);
    `}
`
const Title = styled.h2`
    font-size: calc(1.5625rem + ((1vw - 3.5px) * 2.1053));
    letter-spacing:1px;
    margin-bottom: 5px;
    font-weight:400;
    font-family: 'Quicksand', sans-serif;
`
const Title2 = styled.h3`
    font-size: 18px;
    letter-spacing: 1px;
    font-family: 'M PLUS 1p', sans-serif;
    font-weight: 100;
`
const LineWrapper = styled.div`

`

export const CategoryTitle = () => {
    return (
        <Wrapper>
            <Title>category</Title>
            <LineWrapper>
                <Line header={false} />
            </LineWrapper>
        </Wrapper>
    )
}
