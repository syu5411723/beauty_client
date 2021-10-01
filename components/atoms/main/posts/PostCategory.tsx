import {VFC} from 'react'
import styled from 'styled-components'

type Props = {
    category: string
}
const Wrapper = styled.div`
    width:55%;
    height:6vw;
    margin:3vw auto;
    background-color: #999;
    border-radius:10px;
    display:flex;
    align-items:center;
    justify-content:center;
    color:#fff;
`

export const PostCategory:VFC<Props> = ({category}) => {
    return (
        <Wrapper>
            <p>{category}</p>
        </Wrapper>
    )
}
