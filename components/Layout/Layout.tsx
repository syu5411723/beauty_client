import styled from "styled-components"
import Link from 'next/link'

import Header from "./Header"
import Footer from "./Footer"

const Container = styled.div`
    width:100%;
    height:100%;
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

