import styled from "styled-components"
import Link from 'next/link'

import Header from "../templates/Header"
import Footer from "../templates/Footer"

const Container = styled.div`
    width:100%;
    max-width:1300px;
`

export const Layout = ({children}) => {
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

