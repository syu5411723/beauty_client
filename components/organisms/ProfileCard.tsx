import styled from 'styled-components'

import { Button } from '../Layout/main/Button'
import { ProfileInfo, ProfileContent } from '../molcules/main/Profile/index'

const Container = styled.div`
    width:92%;
    margin:0 auto;
    padding:calc(2.5rem + ((1vw - 3.5px) * 2.1053)) 10px 20px 10px;
`

const InfoContainer = styled.div`
    display:flex;
    justify-content:center;
    margin-bottom: 30px;
`
const ButotnWrapper = styled.div`
    width:100%;
    margin:0 auto;
`

export const ProfileCard = ({side}) => {
    return (
        <Container>
            <InfoContainer>
                <ProfileInfo side={side} />
            </InfoContainer>
            <ProfileContent side={side} />
            <ButotnWrapper>
                <Button side={side} link="/profile" text="Profile" />
            </ButotnWrapper>
        </Container>
    )
}
