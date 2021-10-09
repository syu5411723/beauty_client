import {VFC} from 'react'
import styled from 'styled-components'

type Props = {
    category: string
}
const Wrapper = styled.div`
    width:35%;
    height:5vw;
    font-size: 8px;
    right:0;
    background: #bfbec5;
    display:flex;
    align-items:center;
    justify-content:center;
    color:#333;
    position:absolute;
    z-index: 2;
`

export const PostCategory:VFC<Props> = ({category}) => {
    return (
        <Wrapper>
            <p>{category}</p>
        </Wrapper>
    )
}
