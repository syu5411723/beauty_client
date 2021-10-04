import { motion } from "framer-motion"
import styled from "styled-components"
import {useEffect} from "react"

import { ProfileCard } from "../organisms/ProfileCard"
import Footer from "./footer/Footer"
import Header from "./header/Header"

const Container = styled.div`
    width:100%;
    height:100%;
`

const LayoutInner = styled(motion.div)`
    width:92%;
    margin:0 auto;
    max-width:1300px;
`
const innerV = {
    hidden: { opacity: 0, x: '-20px' },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: '20px' },
}

export const Inner = ({ children }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Container>
            <Header />
            <LayoutInner
                variants={innerV}
                initial='hidden'
                animate="visible"
                exit='exit'
            >
                {children}
                <ProfileCard />
            </LayoutInner>
            <Footer />
        </Container>
    )
}
