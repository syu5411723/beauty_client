import React, { VFC } from 'react'
import styled from 'styled-components'

type MarginProps = {
    header:boolean,
}

const LineWrapper = styled.div<MarginProps>`
    width: 2px;
    height: 30px;
    background-color: #333;
    margin: ${({header}) => header ? "0 0 0 20px" :"0 15px"};
    border-radius:10px;
`

export const Line:VFC<MarginProps> = ({header}) => {
    return (
        <>
        <LineWrapper header={header} />
        </>
    )
}
