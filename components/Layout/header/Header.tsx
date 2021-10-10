import { pc, sp, tab } from "../media"
import styled from "styled-components"
import { HeaderTitle } from "./HeaderTitle"
import { Line } from "../main/Line"
import { Nav } from "./Nav"

const Container = styled.header`
    width:100%;
    ${sp`
        height:12vh;
    `}
    ${tab`
        height:14vh;
    `}
    ${pc`
        height:16vh;
    `}
`

const HeaderTitleWrapper = styled.div`
    width:100%;
    height:75%;
    display:flex;
    justify-content:center;
    align-items:center;
`
const NavWrapper = styled.div`
    width:100%;
    height:25%;
    background-color:#E2C9D1;
`

const Header = () => {
    return (
        <>
            <Container>
                <HeaderTitleWrapper>
                    <HeaderTitle />
                    <Line header={true} />
                </HeaderTitleWrapper>
                <NavWrapper>
                    <Nav />
                </NavWrapper>
            </Container>
        </>
    )
}

export default Header
