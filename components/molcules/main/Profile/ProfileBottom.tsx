import React from 'react'
import styled from 'styled-components'
import { ProfileBottomText } from '../../../atoms/main/profle/ProfileBottomText'
import { ProfileIcn } from '../../../atoms/main/profle/ProfileIcn'

const Contaienr = styled.div`
    width:60%;
    height: 15vw;;
    display:flex;
    margin:0 auto;
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

export const ProfileBottom = () => {
    return (
        <Contaienr>
            <Inner>
                <ProfileIcn />
                <ProfileBottomText />
                <Dot>...</Dot>
            </Inner>
        </Contaienr>
    )
}
