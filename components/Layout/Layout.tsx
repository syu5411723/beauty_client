import { motion } from "framer-motion"
import styled from "styled-components"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"

import { ProfileCard } from "../organisms/ProfileCard"
import Header from "./header/Header"
import Footer from "./footer/Footer"
import { ScrollTop } from "./ScrollTop"



const TopWrapper = styled(motion.div)`
`


const Container = styled.div`
    width:100vw;
    height:100%;
`
const LayoutInner = styled(motion.div)``
const innerV = {
    hidden: { opacity: 0, x: '-20px' },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: '20px' },
}
const topV = {
    hidden: {opacity: 0},
    visible: {opacity: 1,transition:{duration:0.4}}
}

export const Layout = ({ children }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [ref, inView] = useInView({
        rootMargin: '-50px 0px',
    })
    return (
        <Container>
            <Header />
            <LayoutInner
                variants={innerV}
                initial='hidden'
                animate="visible"
                exit='exit'
            >
                <div ref={ref} className='sample' />
                {children}
                <ProfileCard side={false} />
            </LayoutInner>
            <Footer />
            <TopWrapper
                variants={topV}
                animate={inView ? 'hidden' : 'visible'}
            >
                <ScrollTop />
            </TopWrapper>
        </Container>
    )
}
