import React from 'react'
import styled from 'styled-components'

import { Button } from '../Layout/main/Button'
import { ProfileInfo, ProfileContent } from '../molcules/main/Profile/index'

const Container = styled.div`
    width:100%;
    padding:100px 10px 20px 10px;
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
            <Button link="/profile" text="Profile" />
        </Container>
    )
}
