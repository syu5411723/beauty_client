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
    margin: 100px 0 55px;
`
const Title = styled.h2`
    font-size: 30px;
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

export const SectionTitle: VFC<Props> = ({title, title2}) => {
    return (
        <Wrapper>
                <Title>{title}</Title>
                <Line header={false} />
                <Title2>{title2}</Title2>
        </Wrapper>
    )
}
