import {VFC} from 'react'
import styled from 'styled-components'
import { sp, tab, pc } from '../../../Layout/media'

type Props = {
    category: string
}
const Wrapper = styled.div`
    right:0;
    background: rgb(227,226,231);
    display:flex;
    align-items:center;
    justify-content:center;
    color:#333;
    position:absolute;
    z-index: 2;
    ${sp`
        font-size: 6px;
        width:40%;
        height:30%;
        border-radius:2px;
    `}
    ${tab`
        font-size: 10px;
        width:33%;
        height:22%;
        border-radius:6px;
    `}
    ${pc`
        font-size: 12px;
        width:30%;
        height:20%;
        border-radius:10px;
    `}
`

export const PostCategory:VFC<Props> = ({category}) => {
    return (
        <Wrapper>
            <p>{category}</p>
        </Wrapper>
    )
}
