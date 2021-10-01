import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
    font-size: 24px;
    letter-spacing:2px;
    color:white;
`
const Container = styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
`

export const HeaderTitle = () => {
    return (
        <Container>
            <Title>美容ソムリエのログ</Title>
        </Container>
    )
}
