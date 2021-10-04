import React, { VFC } from 'react'
import styled from 'styled-components'
import { ProfileBottomText } from '../atoms/main/profle/ProfileBottomText'
import { ProfileIcn } from '../atoms/main/profle/ProfileIcn'

type Props = {
    text: string,
}

const Contaienr = styled.div`
    width:60%;
    height: 10vw;;
    display:flex;
    margin:30px auto 0;
    justify-content:center;
    align-items:center;
    background-color:#E2C9D1;
    color:#fff;
    border-radius:20px;
`
const Inner = styled.div`
    display:flex;
`
const Dot = styled.div`
    margin-left: 5px;
`

export const Button: VFC<Props> = ({text}) => {
    return (
        <Contaienr>
            <Inner>
                <ProfileIcn />
                <ProfileBottomText text={text} />
                <Dot>...</Dot>
            </Inner>
        </Contaienr>
    )
}
