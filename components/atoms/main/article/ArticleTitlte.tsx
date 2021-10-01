import { motion } from "framer-motion"
import { VFC } from "react"
import { useInView } from "react-intersection-observer"
import styled from "styled-components"

type Props = {
    title:string,
}

const Wrapper = styled.div`
    display:flex;
    justify-content:center;
    margin: 30px 0 40px;
`

const Title = styled.div`
    font-size: 24px;
    letter-spacing:1px;
`
const Line = styled(motion.div)``


const lineV = {}

export const LatestTitlte:VFC<Props> = ({ title }) => {
    const [res, inView] = useInView({
        rootMargin: '-100px 0px',
        triggerOnce: true,
    })
    return (
        <Wrapper>
            <Title>{title}</Title>
        </Wrapper>
    )
}
