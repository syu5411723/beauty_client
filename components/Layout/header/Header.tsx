import { pc, sp, tab } from "../media"
import styled from "styled-components"
import { HeaderTitle } from "./HeaderTitle"
import { Line } from "../Line"
import { Nav } from "./Nav"

const Container = styled.header`
    width:100%;
    height:20vh;
    /* background-color: #E2C9D1; */
    ${sp`
        width:100%;
        height:16vh;
    `}
    ${tab`
    `}
    ${pc`
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
