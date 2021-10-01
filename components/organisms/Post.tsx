import React from 'react'
import styled from 'styled-components'
import { PostItem } from '../molcules/main/post/PostItem'

const PostContainer = styled.div`
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
`

export const Post = () => {
    return (
        <PostContainer>
            <PostItem />
        </PostContainer>
    )
}
