import styled from "styled-components"
import Link from 'next/link'
import { VFC } from 'react'

type Props = {
    categoryText: string;
    postText: string;
    home: boolean;
    category: boolean;
    post: boolean;
}
type Home = {
    home: boolean;
}
type Category = {
    category: boolean;
}
type Post = {
    post: boolean;
}

const Wrapper = styled.div<Category>`
    width:${({ category }) => category ? '30%' : '50%'};
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    font-size: 11px;
    letter-spacing:0.03em;
`
const HomeText = styled.p<Home>`
    font-size:10px;
    ${({ home }) => !home && `
        color:#1558d6;
        border-bottom:1px solid #1558d6;
    `}
`
const CategoryText = styled.p<Category>`
    font-size:10px;
    ${({ category }) => !category && `
        color:#1558d6;
        border-bottom:1px solid #1558d6;
    `}
`
const PostText = styled.p<Post>`
    font-size:10px;
    ${({ post }) => !post && `
        color:#1558d6;
        border-bottom:1px solid #1558d6;
    `}
`



export const BreadList: VFC<Props> = ({ home, category, post, categoryText, postText }) => {
    return (
        <>
            <Wrapper category={category}>
                {home && <HomeText home={home}>Home</HomeText>}
                {category && (
                    <>
                        <Link href='/' scroll={false}>
                            <HomeText home={home}>Home</HomeText>
                        </Link>
                        <div>&gt;</div>
                        <CategoryText category={category}>{categoryText}</CategoryText>
                    </>
                )}
                {post && (
                    <>
                        <Link href='/' scroll={false}>
                            <HomeText home={home}>Home</HomeText>
                        </Link>
                        <div>&gt;</div>
                        <Link href={`/category/${categoryText}`} scroll={false}>
                            <CategoryText category={category}>{categoryText}</CategoryText>
                        </Link>
                        <div>&gt;</div>
                        <PostText post={post}>今の記事</PostText>
                    </>
                )}
            </Wrapper>
        </>
    )
}
