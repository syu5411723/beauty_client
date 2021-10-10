import styled from "styled-components"
import { SideCategory } from "../../molcules/main/side/SideCategory"
import { ProfileCard } from "../../organisms/ProfileCard"

const Container = styled.div`
    position: sticky;
    margin-top:calc(15.625rem + ((1vw - 6px) * 32.2222));
    top:3%;
    margin-right: 5%;
`
const ProfileWrapper = styled.div`
    box-shadow:0px 0px 5px #c8c8c8, 0px 0px 5px #c8c8c8;
    background-color:#fff;
    border-radius: 1%;
    margin-top: 15px;
`

export const SideBar = () => {
    return (
        <Container>
            <SideCategory />
            <ProfileWrapper>
                <ProfileCard side={true} />
            </ProfileWrapper>
        </Container>
    )
}