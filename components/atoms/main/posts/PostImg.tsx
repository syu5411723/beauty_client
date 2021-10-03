import { VFC } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { PostCategory } from './PostCategory'

type Props = {
    img: string,
    category: string
}

const ImgWrapper = styled.div`
    width:98%;
    height: 25vw;
    margin: 0 auto;
    position: relative;
    border-radius: 3px;
`

export const PostImg: VFC<Props> = ({ img, category }) => {
    return (
            <ImgWrapper>
                <PostCategory category={category}/>
                <Image src={img} layout='fill' objectFit='cover' />
            </ImgWrapper>
    )
}
