import React from 'react'
import styled from 'styled-components'
import { ProfileBottomText } from '../../../atoms/main/profle/ProfileBottomText'
import { ProfileIcn } from '../../../atoms/main/profle/ProfileIcn'

const Contaienr = styled.div`
    width:100%;
    height: 25vw;;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color: pink;
    color:#fff;
`
const Inner = styled.div`
    display:flex;
    flex-direction:column;

`

export const ProfileBottom = () => {
    return (
        <Contaienr>
            <Inner>
                <ProfileBottomText />
                <ProfileIcn></ProfileIcn>
            </Inner>
        </Contaienr>
    )
}
