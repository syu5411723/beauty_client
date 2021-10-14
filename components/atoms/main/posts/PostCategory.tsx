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
        width:40%;
        height:30%;
        border-radius:2px;
    `}
    ${tab`
        width:33%;
        height:22%;
        border-radius:6px;
    `}
    ${pc`
        width:30%;
        height:20%;
        border-radius:10px;
    `}
`
const T = styled.p`
    font-size:calc(0.375rem + ((1vw - 3.5px) * 0.6316));
    letter-spacing:0;
    ${pc`
        letter-spacing:0.1em;
    `}
`

export const PostCategory:VFC<Props> = ({category}) => {
    return (
        <Wrapper>
            <T>{category}</T>
        </Wrapper>
    )
}
