import React from 'react'
import styled from 'styled-components'

import { ProfileImg } from '../../../atoms/main/profle/ProfileImg'
import { ProfileName } from '../../../atoms/main/profle/ProfileName'

const InfoInner = styled.div`
    display:flex;
    flex-direction:column;
    text-align:center;
`

export const ProfileInfo = () => {
    return (
        <InfoInner>
            <ProfileImg />
            <ProfileName />
        </InfoInner>
    )
}
