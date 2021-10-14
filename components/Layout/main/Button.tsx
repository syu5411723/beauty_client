import React, { VFC } from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import { ProfileBottomText } from '../../atoms/main/profle/ProfileBottomText'
import { sp } from '../media'

type Props = {
    text: string,
    link: string,
    side:boolean,
}
type Style = {
    side: boolean,
}
const Contaienr = styled.div<Style>`
    width:50%;
    height: calc(2.8125rem + ((1vw - 3.5px) * 3.6842));
    display:flex;
    margin:0 auto;
    margin-top: calc(1.875rem + ((1vw - 3.5px) * 5.2632));
    justify-content:center;
    align-items:center;
    background-color:#E2C9D1;
    border-radius:16px;
    padding: 1em 1em;
    color: #FFF;
    box-shadow: 0px 0px 0px 5px #E2C9D1;
    border: dashed 1px #FFF;
    transition: all 0.1s;
    font-size:calc(0.9375rem + ((1vw - 3.5px) * 1.0526));
    ${sp`
    height:35px;
    `}
    ${({side}) => side && `
        width:70%;
        height: 50px;
        font-size: calc(0.9375rem + ((1vw - 6px) * 0.4286));
    `}
    &:hover {
        box-shadow: 0px 0px 0px 5px #DB7093;
        background-color:#DB7093;
        transition: all 0.3s;
    }
`
const Dot = styled.div`
    margin-left: 5px;
`

export const Button: VFC<Props> = ({ side, text, link }) => {
    return (
        <Link href={link} >
            <Contaienr side={side}>
                <ProfileBottomText text={text} />
                <Dot>...</Dot>
            </Contaienr>
        </Link>
    )
}
