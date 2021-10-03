import styled from "styled-components"
import { setFlagsFromString } from "v8"
import { CategoryButton } from "../../../atoms/main/article/category/CategoryButton"
import { CategoryText } from "../../../atoms/main/article/category/CategoryText"
import {PostData} from '../../../data/PostData'

const Wrapper = styled.div`
    width:40vw;
    height:30vw;
    margin-bottom: 30px;
    display:flex;
    justify-content: center;
    align-items:center;
    border:2px solid;
    border-radius:52% 48% 52% 48% / 51% 51% 49% 49%;
`

const filterData = PostData.filter((element, index, self) =>
    self.findIndex(e =>
        e.category === element.category &&
        e.link === element.link
        ) === index
)

export const CategoryItem = () => {
    return (
        <>
            {filterData.map(((post,index) => (
                <Wrapper key={index}>
                    <CategoryText category={post.category} link={ post.link}/>
                </Wrapper>
            )))}
        </>
    )
}
