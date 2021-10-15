import styled from 'styled-components'
import { VFC } from 'react'
import Link from 'next/link'

import { PostContent } from '../../atoms/main/posts/PostContent'
import { PostCreated } from '../../atoms/main/posts/PostCreated'
import { PostImg } from '../../atoms/main/posts/PostImg'
import { motion } from 'framer-motion'

type Props = {
    data: any,
    flex: boolean,
    home: boolean;
}

type flex = {
    flex: boolean,
}

const PostWrapper = styled(motion.div) <flex>`
    width:${({ flex }) => flex ? '48%' : '100%'};
    margin-bottom:${({ flex }) => flex ? '20px' : '25px'};;
    border-radius: 5px;
    box-shadow:0px 0px 5px #c8c8c8, 0px 0px 5px #c8c8c8;
    background-color: #fff;
    cursor:pointer;
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
export const PostItem: VFC<Props> = ({ home, data, flex }) => {
    return (
        <>
            {home ? (
                <>
                    {[...Array(10)].map((_, i) => (
                        <PostWrapper key={data[i].id} flex={flex}>
                            <Link href={`/posts/${data[i].id}`} scroll={false}>
                                <PostInner flex={flex} >
                                    <PostImg img={data[i].img} category={data[i].category} />
                                    <Content flex={flex} >
                                        <PostContent title={data[i].title} home={home} />
                                        <PostCreated created={data[i].created} />
                                    </Content>
                                </PostInner>
                            </Link>
                        </PostWrapper>
                    ))}
                </>
            ) : (
                <>
                    {[...Array(2)].map((_, i) => (
                        <PostWrapper key={data[i].id} flex={flex}>
                            <Link href={`/posts/${data[i].id}`} scroll={false}>
                                <PostInner flex={flex} >
                                    <PostImg img={data[i].img} category={data[i].category} />
                                    <Content flex={flex} >
                                        <PostContent title={data[i].title} home={home} />
                                        <PostCreated created={data[i].created} />
                                    </Content>
                                </PostInner>
                            </Link>
                        </PostWrapper>
                    ))}
                </>
            )}
        </>
    )
}
