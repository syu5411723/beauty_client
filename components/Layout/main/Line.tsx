import { motion } from 'framer-motion'
import React, { VFC } from 'react'
import styled from 'styled-components'
import { useInView } from "react-intersection-observer"
type MarginProps = {
    header: boolean,
}

const LineWrapper = styled(motion.div) <MarginProps>`
    width: calc(0.125rem + ((1vw - 3.5px) * 0.1053));
    height: calc(1.625rem + ((1vw - 3.5px) * 2.1053));
    background-color: #333;
    margin: ${({ header }) => header ? "0 0 0 40px" : "0 15px"};
    border-radius:10px;
    ${({ header }) => header ? `
    margin:0  calc(0.625rem + ((1vw - 3.5px) * 1.7895));
    ` : `
    margin:0 calc(0.9375rem + ((1vw - 3.5px) * 2.6316))
    `}
`
const lineV = {
    hidden: { opacity: 0, y: '15px' },
    visible: { opacity: 1, y: '0', transition: { duration: 0.4, delay: 0.5 } },
    exit: { opacity: 0, y: '-15px', transition: { duration: 0.4 } }
}

export const Line: VFC<MarginProps> = ({ header }) => {
    const [ref, inView] = useInView({
        rootMargin: '-50px 0px',
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
