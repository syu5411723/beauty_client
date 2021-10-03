import styled from 'styled-components'


import { PostCategory } from '../../../atoms/main/posts/PostCategory'
import { PostContent } from '../../../atoms/main/posts/PostContent'
import { PostCreated } from '../../../atoms/main/posts/PostCreated'
import { PostImg } from '../../../atoms/main/posts/PostImg'


const PostWrapper = styled.div`
    width:48%;
    margin-bottom: 10px;
`
const PostInner = styled.div`
    margin:0 auto;
`

const Content = styled.div`
    display:flex;
    flex-direction: column;
    width:96%;
    margin:0 auto;
`

export const PostItem= ({data}) => {
    return (
        <>
        {data.map((post) => (
            <PostWrapper key={post.id}>
                <PostInner>
                    <PostImg img={post.img} category={post.category} />
                    <Content>
                        <PostContent content={post.title} />
                        <PostCreated created={post.created} />
                    </Content>
                </PostInner>
            </PostWrapper>
        ))}
        </>
    )
}
