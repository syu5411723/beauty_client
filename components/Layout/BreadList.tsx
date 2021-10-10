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
    width:${({ category }) => category ? '28%' : '38%'};
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    font-size: 11px;
    letter-spacing:0.03em;
`
const HomeText = styled.p<Home>`
    ${({ home }) => !home && `
        color:#1558d6;
        border-bottom:1px solid #1558d6;
    `}
`
const CategoryText = styled.p<Category>`
    ${({ category }) => !category && `
        color:#1558d6;
        border-bottom:1px solid #1558d6;
    `}
`
const PostText = styled.p<Post>`
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
                        <Link href='/'>
                            <HomeText home={home}>Home</HomeText>
                        </Link>
                        <div>&gt;</div>
                        <CategoryText category={category}>{categoryText}</CategoryText>
                    </>
                )}
                {post && (
                    <>
                        <Link href='/'>
                            <HomeText home={home}>Home</HomeText>
                        </Link>
                        <div>&gt;</div>
                        <Link href={`/category/${categoryText}`}>
                            <CategoryText category={category}>{categoryText}</CategoryText>
                        </Link>
                        <div>&gt;</div>
                        <PostText post={post}>{postText}</PostText>
                    </>
                )}
            </Wrapper>
        </>
    )
}
