import { VFC } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { PostCategory } from './PostCategory'
import { sp, tab, pc } from '../../../Layout/media'

type Props = {
    img: string,
    category: string
}

const ImgWrapper = styled.div`
    width:98%;
    margin: 0 auto;
    position: relative;
    border-radius: 3px;
    ${sp`
        height: 25vw;
    `}
    ${tab`
        height: 25vw;
    `}
    ${pc`
        height: 25vw;
    `}
`

export const PostImg: VFC<Props> = ({ img, category }) => {
    return (
            <ImgWrapper>
                <PostCategory category={category}/>
                <Image src={img} layout='fill' objectFit='cover' />
            </ImgWrapper>
    )
}
