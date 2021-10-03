import styled from "styled-components"
import { SectionTitle } from "../Layout/SectionTitlte"
import { CategoryItem } from "../molcules/main/CategoryItem"


const ItemWrapper = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
`

export const CategoryLists = () => {
    return (
        <>
            <SectionTitle title="category" title2='カテゴリー' />
            <ItemWrapper>
                <CategoryItem />
            </ItemWrapper>
        </>
    )
}
