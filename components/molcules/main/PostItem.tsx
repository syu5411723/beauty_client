import styled from 'styled-components'
import { VFC } from 'react'
import Link from 'next/dist/client/link'

import { PostContent } from '../../atoms/main/posts/PostContent'
import { PostCreated } from '../../atoms/main/posts/PostCreated'
import { PostImg } from '../../atoms/main/posts/PostImg'
import { motion } from 'framer-motion'

type Props = {
    data: any,
    flex: boolean,
}

type flex = {
    flex: boolean,
}

const PostWrapper = styled(motion.div)<flex>`
    width:${({ flex }) => flex ? '48%' : '100%'};
    margin-bottom:${({ flex }) => flex ? '20px' : '40px'};;
    border-radius: 5px;
    box-shadow:0px 0px 5px #c8c8c8, 0px 0px 5px #c8c8c8;
    transition: all 0.1s;
    &:hover {
        box-shadow:5px 5px 10px #c8c8c8, -5px -5px 10px #e5e5e5;
        transition:all 0.3s;
    }
`
const PostInner = styled.div<flex>`
    padding: 5px;
    margin:0 auto;
    display:${({ flex }) => flex ? 'block' : 'flex'};
`
const Content = styled.div<flex>`
    display:flex;
    flex-direction: column;
    justify-content:${({ flex }) => flex ? '' : 'space-between'};
    width:96%;
    margin:0 auto;
`
export const PostItem: VFC<Props> = ({ data, flex }) => {
    return (
        <>
            {data.map((post) => (
                <PostWrapper key={post.id} flex={flex}>
                    <Link href={`/posts/${post.id}`} scroll={false}>
                        <PostInner flex={flex} >
                            <PostImg img={post.img} category={post.category} />
                            <Content flex={flex} >
                                <PostContent content={post.title} />
                                <PostCreated created={post.created} />
                            </Content>
                        </PostInner>
                    </Link>
                </PostWrapper>
            ))}
        </>
    )
}
