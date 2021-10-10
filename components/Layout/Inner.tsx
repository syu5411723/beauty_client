import styled from "styled-components"
import { SideBar } from "../organisms/side/SideBar"
import { sp, pc, tab } from "./media"


const Container = styled.div`
    width:100%;
    display: flex;
`
const MainWrapper = styled.div`
    width:65%;
    ${sp`
        width:100%;
    `}
    background-color: #fff;
`
const SideWrapper = styled.div`
    width:35vw;
    position: relative;
    ${sp`
        width:0%;
        display:none;
    `}
`
export const Inner = ({ children }) => {
    return (
        <Container>
            <MainWrapper>
                {children}
            </MainWrapper>
            <SideWrapper>
                    <SideBar />
            </SideWrapper>
        </Container>
    )
}
