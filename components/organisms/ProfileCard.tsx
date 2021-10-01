﻿import React from 'react'
import styled from 'styled-components'

import { ProfileInfo, ProfileContent, ProfileBottom } from '../molcules/main/Profile/index'

const Container = styled.div`
    width:100%;
    border: 1px solid;
    padding:100px 10px 20px 10px;
    margin-top: 100px;
    margin-bottom: 200px;
`

const InfoContainer = styled.div`
    display:flex;
    justify-content:center;
    margin-bottom: 30px;
`

export const ProfileCard = () => {
    return (
        <Container>
            <InfoContainer>
                <ProfileInfo />
            </InfoContainer>
            <ProfileContent />
            <ProfileBottom />
        </Container>
    )
}