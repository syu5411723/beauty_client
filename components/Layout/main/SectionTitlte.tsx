import { VFC } from "react"
import styled from "styled-components"

import { Line } from "./Line"

type Props = {
    title: string,
    title2: string,
}
const Wrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin-bottom:calc(2.5rem + ((1vw - 3.5px) * 4.2105));
`
const Title = styled.h2`
    font-size: calc(1.5rem + ((1vw - 3.5px) * 1.7895));
    letter-spacing:1px;
    margin-bottom: 5px;
    font-weight:400;
    font-family: 'Quicksand', sans-serif;
`
const Title2 = styled.h3`
    font-size: calc(1.0625rem + ((1vw - 3.5px) * 0.9474));
    letter-spacing: 1px;
    font-family: 'M PLUS 1p', sans-serif;
    font-weight: 100;
`
const LineWrapper = styled.div`

`

export const SectionTitle: VFC<Props> = ({ title, title2 }) => {
    return (
        <Wrapper>
            <Title>{title}</Title>
            <LineWrapper>
                <Line header={false} />
            </LineWrapper>
            <Title2>{title2}</Title2>
        </Wrapper>
    )
}
