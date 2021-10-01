import {pc, sp, tab} from "../Layout/media"
import styled from "styled-components"
import { HeaderTitle } from "../atoms/header/HeaderTitle"

const Container = styled.header`
    width:100%;
    height:12vh;
    ${sp`
        background-color: red;
        width:100%;
        height:12vh;
    `}
    ${tab`
        background-color:blue;

    `}
    ${pc`
        background-color: pink;
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
