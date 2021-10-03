import styled from "styled-components"
import Link from 'next/link'

import Header from "./header/Header"
import Footer from "./footer/Footer"
import { ProfileCard } from "../organisms/ProfileCard"

const Container = styled.div`
    width:100%;
    height:100%;
`

export const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <Container>
                {children}
            </Container>
            <Footer />
        </>
    )
}

