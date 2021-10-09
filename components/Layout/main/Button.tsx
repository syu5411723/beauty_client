import React, { VFC } from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import { ProfileBottomText } from '../../atoms/main/profle/ProfileBottomText'
import { ProfileIcn } from '../../atoms/main/profle/ProfileIcn'

type Props = {
    text: string,
    link: string,
}
const Contaienr = styled.div`
    width:60%;
    height: 10vw;;
    display:flex;
    margin:30px auto 0;
    justify-content:center;
    align-items:center;
    background-color:#E2C9D1;
    border-radius:16px;
    padding: 1em 1em;
    color: #FFF;
    box-shadow: 0px 0px 0px 5px #E2C9D1;
    border: dashed 1px #FFF;
    transition: all 0.1s;
    &:hover {
        box-shadow: 0px 0px 0px 5px #DB7093;
        background-color:#DB7093;
        transition: all 0.3s;
    }
`
const Dot = styled.div`
    margin-left: 5px;
`

export const Button: VFC<Props> = ({ text, link }) => {
    return (

        <Link href={link} >
            <Contaienr>
                <ProfileIcn />
                <ProfileBottomText text={text} />
                <Dot>...</Dot>
            </Contaienr>
        </Link>

    )
}
