import React from 'react'
import styled from 'styled-components'

const Container = styled.footer`
    width: 100%;
    height: 50px;
    text-align: center;
`
const Text = styled.p`
    opacity: 0.7;
    font-size: 14px;
`

const Footer = () => {
    return (
        <Container>
            <Text>&copy;&nbsp;&nbsp;2021&nbsp;IT_BEAUTY</Text>
        </Container>
    )
}

export default Footer
