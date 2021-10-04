import { motion } from 'framer-motion'
import React, { VFC } from 'react'
import styled from 'styled-components'
import { useInView } from "react-intersection-observer"
type MarginProps = {
    header:boolean,
}

const LineWrapper = styled(motion.div)<MarginProps>`
    width: 2px;
    height: 30px;
    background-color: #333;
    margin: ${({header}) => header ? "0 0 0 20px" :"0 15px"};
    border-radius:10px;
`
const lineV = {
    hidden: { opacity: 0, y: '15px' },
    visible: { opacity: 1, y: '0', transition: { duration: 0.4, delay: 0.5 } },
    exit: { opacity: 0, y: '-15px', transition: { duration:0.4}}
}

export const Line:VFC<MarginProps> = ({header}) => {
    const [ref, inView] = useInView({
        rootMargin:'-50px 0px',
        triggerOnce: true,
    })
    return (
        <>
        <LineWrapper
        header={header}
        ref={ref}
        variants={lineV}
        initial='hidden'
        animate={inView ? 'visible' : 'hidden'}
        exit="exit"
        />
        </>
    )
}
