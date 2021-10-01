import styled from "styled-components"
import { CategoryButton } from "../../../atoms/main/article/category/CategoryButton"
import { CategoryText } from "../../../atoms/main/article/category/CategoryText"
import { CategoryData } from "../../../data/CategoryData"

const Wrapper = styled.div`
    width:90%;
    height: 12vw;
    margin: 0 auto;
    display:flex;
    align-items:center;
    border-bottom: 1px solid;
`

export const CategoryItem = () => {
    return (
        <>
            {CategoryData.map((category, index) => (
                <Wrapper key={index}>
                    <CategoryButton />
                    <CategoryText category={ category.text} link={ category.link}/>
                </Wrapper>
            ))}
        </>
    )
}
