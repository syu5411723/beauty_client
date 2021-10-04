import React from 'react'
import styled from 'styled-components'
import { pc, sp, tab} from '../media'

const Title = styled.h1`
    ${sp`
        font-size: 5vw;
    `}

    letter-spacing:2px;
    font-family: 'M PLUS 1p', sans-serif;
    font-weight: 400;
`
export const HeaderTitle = () => {
    return (
            <Title>IT美容師のすすめ</Title>
    )
}
