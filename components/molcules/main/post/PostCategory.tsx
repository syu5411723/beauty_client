import React from 'react'
import styled from 'styled-components'

import { pc, tab, sp } from '../../../Layout/media'
import { PostCategoryItem } from '../../../atoms/main/posts/category/PostCategoryItem'


const Container = styled.div`
    width:100%;
    margin-top:100px;
    margin-bottom: 60px;
    display:flex;
    justify-content: space-between;

    ${sp`
        flex-wrap:wrap;
    `}
`

export const PostCategory = () => {
    return (
        <Container>
            <PostCategoryItem />
        </Container>
    )
}
