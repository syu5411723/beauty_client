import {pc, sp, tab} from "./media"
import styled from "styled-components"
import { HeaderTitle } from "../atoms/header/HeaderTitle"

const Container = styled.header`
    width:100%;
    height:12vh;
    background-color: #E2C9D1;
    ${sp`
        width:100%;
        height:12vh;
    `}
    ${tab`
    `}
    ${pc`
    `}
`


const Header = () => {
    return (
        <>
            <Container>
                <HeaderTitle />
            </Container>
        </>
    )
}

export default Header
