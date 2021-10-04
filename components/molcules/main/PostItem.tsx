import styled from 'styled-components'
import {VFC} from 'react'


import { PostCategory } from '../../atoms/main/posts/PostCategory'
import { PostContent } from '../../atoms/main/posts/PostContent'
import { PostCreated } from '../../atoms/main/posts/PostCreated'
import { PostImg } from '../../atoms/main/posts/PostImg'

type Props = {
    data:any,
    flex:boolean,
}

type flex = {
    flex: boolean,
}

const PostWrapper = styled.div<flex>`
    width:${({flex}) => flex  ? '48%' : '100%'};
    margin-bottom:${({flex}) => flex  ? '20px' : '40px'};;
`
const PostInner = styled.div<flex>`
    margin:0 auto;
    display:${({flex}) => flex ? 'block' : 'flex'};
`

const Content = styled.div<flex>`
    display:flex;
    flex-direction: column;
    justify-content:${({flex}) => flex  ? '' : 'space-between'};
    width:96%;
    margin:0 auto;
`

export const PostItem: VFC<Props>= ({data, flex}) => {
    return (
        <>
        {data.map((post) => (
            <PostWrapper key={post.id} flex={flex}>
                <PostInner flex={flex} >
                    <PostImg img={post.img} category={post.category} />
                    <Content flex={flex} >
                        <PostContent content={post.title} />
                        <PostCreated created={post.created} />
                    </Content>
                </PostInner>
            </PostWrapper>
        ))}
        </>
    )
}
