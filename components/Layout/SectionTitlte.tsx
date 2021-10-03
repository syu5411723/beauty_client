import { motion } from "framer-motion"
import { VFC } from "react"
import { useInView } from "react-intersection-observer"
import styled from "styled-components"

type Props = {
    title: string,
    title2: string,
}
const Wrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin: 30px 0 40px;
`

const Title = styled.div`
    font-size: 30px;
    letter-spacing:1px;
    margin-bottom: 5px;
`

const Line = styled.div`
    width: 2px;
    height: 30px;
    background-color: #333;
    margin: 0 15px;
    border-radius:10px;
`
const Title2 = styled.div`
    font-size: 18px;
    letter-spacing: 1px;
`


const lineV = {}

export const SectionTitle: VFC<Props> = ({title, title2}) => {
    const [res, inView] = useInView({
        rootMargin: '-100px 0px',
        triggerOnce: true,
    })
    return (
        <Wrapper>
                <Title>{title}</Title>
                <Line />
                <Title2>{title2}</Title2>
        </Wrapper>
    )
}
