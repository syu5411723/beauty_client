import styled from "styled-components"
import { SectionTitle } from "../Layout/main/SectionTitlte"
import { CategoryItem } from "../molcules/main/CategoryItem"

const Container = styled.div`
    margin-top: 80px;
    width: 92%;
    margin:0 auto;
`

const ItemWrapper = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
`

export const CategoryLists = () => {
    return (
        <Container>
            <SectionTitle title="category" title2='カテゴリー' />
            <ItemWrapper>
                <CategoryItem />
            </ItemWrapper>
        </Container>
    )
}
