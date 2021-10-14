import { motion } from "framer-motion"
import styled from "styled-components"

type Color = {
    color: string;
}
const Container = styled.div`
    display:flex;
    height: 100%;
    align-items: center;
`
const Inner = styled(motion.div)`
    display:flex;
    margin-top: calc(0.3125rem + ((1vw - 3.5px) * 0.5263));
`
const D = styled(motion.div) <Color>`
    width:calc(0.5625rem + ((1vw - 3.5px) * 0.8421));
    height: calc(0.5625rem + ((1vw - 3.5px) * 0.8421));
    border-radius:50%;
    margin-right: calc(0.3125rem + ((1vw - 3.5px) * 0.8421));
    background-color: ${({ color }) =>
        color === 'gray' && 'rgba(150, 150, 150, 1)' ||
        color === 'pink' && '#E2C9D1' ||
        color === 'red' && '#DB7093'
    };
`
const innerV = {
    hidden: {opacity: 1 },
    visible: {opacity: 1 , transition: { staggerChildren: 0.05, delayChildren: 1 } },
    eixt: {opacity: 0, y: "20px", transition:{ duration: 0.3, ease: "easeOut"}}
}
const dV = {
    hidden: { opacity: 0, y: "-30px" },
    visible: { opacity: 1, y: "0px", transition:{ duration: 0.6, ease: "easeOut"}},
}
export const Dot = () => {
    return (
        <Container>
            <Inner
                variants={innerV}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <D color="gray"
                    variants={dV}
                />
                <D color="pink"
                    variants={dV}
                />
                <D color="red"
                    variants={dV}
                />
            </Inner>
        </Container>
    )
}
