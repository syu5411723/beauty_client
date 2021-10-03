import styled from "styled-components"
import { ArticleContent } from "../../../atoms/main/article/latest/ArticleContent"
import { ArticleImg } from "../../../atoms/main/article/latest/ArticleImg"

type DataProps = {
    data:{}
}

const Wrapper = styled.div`
    display:flex;
    flex-wrap:wrap;
    background: #ffffff;
`
const Inner = styled.div`
    padding:5px;
    display:flex;
    width:100%;
    margin-bottom:30px;
    justify-content:space-between;
`

export const ArticleItem = ({data}) => {
    return (
        <Wrapper>
            {data.map((post) => (
                <Inner key={post.id}>
                    <ArticleImg src={post.img} />
                    <ArticleContent content={post.title} />
                </Inner>
            ))}
        </Wrapper>
    )
}
