import styled from "styled-components"
import { SideCategoryList } from "../../../atoms/main/side/SideCategoryList"
import { SideCategoryTitle } from "../../../atoms/main/side/SideCategorytitle"

const Container = styled.div`
    box-shadow:0px 0px 5px #c8c8c8, 0px 0px 5px #c8c8c8;
    background-color:#fff;
    border-radius: 1%;
`

export const SideCategory = () => {
    return (
        <Container>
            <SideCategoryTitle />
            <SideCategoryList />
        </Container>
    )
}
