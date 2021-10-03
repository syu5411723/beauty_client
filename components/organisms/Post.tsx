import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../Layout/SectionTitlte'
import { PostItem } from '../molcules/main/post/PostItem'

const PostContainer = styled.div`
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
`
const Container = styled.div`
`

export const Post = ({ data }) => {
    return (
        <Container>
            <SectionTitle title='new post' title2='新着記事'  />            <PostContainer>
                <PostItem data={data} />
            </PostContainer>
        </Container>
    )
}
