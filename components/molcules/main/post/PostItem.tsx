import styled from 'styled-components'
import { PostCategory } from '../../../atoms/main/posts/PostCategory'
import { PostContent } from '../../../atoms/main/posts/PostContent'
import { PostCreated } from '../../../atoms/main/posts/PostCreated'
import { PostImg } from '../../../atoms/main/posts/PostImg'

import { PostData } from '../../../data/PostData'

const PostWrapper = styled.div`
    width:48%;
    background-color:gray;
    padding: 4px;
    margin-bottom: 10px;
    text-align:center;
`
const PostInner = styled.div`

    margin:0 auto;
`

const Content = styled.div`
    display:flex;
    flex-direction: column;

`

export const PostItem = () => {
    return (
        <>
        {PostData.map((post) => (
            <PostWrapper key={post.id}>
                <PostInner>
                    <PostImg img={post.img}/>
                    <Content>
                        <PostCategory category={post.category} />
                        <PostContent content={post.content} />
                        <PostCreated created={post.created} />
                    </Content>
                </PostInner>
            </PostWrapper>
        ))}
        </>
    )
}
