import styled from "styled-components"
import { ProfileCard } from "../organisms/ProfileCard"

const LayoutInner = styled.div`
    width:92%;
    margin:0 auto;
    max-width:1300px;
`

export const Inner = ({children}) => {
    return (
        <LayoutInner>
            {children}
            <ProfileCard />
        </LayoutInner>
    )
}
